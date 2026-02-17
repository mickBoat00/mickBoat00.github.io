import { Panda, Menu, X, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        if (currentScrollY > 50) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { number: "01.", label: "About", href: "#about" },
    { number: "02.", label: "Experience", href: "#experience" },
    { number: "03.", label: "Projects", href: "#projects" },
    { number: "04.", label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/mickBoat00" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/michael-boateng-4376a0168/" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-primary">
            <Panda size={32} />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="font-mono text-xs text-foreground/70 hover:text-primary transition-colors">
                <span className="text-primary mr-1">{item.number}</span>
                {item.label}
              </a>
            ))}
            <a href="#" className="font-mono text-xs border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors">
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden text-foreground p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-primary" size={24} /> : <Menu  className="text-primary" size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Slide from right */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 w-3/4 max-w-sm bg-background z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="font-mono text-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-primary text-sm block">{item.number}</span>
              <span className="text-foreground text-lg">{item.label}</span>
            </a>
          ))}
          <a href="#" className="font-mono text-sm border border-primary text-primary px-8 py-3 rounded hover:bg-primary/10 transition-colors mt-4">
            Resume
          </a>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile social icons - fixed at bottom of main page */}
      <div className="md:hidden fixed bottom-8 left-0 right-0 flex justify-center items-center gap-8 z-20">
        {socials.map((social, index) => (
          <a key={index} href={social.href} className="text-foreground hover:text-primary transition-colors">
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;