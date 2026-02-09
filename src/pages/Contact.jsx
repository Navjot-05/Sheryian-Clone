import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left: Info */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-display font-bold mb-8"
                        >
                            Let's build <br /><span className="text-primary italic">together.</span>
                        </motion.h1>
                        <p className="text-white/50 text-xl mb-12 max-w-md leading-relaxed">
                            Have questions about our cohorts? Or just want to say hi? We're here for you.
                        </p>

                        <div className="space-y-8 mb-16">
                            {[
                                { icon: Mail, label: 'Email', value: 'hello@sheryians.com' },
                                { icon: Phone, label: 'Phone', value: '+91 800 123 4567' },
                                { icon: MapPin, label: 'Location', value: 'Bhopal, Madhya Pradesh, India' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-center">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <item.icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/30 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-white/80 font-medium">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="glass-card p-8 md:p-12">
                        <h3 className="text-2xl font-display font-bold mb-8">Send us a message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs text-white/40 uppercase tracking-widest pl-1">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-white/40 uppercase tracking-widest pl-1">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-white/40 uppercase tracking-widest pl-1">Topic</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 transition-colors text-white/60">
                                    <option>General Inquiry</option>
                                    <option>Full Stack Mastery Cohort</option>
                                    <option>Career Support</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-white/40 uppercase tracking-widest pl-1">Message</label>
                                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 transition-colors" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="btn-primary w-full py-5 flex items-center justify-center gap-2 text-lg">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
