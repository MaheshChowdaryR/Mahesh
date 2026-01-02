import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const experiences = [
    {
        role: "AI Software Engineer",
        company: "Adonix AI | Full Time",
        period: "12/2025 - Present",
        location: "Remote",
        description: [
            "Worked as a full-stack AI software engineer building 5+ AI-powered applications and automation workflows for business use cases.",
            "Developed and integrated AI voice agents and chatbots handling 100+ user interactions/day across web and messaging platforms.",
            "Implemented 10+ REST API integrations and webhooks across AI services, WhatsApp, and automation tools.",
            "Designed end-to-end automation pipelines processing leads, notifications, and data flows with near real-time execution.",
            "Collaborated directly with multiple US-based stakeholders and clients, converting requirements into deployable AI features and releases."
        ],
        tech: ["AI Agents", "Voice AI", "REST APIs", "Automation"]
    },
    {
        role: "AI Software Engineer",
        company: "All GPT | Freelance",
        period: "12/2025 - Present",
        location: "Remote",
        description: [
            "Contributed to AI platform development by integrating multiple third-party AI model APIs into a unified system.",
            "Managed and troubleshot cloud-hosted VPS environments, restoring services during critical production outages.",
            "Built and configured secure email subdomains using Postfix and Dovecot to enable reliable platform-to-user communication.",
            "Performed configuration updates & service restarts to maintain high platform availability & operational stability."
        ],
        tech: ["Cloud VPS", "Postfix", "Dovecot", "API Integration"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative overflow-hidden bg-white dark:bg-dark-bg">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-bg"></div>

                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-lg font-semibold text-primary mb-4">
                                {exp.company}
                            </div>

                            <ul className="space-y-3 mb-6">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed flex items-start gap-2">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
