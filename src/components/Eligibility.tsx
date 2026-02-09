import { Check, Info } from "lucide-react";
import { motion } from "framer-motion";

const requirements = [
  "Account Holder Status",
  "KYC/AML Verification",
  "Sanctions Screening",
  "Source of Funds Check",
  "Transaction Monitoring",
  "Final Bank Approval",
];

const Eligibility = () => {
  return (
    <section className="py-20 md:py-24" style={{ background: "linear-gradient(180deg, hsl(200, 100%, 97%) 0%, hsl(200, 50%, 95%) 100%)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-[28px] font-bold text-prominence-navy mb-8">
              Eligibility Requirements
            </h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <motion.li
                  key={req}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-prominence-cyan/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-prominence-cyan" strokeWidth={2.5} />
                  </div>
                  <span className="text-prominence-navy font-medium">{req}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Important notice */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-prominence-cyan/20 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-prominence-cyan/10">
                  <Info className="w-5 h-5 text-prominence-cyan" />
                </div>
                <h4 className="text-lg font-semibold text-prominence-navy">
                  Important Information
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Available to Prominence Bank account holders only. All transfers are subject to
                eligibility, KYC/AML verification, sanctions screening, transaction risk review,
                and final bank approval.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The bank reserves the right to decline or delay any transaction at its sole
                discretion based on compliance and risk considerations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-sm text-muted-foreground/70 text-center max-w-3xl mx-auto leading-relaxed"
        >
          Information is provided for general guidance only and does not constitute an offer,
          commitment, guarantee, or promise to execute any transaction. Fees, timelines, and
          availability depend on corridor, counterparty, and compliance outcome.
        </motion.p>
      </div>
    </section>
  );
};

export default Eligibility;
