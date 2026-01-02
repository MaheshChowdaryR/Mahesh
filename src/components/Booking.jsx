import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCalApi } from "@calcom/embed-react";

export default function Booking() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "styles": { "branding": { "brandColor": "#6366f1" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section id="booking" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
                        Book a Call
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                        Schedule a 30-minute meeting to discuss your AI and automation needs directly.
                    </p>
                </motion.div>

                <div className="w-full h-[600px] overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-card">
                    <iframe
                        src="https://cal.com/mahesh-chowdary-raavi-hmmslz/30min?embed=true"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        title="Book a call"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
