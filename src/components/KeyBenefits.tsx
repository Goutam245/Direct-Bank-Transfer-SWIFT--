import { Globe, FileText, Search, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import marbleTexture from "@/assets/marble-texture.jpg";

const benefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "International payments via SWIFT to beneficiary accounts across 200+ countries and territories with established correspondent banking networks.",
  },
  {
    icon: FileText,
    title: "Structured References",
    description:
      "Clear payment purpose codes and reference fields enable seamless business reconciliation and audit trail documentation.",
  },
  {
    icon: Search,
    title: "Enhanced Tracking",
    description:
      "Optional end-to-end visibility through SWIFT gpi corridors with real-time status updates and UETR tracking references.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description:
      "Multi-layer compliance screening including KYC/AML, sanctions filters, and risk-based transaction monitoring for maximum security.",
  },
];

const KeyBenefits = () => {
  return (
    <section
      className="py-24 md:py-32 bg-marble-dark relative"
      style={{ backgroundImage: `url(${marbleTexture})` }}
    >
      <div className="absolute inset-0 bg-prominence-navy/80" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[40px] font-bold text-prominence-cyan text-glow text-center mb-16 leading-tight"
        >
          Why Choose SWIFT Transfers
          <br className="hidden md:block" /> with Prominence Bank
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-8 hover:glow-cyan-subtle transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-prominence-cyan/10 border border-prominence-cyan/20 group-hover:glow-cyan transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-prominence-cyan" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
