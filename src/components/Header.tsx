import { Search, ShoppingCart, User, Menu, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 text-white">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1-234-567-8900</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@mitrro.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white">
            <span>Sale on Mitrro</span>
            <span>Welcome to Mitrro</span>
            <span>My Account</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Mitrro
              </h1>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8 hidden md:block">
              <div className="relative">
                <Input
                  placeholder="I'm searching for..."
                  className="pl-4 pr-12 py-3 rounded-full border-border focus:ring-2 focus:ring-primary"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-primary hover:bg-gradient-secondary"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-destructive text-destructive-foreground">
                  0
                </Badge>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 pb-4 border-t pt-4">
            <Link to="/">
              <Button variant="ghost" className="font-medium">Home</Button>
            </Link>
            <Link to="/categories">
              <Button variant="ghost" className="font-medium">Categories</Button>
            </Link>
            <Link to="/brands">
              <Button variant="ghost" className="font-medium">Brands</Button>
            </Link>
            <Button variant="ghost" className="font-medium">About Us</Button>
            <Button variant="ghost" className="font-medium">Contact</Button>
            <div className="ml-auto">
              <Button className="bg-gradient-primary hover:opacity-90">
                Special Offer
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;