import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 bg-white dark:bg-dark-card border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-slate-600 dark:text-slate-400 text-sm">
                    © {new Date().getFullYear()} Mahesh Chowdary. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/mahesh-chowdary-raavi-170ba5250/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-primary transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:maheshchowdaryraavi04@gmail.com"
                        className="text-slate-500 hover:text-primary transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://github.com/MaheshChowdaryR"
                        className="text-slate-500 hover:text-primary transition-colors"
                    >
                        <Github size={20} />
                    </a>
                </div>

            </div>
        </footer>
    );
}
