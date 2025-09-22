import { Button } from "@/components/ui/button";
import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Professional Healthcare
                <span className="block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Providing pharmaceutical products of global quality standard. 
                Be part of the world's largest healthcare and safety drive with trusted medical equipment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
                Browse Products
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4">
                Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Certified Quality</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Award Winning</p>
              </div>
              <div className="text-center">
                <HeadphonesIcon className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">24/7 Support</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl"></div>
            <img
              src={heroImage}
              alt="Modern Medical Laboratory"
              className="w-full h-[500px] object-cover rounded-3xl shadow-medical"
            />
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-center">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Quality Assured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;