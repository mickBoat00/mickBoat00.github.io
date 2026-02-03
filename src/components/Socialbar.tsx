import { Github, Twitter, Linkedin } from "lucide-react";

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: "https://github.com/mickBoat00" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-8 after:content-[''] after:w-px after:h-24 after:bg-foreground">
      {socials.map((social, index) => (
        <a key={index} href={social.href} className="text-foreground hover:text-primary hover:-translate-y-1 transition-all">
          <social.icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
