import Order from '../models/Order.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// @desc    Create new order (Generate Razorpay Order)
// @route   POST /api/orders
// @access  Private
export const addOrderItems = async (req, res) => {
    try {
        const { courseId, totalPrice } = req.body;

        const options = {
            amount: totalPrice * 100, // amount in the smallest currency unit (paise)
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const rzpOrder = await razorpay.orders.create(options);

        const order = new Order({
            user: req.user._id,
            course: courseId,
            totalPrice,
            paymentResult: {
                id: rzpOrder.id,
                status: 'created'
            }
        });

        const createdOrder = await order.save();
        res.status(201).json({
            order: createdOrder,
            rzpOrder
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
export const updateOrderToPaid = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            const order = await Order.findById(req.params.id);

            if (order) {
                order.isPaid = true;
                order.paidAt = Date.now();
                order.paymentResult = {
                    id: razorpay_payment_id,
                    status: 'paid',
                    update_time: Date.now().toString(),
                };

                const updatedOrder = await order.save();
                res.json(updatedOrder);
            } else {
                res.status(404).json({ message: 'Order not found' });
            }
        } else {
            res.status(400).json({ message: 'Invalid signature' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
