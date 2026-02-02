import { useState } from 'react'
import { Menu, Panda, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { number: "01.", label: "About", href: "#about" },
    { number: "02.", label: "Experience", href: "#experience" },
    { number: "03.", label: "Work", href: "#work" },
    { number: "04.", label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-primary">
        
          <Panda size={16} />
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
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar
