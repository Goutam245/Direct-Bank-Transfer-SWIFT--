import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import marbleTexture from "@/assets/marble-texture.jpg";

const faqs = [
  {
    question: "What is a SWIFT transfer?",
    answer:
      "A SWIFT transfer is an international bank-to-bank wire where payment instructions are transmitted securely through the SWIFT network to deliver funds to a beneficiary account.",
    tags: ["SWIFT transfer", "international wire", "bank-to-bank transfer", "cross-border payment", "SWIFT BIC"],
  },
  {
    question: "Who can use SWIFT transfers at Prominence Bank?",
    answer:
      "SWIFT transfers are available to Prominence Bank account holders only, subject to eligibility, KYC/AML, sanctions screening, transaction risk review, and final bank approval.",
    tags: ["account holders", "KYC AML", "sanctions screening", "eligibility", "compliance"],
  },
  {
    question: "What information is required to send a SWIFT transfer?",
    answer:
      "Beneficiary name, beneficiary bank name, IBAN/account number, SWIFT/BIC, currency, amount, and a clear payment purpose/reference. Additional fields may be required depending on corridor.",
    tags: ["SWIFT details", "IBAN", "BIC", "beneficiary information", "payment reference"],
  },
  {
    question: "How long does a SWIFT transfer take?",
    answer:
      "Timelines vary by corridor and intermediaries; most international wires complete within 1-3 business days. Certain corridors may offer faster delivery and tracking where supported.",
    tags: ["SWIFT transfer time", "settlement", "business days", "corridor", "tracking"],
  },
  {
    question: "Can I track my SWIFT payment?",
    answer:
      "Where supported, tracking references can be provided and status checks can be performed via official channels. Enhanced end-to-end visibility may be available in SWIFT gpi corridors.",
    tags: ["SWIFT tracking", "payment status", "UETR", "confirmation", "gpi"],
  },
  {
    question: "Can a SWIFT transfer be cancelled or recalled?",
    answer:
      "Once released, cancellation is not guaranteed. A recall may be attempted, but success depends on the beneficiary bank and whether funds have already been credited.",
    tags: ["recall", "cancellation", "reversibility", "beneficiary bank", "SWIFT message"],
  },
  {
    question: "Why might a SWIFT transfer be delayed or rejected?",
    answer:
      "Common reasons include incorrect beneficiary details, intermediary checks, missing purpose/supporting documents, sanctions filters, or local regulatory requirements.",
    tags: ["transfer delay", "rejected wire", "compliance review", "sanctions", "incorrect details"],
  },
  {
    question: "What fees apply to SWIFT transfers?",
    answer:
      "Fees depend on corridor, transfer type, and any intermediary charges. Fee structures are disclosed through official Prominence Bank channels before execution.",
    tags: ["wire fees", "intermediary fees", "SWIFT charges", "fee disclosure", "banking fees"],
  },
];

const FAQ = () => {
  return (
    <section
      className="py-24 md:py-32 bg-marble-dark relative"
      style={{ backgroundImage: `url(${marbleTexture})` }}
    >
      <div className="absolute inset-0 bg-prominence-navy/85" />

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-[40px] font-bold text-prominence-cyan text-glow text-center mb-4 leading-tight"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/60 text-lg mb-14"
        >
          Everything you need to know about SWIFT transfers
        </motion.p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <AccordionItem
                value={`faq-${index}`}
                className="glass-card rounded-xl px-6 border border-prominence-cyan/20 data-[state=open]:border-prominence-cyan/40"
              >
                <AccordionTrigger className="text-left text-white font-semibold text-base hover:text-prominence-cyan hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <p className="text-white/70 text-[15px] leading-relaxed mb-3">
                    {faq.answer}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-prominence-cyan/10 text-prominence-cyan border border-prominence-cyan/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
