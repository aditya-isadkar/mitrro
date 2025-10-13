import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import monitorImage from "@/assets/product-monitor.jpg";
import ultrasoundImage from "@/assets/product-ultrasound.jpg";
import defibrillatorImage from "@/assets/product-defibrillator.jpg";
import surgicalLightImage from "@/assets/product-surgical-light.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Advanced Patient Monitor System",
      price: 45000,
      originalPrice: 52000,
      image: monitorImage,
      category: "Monitoring Equipment"
    },
    {
      id: "2",
      name: "Digital Ultrasound Machine",
      price: 85000,
      originalPrice: 95000,
      image: ultrasoundImage,
      category: "Diagnostic Imaging"
    },
    {
      id: "3",
      name: "Smart Defibrillator AED",
      price: 32000,
      image: defibrillatorImage,
      category: "Emergency Equipment"
    },
    {
      id: "4",
      name: "LED Surgical Light System",
      price: 28000,
      originalPrice: 35000,
      image: surgicalLightImage,
      category: "Surgical Equipment"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Products
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore state-of-the-art medical devices and technology solutions 
            trusted by leading healthcare facilities worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;