import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Product',
            path: '/product',
            dropdown: [
                { name: 'Overview', path: '/product/overview' },
                { name: 'Features', path: '/product/features' },
                { name: 'Integrations', path: '/product/integrations' },
            ]
        },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Resources', path: '/resources' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Rocket className="text-black w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Sheryians <span className="text-primary italic">2.0</span>
                    </span>
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${isActive ? 'text-primary' : 'text-white/70'}`}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                            </NavLink>

                            {link.dropdown && (
                                <div className="absolute top-full left-0 pt-4 hidden group-hover:block transition-all duration-300">
                                    <div className="bg-surface border border-white/10 rounded-xl p-2 w-48 shadow-2xl">
                                        {link.dropdown.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.path}
                                                className="block px-4 py-2 text-sm text-white/70 hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">Sign In</button>
                    <button className="btn-primary py-2.5 px-6">Join Now</button>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-surface border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-white/70 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </NavLink>
                                    {link.dropdown && (
                                        <div className="pl-4 mt-2 flex flex-col gap-3 border-l border-white/5">
                                            {link.dropdown.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-white/50 hover:text-primary text-sm"
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-6 flex flex-col gap-4">
                                <button className="btn-secondary w-full">Sign In</button>
                                <button className="btn-primary w-full">Join Now</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
