import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, PlayCircle, Users, Trophy, Code2 } from 'lucide-react';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                            Now Enrolling: Full Stack Mastery 3.0
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.1]">
                            Master the Art of <br />
                            <span className="text-primary italic">Modern Engineering</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            Don't just code. Build world-class products. Sheryians 2.0 brings you high-end curriculum designed for the future of tech.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="btn-primary w-full sm:w-auto h-14 px-10 flex items-center justify-center gap-2 text-lg">
                                Explore Courses <ArrowRight size={20} />
                            </button>
                            <button className="btn-secondary w-full sm:w-auto h-14 px-10 flex items-center justify-center gap-2 text-lg">
                                Watch Trailer <PlayCircle size={20} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-white/40 mb-12 uppercase tracking-widest text-sm font-bold">Trusted by developers at</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center grayscale opacity-50 contrast-125">
                        <div className="flex justify-center font-display text-2xl font-bold italic">Google</div>
                        <div className="flex justify-center font-display text-2xl font-bold italic">Meta</div>
                        <div className="flex justify-center font-display text-2xl font-bold italic">Amazon</div>
                        <div className="flex justify-center font-display text-2xl font-bold italic">Microsoft</div>
                        <div className="flex justify-center font-display text-2xl font-bold italic">Netflix</div>
                        <div className="flex justify-center font-display text-2xl font-bold italic">Apple</div>
                    </div>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Built for Excellence</h2>
                        <p className="text-white/50 max-w-2xl mx-auto text-lg">The most comprehensive learning experience architecture ever built.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Interactive Curriculum', desc: 'Real-time code editing and collaborative projects integrated directly into the platform.', icon: Code2 },
                            { title: 'Community Mentorship', desc: 'Direct access to world-class engineers who have built the tools you use every day.', icon: Users },
                            { title: 'Career Acceleration', desc: 'Industry-standard portfolio building and direct interview pipelines to top-tier companies.', icon: Trophy },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="glass-card p-10 hover:border-primary/50 transition-colors"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
                                    <item.icon className="text-primary w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Show Results/Stats */}
            <section className="py-32 bg-primary/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">Numbers that define <br />our success.</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { label: 'Active Students', value: '50K+' },
                                { label: 'Success Rate', value: '98%' },
                                { label: 'Average Package', value: '18 LPA' },
                                { label: 'Courses', value: '12+' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</p>
                                    <p className="text-white/50 text-sm tracking-wider uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card p-4 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                            alt="Dashboard Preview"
                            className="rounded-xl relative z-10 w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Voted #1 choice <br />by students.</h2>
                        </div>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-primary fill-primary" size={24} />)}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Arjun Sharma', role: 'SDE-2 @ Uber', text: 'The depth of content and the way animations are taught here is UNMATCHED. It completely changed how I think about frontend.' },
                            { name: 'Priya Verma', role: 'Full Stack Dev @ Zomato', text: 'Sheryians helped me bridge the gap between "coding" and "building products". The mentorship is real and raw.' },
                            { name: 'Sahil Kapoor', role: 'Frontend Engineer @ Razorpay', text: 'Highly recommend! The UI/UX modules and the projects we build are industry-grade. No fluff, only pure value.' },
                        ].map((test, i) => (
                            <div key={i} className="glass-card p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-white/10" />
                                    <div>
                                        <h4 className="font-bold">{test.name}</h4>
                                        <p className="text-primary text-xs uppercase tracking-wider">{test.role}</p>
                                    </div>
                                </div>
                                <p className="text-white/70 italic leading-relaxed">"{test.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
                    <div className="bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 rounded-[40px] p-12 md:p-20 text-center backdrop-blur-3xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-full rounded-full -translate-y-1/2 translate-x-1/2" />

                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to transform your <br /><span className="text-primary underline decoration-primary/30 underline-offset-8">career?</span></h2>
                        <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto">Join 50,000+ developers who have already taken the leap. The revolution starts here.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="btn-primary h-14 px-12 text-lg">Get Started Now</button>
                            <button className="text-white font-medium hover:text-primary transition-colors flex items-center gap-2">Contact Sales <ArrowRight size={20} /></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
