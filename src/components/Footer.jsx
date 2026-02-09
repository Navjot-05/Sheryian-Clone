import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Linkedin, Youtube, Rocket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <NavLink to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                <Rocket className="text-black w-6 h-6" />
                            </div>
                            <span className="text-2xl font-display font-bold text-white">
                                Sheryians <span className="text-primary">2.0</span>
                            </span>
                        </NavLink>
                        <p className="text-white/50 leading-relaxed max-w-xs">
                            Empowering the next generation of developers with world-class education and real-world skills.
                        </p>
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-6">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Integrations', 'Pricing', 'Changelog'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/50 hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {['Documentation', 'Guides', 'API Reference', 'Community'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/50 hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Blog', 'Privacy Policy'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/50 hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-sm">
                        © {new Date().getFullYear()} Sheryians Coding School. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-white/30">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
