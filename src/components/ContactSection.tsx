import { Mail, Github, Linkedin, Globe, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:thahzeenas@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Globe, href: "#", label: "Website" },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient">Contact</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 px-2">
            I'm currently looking to join a cross-functional team that values improving 
            people's lives through accessible technology, or have a project in mind? 
            Let's connect.
          </p>

          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a
              href="mailto:thahzeenas@gmail.com"
              className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              thahzeenas@gmail.com
            </a>
            <a
              href="tel:+94766805064"
              className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              +94 766 805 064
            </a>
            <p className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
              <MapPin size={18} className="sm:w-5 sm:h-5" />
              Kinniya, Sri Lanka
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all group"
              >
                <social.icon
                  size={18}
                  className="sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors"
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
