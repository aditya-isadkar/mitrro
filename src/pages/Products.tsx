import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category") || "";
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Category data with subcategories
  const categoryData: Record<string, string[]> = {
    "Covid-19 Essentials": ["All", "Vaccines", "Test Kits", "N95 Masks", "Sanitizers", "PPE"],
    "Consumable & Disposable": ["All", "Syringes", "Gloves", "Gauze", "Bandages", "Surgical Drapes"],
    "Medical Device & Equipment": ["All", "Monitors", "Ventilators", "X-Ray Machines", "Ultrasound", "Defibrillators"],
    "Dental": ["All", "Dental Chairs", "Hand Pieces", "Dental X-Ray", "Orthodontics", "Implants"],
    "Surgical Instruments": ["All", "Scalpels", "Forceps", "Scissors", "Retractors", "Clamps"],
    "Hospital Establishment": ["All", "Hospital Beds", "Operating Tables", "Medical Furniture", "Lighting", "Storage"]
  };

  // Sample products for Covid-19 Essentials
  const covidProducts = [
    {
      id: "1",
      name: "N95 Respirator Mask (Pack of 20)",
      price: 599,
      originalPrice: 799,
      image: "/placeholder.svg",
      category: "N95 Masks"
    },
    {
      id: "2",
      name: "COVID-19 RT-PCR Test Kit",
      price: 350,
      image: "/placeholder.svg",
      category: "Test Kits"
    },
    {
      id: "3",
      name: "Hand Sanitizer 500ml (Pack of 5)",
      price: 450,
      originalPrice: 550,
      image: "/placeholder.svg",
      category: "Sanitizers"
    },
    {
      id: "4",
      name: "PPE Full Body Suit",
      price: 1200,
      image: "/placeholder.svg",
      category: "PPE"
    },
    {
      id: "5",
      name: "COVID-19 Rapid Antigen Test",
      price: 150,
      image: "/placeholder.svg",
      category: "Test Kits"
    },
    {
      id: "6",
      name: "Surgical Face Mask (Pack of 50)",
      price: 250,
      originalPrice: 350,
      image: "/placeholder.svg",
      category: "N95 Masks"
    },
    {
      id: "7",
      name: "Disposable Gloves (Pack of 100)",
      price: 400,
      image: "/placeholder.svg",
      category: "PPE"
    },
    {
      id: "8",
      name: "Alcohol-Based Hand Rub 1L",
      price: 280,
      image: "/placeholder.svg",
      category: "Sanitizers"
    }
  ];

  const subcategories = categoryData[categoryName] || ["All"];
  const products = categoryName === "Covid-19 Essentials" ? covidProducts : [];

  const filteredProducts = products.filter(product => {
    const matchesSubcategory = selectedSubcategory === "All" || product.category === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubcategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse products by subcategory
          </p>
        </div>

        {/* Subcategory Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Filter by Subcategory</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {subcategories.map((sub) => (
              <Badge
                key={sub}
                variant={selectedSubcategory === sub ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/90 transition-colors"
                onClick={() => setSelectedSubcategory(sub)}
              >
                {sub}
              </Badge>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {products.length === 0 
                ? "Products coming soon for this category"
                : "No products found matching your filters"}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;
