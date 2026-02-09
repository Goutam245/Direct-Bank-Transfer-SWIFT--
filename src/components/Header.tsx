import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import ProminenceLogo from "./ProminenceLogo";
import { Button } from "./ui/button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Account Login", href: "#login" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-prominence-cyan/20 ${
        scrolled
          ? "bg-prominence-navy-deep/95 backdrop-blur-md"
          : "bg-prominence-navy-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <ProminenceLogo size="small" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide text-white/80 hover:text-prominence-cyan transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-white/60 hover:text-prominence-cyan transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Button variant="default" className="bg-prominence-cyan text-prominence-navy font-semibold hover:bg-prominence-cyan-light glow-cyan px-6">
            Open an Account
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white/80"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-prominence-navy-deep/98 backdrop-blur-md border-t border-prominence-cyan/10 pb-6">
          <nav className="flex flex-col items-center gap-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-white/80 hover:text-prominence-cyan transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-prominence-cyan text-prominence-navy font-semibold hover:bg-prominence-cyan-light glow-cyan px-8 mt-2">
              Open an Account
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
