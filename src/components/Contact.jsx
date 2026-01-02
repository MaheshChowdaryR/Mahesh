import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Keys are now securely loaded from .env file
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        console.log("Sending email with Service ID:", SERVICE_ID); // Debugging log (can be removed later)

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                // Alert the user with the specific error for debugging
                alert(`EmailJS Error: ${error.text || "Unknown error"}. Check your keys!`);
                setStatus('error'); // Fallback to mailto if it fails or no keys
                window.location.href = `mailto:maheshchowdaryraavi04@gmail.com?subject=Project Inquiry&body=${form.current.message.value}`;
            });
    };

    return (
        <section id="contact" className="section-padding bg-slate-50 dark:bg-dark-bg/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Ready to elevate your business with AI? Let's discuss how we can build something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Email</h4>
                                        <a href="mailto:maheshchowdaryraavi04@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                                            maheshchowdaryraavi04@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">LinkedIn</h4>
                                        <a
                                            href="https://www.linkedin.com/in/mahesh-chowdary-raavi-170ba5250/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                        >
                                            Connect on LinkedIn
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Phone</h4>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            +91-7416158508
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Location</h4>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Vijayawada, Andhra Pradesh, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white resize-none"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full btn-primary flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={18} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                            {status === 'error' && (
                                <p className="text-sm text-red-500 text-center mt-2">
                                    Something went wrong. Redirecting to email client...
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
