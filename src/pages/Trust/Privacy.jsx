import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="pt-40 pb-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <Shield className="text-primary w-16 h-16 mx-auto mb-6" />
                    <h1 className="text-5xl font-display font-bold mb-6">Trust & <span className="text-primary italic">Security.</span></h1>
                    <p className="text-white/50 text-xl">Your data is yours. We just help you learn.</p>
                </div>

                <div className="space-y-12">
                    <section className="glass-card p-10">
                        <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                            <Lock className="text-primary" size={24} /> Data Encryption
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            All data transmitted between our servers and your device is encrypted using industry-standard AES-256 encryption. Your credentials never touch our servers in plain text.
                        </p>
                    </section>

                    <section className="glass-card p-10">
                        <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                            <Eye className="text-primary" size={24} /> Privacy Policy
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-6">
                            We collect minimal information to ensure you have the best learning experience. We never sell your data to third parties.
                        </p>
                        <ul className="space-y-3">
                            {['Cookies for session management only', 'Email for notifications and login', 'Learning progress for your dashboard'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/40 text-sm">
                                    <CheckCircle className="text-primary" size={16} /> {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="glass-card p-10">
                        <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                            <FileText className="text-primary" size={24} /> Terms of Service
                        </h2>
                        <p className="text-white/60 leading-relaxed">
                            By using Sheryians 2.0, you agree to respect our community guidelines and intellectual property. Sharing of account credentials is strictly prohibited and may lead to account suspension.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
