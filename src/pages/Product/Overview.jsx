import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Layout, Shield, Cpu, Globe } from 'lucide-react';

const ProductOverview = () => {
    const features = [
        { title: 'Modern Stack', desc: 'Master React, Next.js, Node.js and more.', icon: Code2 },
        { title: 'Hyper Performance', desc: 'Optimize for speed and scalability.', icon: Zap },
        { title: 'Clean Architecture', desc: 'Learn production-grade patterns.', icon: Layout },
        { title: 'Security First', desc: 'Implement robust authentication systems.', icon: Shield },
        { title: 'Cloud Infrastructure', desc: 'Deploy with AWS, Docker, and K8s.', icon: Cpu },
        { title: 'Global Community', desc: 'Native networking with top developers.', icon: Globe },
    ];

    return (
        <div className="pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-32">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-display font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                    >
                        A Platform Built <br />for the <span className="text-primary italic">1%.</span>
                    </motion.h1>
                    <p className="text-white/50 text-xl max-w-3xl mx-auto leading-relaxed">
                        We don't just teach coding. We build engineers. Our ecosystem is designed to take you from a curious learner to a high-impact developer.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                                <f.icon className="text-white/40 group-hover:text-primary transition-colors" size={28} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">{f.title}</h3>
                            <p className="text-white/50 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Deep Dive Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-20 overflow-hidden">
                    <div>
                        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 italic">"Code is just the medium. Creation is the goal."</h2>
                        <div className="space-y-6 text-white/60 leading-relaxed">
                            <p>At Sheryians, we believe that the current education system is broken. Theory is great, but execution is everything.</p>
                            <p>Our curriculum is built around real-world projects, industry feedback, and the actual technical debts encountered in top companies.</p>
                            <p>When you join us, you're not just buying a course. You're entering a high-performance bubble that demands excellence and delivers results.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
                        <div className="glass-card aspect-square flex flex-col items-center justify-center p-12 text-center relative z-10">
                            <div className="text-8xl font-display font-black text-primary mb-4 opacity-20">01</div>
                            <h4 className="text-3xl font-display font-bold mb-4">Project First</h4>
                            <p className="text-white/50">Build 10+ production apps before you even start interviewing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;
