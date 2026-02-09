import ProminenceLogo from "./ProminenceLogo";

const footerLinks = {
  services: [
    "Direct Bank Transfer",
    "Cheque Payment",
    "IP2IP Interbank Transfer",
    "Ledger 2 Ledger Transfer",
    "Digital Currency",
    "View All Services",
  ],
  company: ["About Us", "Contact", "Careers", "Press"],
  legal: ["Privacy Policy", "Terms of Service", "Compliance", "Anti-Fraud Notice"],
};

const Footer = () => {
  return (
    <footer className="bg-prominence-navy-deep pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Logo & About */}
          <div>
            <ProminenceLogo size="small" className="mb-5 items-start" />
            <p className="text-white/40 text-sm leading-relaxed mt-4">
              Premium banking services with global reach, security, and compliance at every step.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-prominence-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-prominence-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/40 text-sm hover:text-prominence-cyan transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-white/30 text-sm">
            © 2026 Prominence Bank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
