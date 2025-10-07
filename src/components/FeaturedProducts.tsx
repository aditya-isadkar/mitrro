import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sanitizerImage from "@/assets/product-sanitizer.jpg";
import sprayerImage from "@/assets/product-sprayer.jpg";
import atomizerImage from "@/assets/product-atomizer.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Melange Room Sanitizer Spray",
      price: 250,
      originalPrice: 350,
      image: sanitizerImage,
      category: "Sanitizer"
    },
    {
      id: "2",
      name: "Samson Knapsack Sprayer",
      price: 400,
      originalPrice: 450,
      image: sprayerImage,
      category: "Equipment"
    },
    {
      id: "3",
      name: "Atomization Machine for Office",
      price: 400,
      image: atomizerImage,
      category: "Medical Device"
    },
    {
      id: "4",
      name: "Professional Sanitizer Spray Machine",
      price: 600,
      originalPrice: 750,
      image: sanitizerImage,
      category: "Professional"
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
            Discover our top-quality medical and sanitization products, 
            trusted by healthcare professionals worldwide.
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