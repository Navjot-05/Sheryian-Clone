import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '0',
            desc: 'Perfect for exploring the fundamentals and starting your journey.',
            features: ['Foundational Concepts', 'Community Access', 'Basic Projects', 'Public Profiles'],
            cta: 'Start for Free',
            popular: false
        },
        {
            name: 'Pro Mastery',
            price: '4,999',
            desc: 'The complete path to becoming a world-class software engineer.',
            features: ['Advanced Curriculum', 'Direct Mentorship', 'Live Cohort Sessions', 'Priority Support', 'Job Referrals', 'Certificate'],
            cta: 'Enroll Now',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            desc: 'Tailored solutions for teams and corporate training programs.',
            features: ['Volume Licensing', 'Dedicated Manager', 'Custom Curriculum', 'In-depth Analytics', 'SSO Integration'],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-6"
                    >
                        Simple, Transparent <br /><span className="text-primary italic">Investment.</span>
                    </motion.h1>
                    <p className="text-white/50 text-xl max-w-2xl mx-auto font-light">
                        No hidden fees. No surprises. Just the best education for your professional growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-card p-10 flex flex-col relative ${plan.popular ? 'border-primary/40 bg-primary/[0.03]' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{plan.desc}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-4xl font-display font-bold">₹{plan.price}</span>
                                {plan.price !== 'Custom' && <span className="text-white/40 text-sm">/course</span>}
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-white/70">
                                        <Check className="text-primary" size={18} />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`${plan.popular ? 'btn-primary' : 'btn-secondary'} w-full py-4`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-display font-bold mb-12 text-center">Common Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'Can I switch plans mid-way?', a: 'Yes, you can upgrade your plan at any time. The difference will be calculated on a pro-rata basis.' },
                            { q: 'Is there a money-back guarantee?', a: 'We offer a 7-day unconditional money-back guarantee for all our Pro Mastery courses.' },
                            { q: 'Do you offer student discounts?', a: 'Absolutely! Send us a photo of your valid student ID and we will provide a special scholarship code.' },
                        ].map((faq, i) => (
                            <div key={i} className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <HelpCircle className="text-primary shrink-0" size={24} />
                                    <div>
                                        <h4 className="font-bold mb-2">{faq.q}</h4>
                                        <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
