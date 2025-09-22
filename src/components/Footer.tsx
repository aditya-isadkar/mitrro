import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h3 className="text-2xl font-bold">Mitrro</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              Providing pharmaceutical products of global quality standard to patients worldwide. 
              Your trusted partner in healthcare solutions.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Special Offers</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Sanitizers</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Medical Equipment</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Vaccines</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Personal Care</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Professional Tools</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/80">+1-234-567-8900</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/80">info@mitrro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">123 Medical Center, Health City</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button className="bg-gradient-primary hover:bg-gradient-secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 Mitrro. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <p className="text-background/60 text-sm mt-4 md:mt-0">
            Built with care for better healthcare solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;