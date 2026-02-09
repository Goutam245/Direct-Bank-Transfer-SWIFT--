import { Globe, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import marbleTexture from "@/assets/marble-texture.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center pt-20 bg-marble-dark overflow-hidden"
      style={{ backgroundImage: `url(${marbleTexture})` }}
    >
      {/* Radial glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(191,100%,50%,0.12)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-prominence-navy-deep/60" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-prominence-cyan/40"
          style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 text-center py-16">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center justify-center gap-2 text-sm text-white/50">
            <li><a href="#" className="hover:text-prominence-cyan transition-colors">Home</a></li>
            <li>/</li>
            <li><a href="#" className="hover:text-prominence-cyan transition-colors">Services</a></li>
            <li>/</li>
            <li className="text-prominence-cyan">SWIFT</li>
          </ol>
        </motion.nav>

        {/* Globe icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8 inline-flex"
        >
          <div className="p-6 rounded-full glow-cyan-strong bg-prominence-cyan/10 border border-prominence-cyan/30 animate-float">
            <Globe className="w-16 h-16 md:w-20 md:h-20 text-prominence-cyan" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-bold text-prominence-cyan text-glow leading-tight mb-6"
        >
          DIRECT BANK TRANSFER
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Secure cross-border and domestic bank transfers with global reach through the SWIFT network
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button className="bg-prominence-cyan text-prominence-navy font-semibold text-base px-8 py-6 hover:bg-prominence-cyan-light glow-cyan transition-all duration-300 hover:shadow-[0_0_40px_hsla(191,100%,50%,0.5)]">
            Open an Account
          </Button>
          <Button
            variant="outline"
            className="border-2 border-prominence-cyan text-prominence-cyan bg-transparent font-semibold text-base px-8 py-6 hover:bg-prominence-cyan/10 transition-all duration-300"
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <a href="#overview" className="inline-flex flex-col items-center text-white/40 hover:text-prominence-cyan transition-colors">
            <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-scroll-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
