import { motion } from "framer-motion";

const ServiceOverview = () => {
  return (
    <section id="overview" className="py-24 md:py-28 gradient-light">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-prominence-cyan mb-4"
        >
          WHAT IS DIRECT BANK TRANSFER
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-[40px] font-bold text-prominence-navy leading-tight mb-8"
        >
          Understanding SWIFT Payments
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground leading-[1.8] mb-6"
        >
          Direct Bank Transfer is the standard way to move funds between bank accounts domestically
          and internationally. International wires are transmitted through the SWIFT messaging
          network, enabling payments to beneficiary accounts worldwide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground leading-[1.8]"
        >
          This secure, established method ensures that funds reach their destination through
          verified banking channels with full compliance and transparency.
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceOverview;
