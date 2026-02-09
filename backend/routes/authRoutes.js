import express from 'express';
import passport from 'passport';
import { registerUser, authUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', authUser);

// Google OAuth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect to frontend with token
        // In a real app, you might send the token in a cookie or a query param
        res.redirect(`http://localhost:5173/auth-success?token=${req.user.generateToken()}`);
    }
);

export default router;
