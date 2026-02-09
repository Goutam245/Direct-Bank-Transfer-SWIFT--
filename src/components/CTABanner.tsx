import { motion } from "framer-motion";
import { Button } from "./ui/button";
import marbleTexture from "@/assets/marble-texture.jpg";

const CTABanner = () => {
  return (
    <section
      className="py-24 md:py-28 bg-marble-dark relative overflow-hidden"
      style={{ backgroundImage: `url(${marbleTexture})` }}
    >
      <div className="absolute inset-0 bg-prominence-navy-deep/70" />
      {/* Cyan glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(191,100%,50%,0.15)_0%,_transparent_65%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[44px] font-bold text-white leading-tight mb-6"
        >
          Become an account holder
          <br className="hidden md:block" /> to access this service
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10"
        >
          Join Prominence Bank and unlock global payment capabilities
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button className="bg-prominence-cyan text-prominence-navy font-semibold text-base px-10 py-6 hover:bg-prominence-cyan-light glow-cyan transition-all duration-300 hover:shadow-[0_0_40px_hsla(191,100%,50%,0.5)]">
            Open an Account
          </Button>
          <Button
            variant="outline"
            className="border-2 border-prominence-cyan text-prominence-cyan bg-transparent font-semibold text-base px-10 py-6 hover:bg-prominence-cyan/10 transition-all duration-300"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
