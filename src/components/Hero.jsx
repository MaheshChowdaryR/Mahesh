import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import avatar from '../assets/avatar.jpg';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full bg-purple-200/40 dark:bg-purple-900/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-[100px]" />
        <div className="absolute top-[20%] left-[15%] w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-pink-100/40 dark:bg-pink-900/10 blur-[80px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left z-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 backdrop-blur-sm mb-6 border border-slate-200 dark:border-slate-700 shadow-sm font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Enterprise AI & Automation Architect
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight leading-tight text-slate-900 dark:text-white">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 filter drop-shadow-sm">
              Mahesh Chowdary
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 h-20 font-medium">
            <TypeAnimation
              sequence={[
                'Full Stack AI Engineer',
                2000,
                'Automation Architect',
                2000,
                'Cloud Solutions Expert',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed text-balance">
            Building high-performance AI applications and seamless automation workflows that drive business value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              className="btn-primary flex items-center justify-center gap-2 cursor-pointer"
            >
              View Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Avatar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mx-auto"
        >
          <div className="relative w-60 h-60 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-20 dark:opacity-20 md:opacity-50 md:dark:opacity-40 animate-pulse"></div>
            <img
              src={avatar}
              alt="Mahesh Chowdary"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
            />

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card p-3 rounded-xl flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-bold text-slate-800 dark:text-white">AI Specialist</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-bold text-slate-800 dark:text-white">Full Stack</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
