import { Mail, Github, Linkedin, Globe, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:thahzeenas@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Globe, href: "#", label: "Website" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Contact</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm currently looking to join a cross-functional team that values improving 
            people's lives through accessible technology, or have a project in mind? 
            Let's connect.
          </p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <a
              href="mailto:thahzeenas@gmail.com"
              className="inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              thahzeenas@gmail.com
            </a>
            <a
              href="tel:+94766805064"
              className="inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone size={20} />
              +94 766 805 064
            </a>
            <p className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} />
              Kinniya, Sri Lanka
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all group"
              >
                <social.icon
                  size={20}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
