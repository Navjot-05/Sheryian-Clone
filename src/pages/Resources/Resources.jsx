import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Lightbulb, Play, ArrowUpRight } from 'lucide-react';

const Resources = () => {
    const categories = [
        { title: 'Documentation', icon: Book, desc: 'Everything you need to know about our platform and curriculum.', count: '42 articles' },
        { title: 'Blog', icon: FileText, desc: 'Latest news, engineering insights, and student success stories.', count: '120+ posts' },
        { title: 'Guides', icon: Lightbulb, desc: 'Step-by-step tutorials on modern web development techniques.', count: '15 guides' },
        { title: 'Workshops', icon: Play, desc: 'Recorded sessions from our guest speakers and industry experts.', count: '30 videos' },
    ];

    return (
        <div className="pt-40 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-8"
                    >
                        Resources & <br /><span className="text-primary italic">Knowledge.</span>
                    </motion.h1>
                    <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
                        Deepen your understanding and stay updated with the latest in technology and engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 group cursor-pointer hover:border-primary/40 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                                    <cat.icon className="text-white/40 group-hover:text-primary" size={32} />
                                </div>
                                <ArrowUpRight className="text-white/20 group-hover:text-primary transition-colors" size={24} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">{cat.title}</h3>
                            <p className="text-white/50 leading-relaxed mb-6">{cat.desc}</p>
                            <span className="text-xs text-primary font-bold uppercase tracking-widest">{cat.count}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Blog Posts */}
                <div>
                    <h2 className="text-4xl font-display font-bold mb-16">Featured Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'The Future of Web Engines in 2026', date: 'Feb 10, 2026', tag: 'Engineering' },
                            { title: 'Scaling React Apps for 1M+ Users', date: 'Feb 05, 2026', tag: 'Performance' },
                            { title: 'How Arjun Landed a 24 LPA Job', date: 'Jan 28, 2026', tag: 'Success Story' },
                        ].map((post, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:opacity-100 opacity-0 transition-opacity" />
                                </div>
                                <div className="flex gap-4 items-center mb-3">
                                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-widest border border-primary/20">{post.tag}</span>
                                    <span className="text-white/30 text-xs">{post.date}</span>
                                </div>
                                <h4 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors leading-tight">{post.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
