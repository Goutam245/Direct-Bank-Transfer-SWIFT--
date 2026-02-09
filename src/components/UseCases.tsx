import { Briefcase, Users, Building2, Banknote } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: Briefcase,
    title: "International Business Payments",
    description:
      "Pay international suppliers and invoices with structured references for seamless reconciliation.",
  },
  {
    icon: Users,
    title: "Family Remittances",
    description:
      "Send funds to family members abroad securely through verified banking channels.",
  },
  {
    icon: Building2,
    title: "Corporate Treasury Operations",
    description:
      "Move corporate funds between group entities and jurisdictions for liquidity management.",
  },
  {
    icon: Banknote,
    title: "High-Value Settlements",
    description:
      "High-value one-time payments such as escrow, tuition, or professional services with full audit trail.",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[40px] font-bold text-prominence-navy text-center mb-16 leading-tight"
        >
          Common Use Cases for SWIFT Transfers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-7 cyan-border-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-2.5 rounded-lg bg-prominence-cyan/10">
                <useCase.icon className="w-6 h-6 text-prominence-cyan" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-prominence-navy text-lg mb-2">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
