import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Provide Beneficiary Details",
    description:
      "Provide beneficiary details (name, bank, IBAN/account number, SWIFT/BIC) and payment purpose.",
  },
  {
    number: 2,
    title: "Compliance Screening",
    description:
      "Bank performs compliance screening (KYC/AML, sanctions, risk checks).",
  },
  {
    number: 3,
    title: "Payment Release",
    description:
      "Payment instruction is released through the applicable rail (domestic/SEPA/SWIFT).",
  },
  {
    number: 4,
    title: "Intermediary Processing",
    description:
      "Intermediary banks (if any) process and route the payment to the beneficiary bank.",
  },
  {
    number: 5,
    title: "Funds Credited",
    description:
      "Beneficiary bank credits the beneficiary account; confirmations may be available depending on corridor.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[40px] font-bold text-prominence-navy text-center mb-6 leading-tight"
        >
          Your SWIFT Transfer Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-muted-foreground text-lg mb-16"
        >
          Step by Step
        </motion.p>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-prominence-cyan/30 via-prominence-cyan to-prominence-cyan/30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="flex flex-col items-center text-center w-1/5 relative z-10"
            >
              <div className="w-16 h-16 rounded-full bg-prominence-cyan flex items-center justify-center text-prominence-navy font-bold text-xl mb-5 glow-cyan">
                {step.number}
              </div>
              <h3 className="font-semibold text-prominence-navy text-base mb-2 leading-snug px-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed px-1">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-prominence-cyan/30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-10 top-0 w-9 h-9 rounded-full bg-prominence-cyan flex items-center justify-center text-prominence-navy font-bold text-sm glow-cyan">
                {step.number}
              </div>
              <h3 className="font-semibold text-prominence-navy text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
