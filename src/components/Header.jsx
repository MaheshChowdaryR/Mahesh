import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Code, Rocket, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Skills", to: "skills", icon: Code },
        { name: "Projects", to: "projects", icon: Rocket },
        { name: "About", to: "experience", icon: User },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer font-bold text-xl tracking-tighter text-accent">
                    <span className="text-2xl">&lt;</span>
                    <span className="text-white">Mahesh Chowdary</span>
                    <span className="text-2xl">/&gt;</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="flex items-center gap-2 text-gray-300 hover:text-accent cursor-pointer transition-colors text-sm uppercase tracking-widest font-medium"
                        >
                            <item.icon size={16} />
                            {item.name}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-6 py-2 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all transform hover:scale-105"
                    >
                        Hire Me
                    </ScrollLink>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-nav overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 gap-6">
                            {navItems.map((item) => (
                                <ScrollLink
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg font-medium flex items-center gap-2"
                                >
                                    <item.icon size={20} className="text-accent" />
                                    {item.name}
                                </ScrollLink>
                            ))}
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-8 py-3 bg-accent text-primary font-bold rounded-full"
                            >
                                Hire Me
                            </ScrollLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Header;
