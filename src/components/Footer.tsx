const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} Mohamed Safras. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
