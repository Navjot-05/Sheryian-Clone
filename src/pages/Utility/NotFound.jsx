import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-[10rem] md:text-[15rem] font-display font-black text-white opacity-5 select-none leading-none">404</h1>
                <div className="relative -mt-20 md:-mt-32">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Lost in <span className="text-primary italic">Space?</span></h2>
                    <p className="text-white/50 text-lg mb-12 max-w-md mx-auto">
                        The page you're looking for has moved to a higher dimension or never existed.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <NavLink to="/" className="btn-primary px-10 h-14 flex items-center">Return Home</NavLink>
                        <NavLink to="/contact" className="btn-secondary px-10 h-14 flex items-center">Get Help</NavLink>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
