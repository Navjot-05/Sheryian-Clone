import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-7xl font-display font-bold mb-8"
                        >
                            The Story of <br /><span className="text-primary italic">Sheryians.</span>
                        </motion.h1>
                        <p className="text-white/60 text-xl leading-relaxed mb-10">
                            Sheryians Coding School started with a simple belief: anyone can code, but only a few can engineer.
                        </p>
                        <div className="space-y-6 text-white/50 leading-relaxed">
                            <p>Founded by Harsh Vandana Sharma (Shery), we set out to bridge the massive gap between academic learning and industry expectations.</p>
                            <p>What started as a small classroom has now evolved into a global movement of developers who are building the future.</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-50 transition-opacity group-hover:opacity-100" />
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team Meeting"
                            className="rounded-3xl border border-white/10 relative z-10 w-full hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Values */}
                <div className="mb-32">
                    <h2 className="text-4xl font-display font-bold mb-20 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Obsession with Detail', desc: 'From the first line of code to the last pixel of CSS, we care about everything.' },
                            { title: 'Radical Transparency', desc: 'No fluff. No fake promises. We tell you exactly what it takes to succeed.' },
                            { title: 'Community First', desc: 'We are nothing without our students. Their success is our only metric.' },
                        ].map((v, i) => (
                            <div key={i} className="glass-card p-10">
                                <h3 className="text-2xl font-display font-bold mb-6 text-primary">{v.title}</h3>
                                <p className="text-white/60 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-display font-bold mb-20 text-center">The Journey</h2>
                    <div className="space-y-12">
                        {[
                            { year: '2020', event: 'Sheryians was born in a small room with 5 students.' },
                            { year: '2021', event: 'Launched our first online cohort. Grew to 1,000+ students.' },
                            { year: '2022', event: 'Partnered with top tech giants for placement pipelines.' },
                            { year: '2023', event: 'Sheryians 2.0 launched with a brand new AI-powered platform.' },
                            { year: '2024', event: 'Touching 50,000+ lives across the globe.' },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 items-start relative pb-12 last:pb-0">
                                {i !== 4 && <div className="absolute top-10 left-[19px] w-[2px] h-full bg-white/5" />}
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 z-10 text-black font-bold text-sm">{i + 1}</div>
                                <div>
                                    <span className="text-primary font-display font-bold text-xl block mb-2">{item.year}</span>
                                    <p className="text-white/60 leading-relaxed">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
