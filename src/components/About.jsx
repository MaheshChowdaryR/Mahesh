import { motion } from 'framer-motion';
import { Download, Rocket, Server, Users, Zap } from 'lucide-react';
import resumeFile from '../assets/Resume.pdf'; // We will need to create a dummy resume file or handle this import

export default function About() {
    const highlights = [
        {
            icon: <Server className="w-5 h-5 text-blue-500" />,
            title: "End-to-End Architecture",
            desc: "Handling everything from VPS configuration and Authentication (Supabase) to complex Backend/Frontend logic."
        },
        {
            icon: <Users className="w-5 h-5 text-purple-500" />,
            title: "Direct Stakeholder Collaboration",
            desc: "Working directly with US-based clients to translate urgent business needs into shipped features under tight deadlines."
        },
        {
            icon: <Zap className="w-5 h-5 text-yellow-500" />,
            title: "Multi-Model AI Integration",
            desc: "Orchestrating diverse LLMs (Grok, Claude, Gemini) to build intelligent agents, chatbots, and voice systems."
        },
        {
            icon: <Rocket className="w-5 h-5 text-pink-500" />,
            title: "Business Process Automation",
            desc: "Automating sales pipelines, lead qualification, and notifications to drive efficiency and scalability."
        }
    ];

    return (
        <section id="about" className="section-padding bg-white dark:bg-dark-card/50 relative overflow-hidden -mt-20 z-20 rounded-t-[3rem]">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none hidden md:block" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-1 bg-primary rounded-full"></span>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">About Me</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-8 leading-tight">
                        I don't just build software;<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                            I engineer solutions.
                        </span>
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        I specialize in simplifying complex processes through <strong>AI Automation</strong> and robust <strong>Full Stack Engineering</strong>. My approach is holistic: I don't just write code; I own the entire lifecycle of the product.
                    </p>

                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                        From integrating multiple LLM APIs to managing critical cloud infrastructure, I build systems that are secure, scalable, and directly impact the bottom line. I thrive in high-pressure environments, delivering production-grade features that solve real stakeholder problems.
                    </p>

                    <a
                        href={resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-3 group"
                    >
                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        Download Resume
                    </a>
                </motion.div>

                {/* Right: Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 text-2xl shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
