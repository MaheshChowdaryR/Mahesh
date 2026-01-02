import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code,
    Cpu,
    Database,
    Cloud,
    MessageSquare,
    Zap,
    Layout,
    Share2,
    Award,
    X
} from 'lucide-react';

import awsCert from '../assets/aws_cert.png';
import gcpCert from '../assets/gcp_cert.png';
import nptelCert from '../assets/nptel_cert.png';

const skillCategories = [
    {
        title: "Full Stack & Cloud",
        icon: <Cloud className="w-6 h-6" />,
        skills: [
            { name: "React.js / Tailwind CSS", level: 92 },
            { name: "Node.js / Express", level: 88 },
            { name: "TypeScript", level: 85 },
            { name: "Python / FastAPI", level: 90 },
            { name: "Firebase / Supabase", level: 90 },
            { name: "AWS / VPS Hosting", level: 80 }
        ]
    },
    {
        title: "AI & Automation",
        icon: <Cpu className="w-6 h-6" />,
        skills: [
            { name: "n8n", level: 98 },
            { name: "Chatbots / Voice Agents", level: 90 },
            { name: "Gemini / OpenAI APIs", level: 95 },
            { name: "Vapi / Retell / ElevenLabs", level: 90 },
            { name: "WhatsApp Business API", level: 92 },
            { name: "Prompt Engineering / AI-assisted Development", level: 95 },
            { name: "Conversational AI", level: 92 }
        ]
    },
    {
        title: "Tools & Integrations",
        icon: <Zap className="w-6 h-6" />,
        skills: [
            { name: "Unipile / Blotato", level: 85 },
            { name: "Webhooks", level: 95 },
            { name: "Vercel / Netlify / Render", level: 90 },
            { name: "Google Workspace APIs", level: 90 },
            { name: "Git / GitHub", level: 88 },
            { name: "Docker", level: 75 }
        ]
    },
    {
        title: "Soft Skills",
        icon: <MessageSquare className="w-6 h-6" />,
        skills: [
            { name: "Stakeholder Communication", level: 98 },
            { name: "Problem Solving", level: 95 },
            { name: "Leadership", level: 90 },
            { name: "Client Management", level: 92 },
            { name: "Adaptability", level: 98 }
        ]
    }
];

export default function Skills() {
    const [selectedCert, setSelectedCert] = React.useState(null);

    const certifications = [
        {
            title: "AWS Certified Cloud Practitioner",
            image: awsCert,
            issued: "Jan 26, 2024",
            expires: "Jan 26, 2027",
            id: "aws-cp"
        },
        {
            title: "Google Cloud Digital Leader",
            image: gcpCert,
            issued: "Dec 19, 2023",
            expires: "Dec 19, 2026",
            id: "gcp-dl"
        },
        {
            title: "Google Cloud Computing Foundations",
            image: nptelCert,
            issued: "Aug-Oct 2024",
            expires: "No Expiry",
            details: "NPTEL (Elite Silver) - Score: 80%",
            id: "nptel-gcf"
        }
    ];

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
                        Technical Arsenal
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-20">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-5 md:p-8 rounded-2xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-slate-700 dark:text-slate-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Industry Certifications</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedCert(cert)}
                                className="glass-card p-6 rounded-2xl flex items-center gap-4 border border-slate-200 dark:border-slate-700 cursor-pointer group hover:shadow-xl transition-all"
                            >
                                <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl p-1 flex items-center justify-center shadow-sm">
                                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h4>
                                    <div className="mt-2 space-y-0.5">
                                        <p className="text-slate-600 dark:text-slate-400 text-xs">Issued: {cert.issued}</p>
                                        <p className="text-slate-500 dark:text-slate-500 text-[10px]">Expires: {cert.expires}</p>
                                        {cert.details && (
                                            <p className="text-primary text-[10px] font-medium mt-1">{cert.details}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certificate Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCert(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative bg-white dark:bg-dark-card p-2 rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-full object-contain max-h-[85vh] rounded-md"
                                />
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
