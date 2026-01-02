import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, Info } from 'lucide-react';

// Import AI Generated Headers
import whatsappHead from '../assets/whatsapp_service.png';
import voiceHead from '../assets/voice_agent.png';
import chatHead from '../assets/engagement_chatbot.png';
import notifHead from '../assets/auto_notification.png';
import socialHead from '../assets/social_media_automation.png'; // Need to move
import datingHead from '../assets/dating_advice.png';
import shopHead from '../assets/shopping_cart.png';
import movieHead from '../assets/movie_review_v2.png';
import mediaHead from '../assets/media_hub.png';
import quizHead from '../assets/jntr_quiz.png';
import welfareHead from '../assets/welfare_platform.png'; // Need to move

const automationProjects = [
    {
        id: 'auto-1',
        title: "AI Whatsapp Customer Service",
        category: "AI Automation",
        headerImage: whatsappHead,
        workflowImage: "/assets/AI Whatsapp Customer Service.jpeg",
        skills: ["n8n", "WhatsApp Business API", "Gemini API", "Google Sheets API", "Google Calendar"],
        description: "Fully automated WhatsApp agent for inquiry handling and appointment booking.",
        details: "This workflow revolutionize customer support by integrating n8n with the WhatsApp Business API. It acts as a first-line of defense, handling 90% of routine inquiries instantly. The system queries a Google Sheets knowledge base to answer questions and can check real-time availability in Google Calendar to book appointments without human intervention.",
        demo: "#",
        github: "#"
    },
    {
        id: 'auto-2',
        title: "AI Voice Agents",
        category: "AI Engineering",
        headerImage: voiceHead,
        workflowImage: "/assets/AI Voice Agents.jpg",
        skills: ["n8n", "Retell", "Vapi", "Supabase", "Eleven Labs", "Transcriptions"],
        description: "Real-time conversational voice AI for support and sales.",
        details: "Built to handle complex phone interactions, this AI Agent uses Vapi and Retell AI for ultra-low latency voice processing. It can understand context, handle interruptions, and syncs call logs and sentiment analysis back to a Supabase database for QA and follow-up.",
        demo: "#",
        github: "#"
    },
    {
        id: 'auto-3',
        title: "AI Engagement Chatbots",
        category: "Social Media AI",
        headerImage: chatHead,
        workflowImage: "/assets/AI Engagement Chatbots.jpg",
        skills: ["n8n", "Gemini API", "Webhooks", "LLMs", "Facebook API"],
        description: "Facebook chatbots that automate engagement and boost reach.",
        details: "Designed to maximize organic reach, this bot listens to post comments and Messenger DMs. It uses Gemini API to generate context-aware, witty, or helpful responses, turning passive viewers into engaged leads. The system handles webhooks for instant response times.",
        demo: "#",
        github: "#"
    },
    {
        id: 'auto-4',
        title: "Lead Qualification System",
        category: "Business Automation",
        headerImage: notifHead,
        workflowImage: "/assets/Auto Notification System.jpg",
        skills: ["Sheets", "Gmail API", "Gemini API", "Calendar", "PDF Generator", "n8n"],
        description: "Automated funnel for qualifying leads and sending notifications.",
        details: "This end-to-end pipeline captures raw leads and runs them through an AI qualification framework. Qualified leads trigger a 'Hot Lead' notification to the sales team via Email and Slack, while the prospect receives a personalized PDF brochure generated on the fly.",
        demo: "#",
        github: "#"
    },
    {
        id: 'auto-5',
        title: "AI Social Media Auto Post",
        category: "Content Automation",
        headerImage: socialHead,
        workflowImage: "/assets/AI Social Media Auto Post.jpg",
        skills: ["n8n", "LLM Content Gen", "Blotato", "Unipile"],
        description: "End-to-end content generation and posting pipeline.",
        details: "A content machine that takes a simple topic and generates high-quality posts for LinkedIn, Twitter, and Instagram. It utilizes LLMs for writing and image prompting, then uses Unipile to schedule and publish the content automatically.",
        demo: "#",
        github: "#"
    }
];

const fullStackProjects = [
    {
        id: 'fs-1',
        title: "Velvet AI (Relationship Coach)",
        category: "Full Stack AI",
        headerImage: datingHead,
        workflowImage: null,
        skills: ["React", "Express", "Tailwind CSS", "Supabase", "AI Agents", "VAPI", "OAuth"],
        description: "AI-powered dating coach with voice and chat capabilities. (In Development)",
        details: "A private, secure platform offering personalized relationship advice. Users can chat or talk (via Voice AI) to a fine-tuned agent. Features secure OAuth login, real-time voice interaction via VAPI, and persistent chat history stored in Supabase.",
        demo: "#", // In Development
        github: "#"
    },
    {
        id: 'fs-new',
        title: "Welfare Org Platform",
        category: "Web Application",
        headerImage: welfareHead,
        workflowImage: null,
        skills: ["React", "Framer Motion", "Netlify", "Sleek Design"],
        description: "Modern frontend platform built for a social welfare organization.",
        details: "A production-grade web application developed for a non-profit. It features a clean, accessible design, smooth animations with Framer Motion, and is optimized for high performance on Netlify. It serves as the digital face of the organization, processing donations and volunteer signups.",
        demo: "https://raww.netlify.app",
        github: "#"
    },
    {
        id: 'fs-2',
        title: "Product Recommender Engine",
        category: "E-Commerce",
        headerImage: shopHead,
        workflowImage: null,
        skills: ["Python", "FastAPI", "React", "EfficientNet", "Docker"],
        description: "AI product recommendation system using EfficientNet with 90% classification accuracy.",
        details: "Engineered a product recommendation system using the Stanford Online Products dataset (120,000+ images). Achieved 90% classification accuracy with EfficientNet model on 80k training images. The FastAPI backend is dockerized and processes 100+ requests per minute.",
        demo: "https://sdppdctrecommender.netlify.app/",
        github: "#"
    },
    {
        id: 'fs-3',
        title: "Movie Sentiment Analyzer",
        category: "NLP & Web",
        headerImage: movieHead,
        workflowImage: null,
        skills: ["React", "NLP", "Sentiment Analysis", "Tailwind", "Vercel"],
        description: "NLP-based sentiment analysis classifier achieving 85% accuracy in categorizing movie reviews.",
        details: "Established an NLP-based sentiment analysis classifier achieving 85% accuracy in categorizing movie reviews as positive, negative, or neutral. Created an intuitive web interface for seamless user input and real-time review analysis. Released the application on Vercel.",
        demo: "https://lrzam0a0lsw0jplxhv3itfnvdhs0wlmj.vercel.app/",
        github: "#"
    },
    {
        id: 'fs-4',
        title: "JNTR Viral Quiz",
        category: "Viral App",
        headerImage: quizHead,
        workflowImage: null,
        skills: ["React", "Firebase", "Scalable Architecture"],
        description: "High-traffic quiz app that hit 1000 users in 8 hours.",
        details: "Built to handle viral traffic, this quiz app leverages Firebase for its real-time database and hosting. The architecture is designed to remain responsive even under sudden heavy load, providing a seamless experience for 1000+ users in a single day.",
        demo: "https://jntrquiz.web.app",
        github: "#"
    },
    {
        id: 'fs-5',
        title: "High Res Media Hub",
        category: "Frontend Performance",
        headerImage: mediaHead,
        workflowImage: null,
        skills: ["HTML", "CSS", "Netlify", "Performance Optimization"],
        description: "Lag-free gallery for high-resolution media assets.",
        details: "A technical showcase of frontend performance optimization. This hub delivers 4K images and videos with zero lag using lazy loading, asset compression techniques, and a global CDN via Netlify.",
        demo: "https://ntrpics.netlify.app/",
        github: "#"
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('all');

    const allProjects = [...automationProjects, ...fullStackProjects];
    const displayedProjects = activeTab === 'all'
        ? allProjects
        : activeTab === 'automation'
            ? automationProjects
            : fullStackProjects;

    return (
        <section id="projects" className="section-padding bg-slate-50 dark:bg-dark-bg/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>

                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        {['all', 'automation', 'fullstack'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${activeTab === tab
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {tab === 'all' ? 'All Work' : tab === 'automation' ? 'AI Automation' : 'Full Stack Engineering'}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                >
                    <AnimatePresence>
                        {displayedProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer"
                            >
                                {/* Main Card */}
                                <div className="glass-card rounded-2xl overflow-hidden h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col">
                                    {/* Header Image (AI Generated) */}
                                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent z-10"></div>
                                        <img
                                            src={project.headerImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="px-3 py-1 text-xs font-bold text-white bg-primary/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.skills.slice(0, 3).map((skill, i) => (
                                                <span key={i} className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Blog-Style Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                                className="w-full max-w-5xl bg-white dark:bg-dark-card rounded-3xl overflow-hidden shadow-2xl relative z-[110] flex flex-col max-h-[90vh]"
                            >
                                {/* Modal Header Image */}
                                <div className="relative h-64 md:h-80 flex-shrink-0">
                                    <img
                                        src={selectedProject.headerImage}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent"></div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-6 right-6 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-50"
                                    >
                                        <X size={24} />
                                    </button>
                                    <div className="absolute bottom-0 left-0 w-full p-8">
                                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 inline-block">
                                            {selectedProject.category}
                                        </span>
                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                            {selectedProject.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Modal Content - Blog Style */}
                                <div className="flex-grow overflow-y-auto bg-white dark:bg-dark-card">
                                    <div className="max-w-4xl mx-auto p-8 md:p-12">

                                        {/* Tech Stack Bar */}
                                        <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                                            {selectedProject.skills.map((skill, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-12">
                                            <div className="md:col-span-2 prose dark:prose-invert max-w-none">
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Project Overview</h4>
                                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8">
                                                    {selectedProject.details}
                                                </p>

                                                {/* Workflow Image Section (Only for Automation Projects) */}
                                                {selectedProject.workflowImage && (
                                                    <div className="mb-8">
                                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                            <Info size={20} className="text-primary" />
                                                            Automation Workflow
                                                        </h4>
                                                        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
                                                            <img
                                                                src={selectedProject.workflowImage}
                                                                alt="Workflow Architecture"
                                                                className="w-full h-auto"
                                                            />
                                                        </div>
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 text-center italic">
                                                            Architectural diagram of the automation pipeline.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Sidebar Actions */}
                                            <div className="space-y-6">
                                                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 sticky top-0">
                                                    {selectedProject.id.startsWith('auto') ? (
                                                        <div className="text-center">
                                                            <div className="inline-block p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-3">
                                                                <Info size={24} />
                                                            </div>
                                                            <h5 className="font-bold text-slate-900 dark:text-white mb-2">Workflow Demonstrated</h5>
                                                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                                                This automation is fully documented in the diagram. No live demo required.
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <h5 className="font-bold text-slate-900 dark:text-white mb-4">Project Links</h5>
                                                            <div className="space-y-3">
                                                                {selectedProject.demo !== "#" ? (
                                                                    <a
                                                                        href={selectedProject.demo}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="btn-primary w-full flex items-center justify-center gap-2"
                                                                    >
                                                                        <ExternalLink size={18} />
                                                                        View Live Demo
                                                                    </a>
                                                                ) : (
                                                                    <button disabled className="w-full px-6 py-3 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 font-medium cursor-not-allowed flex items-center justify-center gap-2">
                                                                        <ExternalLink size={18} />
                                                                        In Development
                                                                    </button>
                                                                )}

                                                                {selectedProject.github !== "#" && (
                                                                    <a
                                                                        href={selectedProject.github}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="w-full px-6 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                                                                    >
                                                                        <Github size={18} />
                                                                        View Source
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
