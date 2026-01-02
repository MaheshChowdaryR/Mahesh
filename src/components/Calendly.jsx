import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Calendly() {
    useEffect(() => {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }, []);

    return (
        <section id="calendly" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
                        Schedule a Meeting
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Book a 15-minute intro call to discuss your requirements.
                    </p>
                </motion.div>

                <div
                    className="calendly-inline-widget min-w-[320px] h-[700px] w-full"
                    data-url="https://calendly.com/maheshchowdaryraavi04/15min"
                ></div>
            </div>
        </section>
    );
}
