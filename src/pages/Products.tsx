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

  // Consumable & Disposable products
  const consumableProducts = [
    {
      id: "9",
      name: "Sterile Syringes 10ml (Pack of 100)",
      price: 850,
      originalPrice: 1000,
      image: "/placeholder.svg",
      category: "Syringes"
    },
    {
      id: "10",
      name: "Nitrile Examination Gloves (Box of 200)",
      price: 1200,
      image: "/placeholder.svg",
      category: "Gloves"
    },
    {
      id: "11",
      name: "Sterile Gauze Pads 4x4 (Pack of 200)",
      price: 450,
      image: "/placeholder.svg",
      category: "Gauze"
    },
    {
      id: "12",
      name: "Adhesive Bandages Assorted (Box of 100)",
      price: 180,
      originalPrice: 250,
      image: "/placeholder.svg",
      category: "Bandages"
    },
    {
      id: "13",
      name: "Surgical Drapes Sterile (Pack of 50)",
      price: 2500,
      image: "/placeholder.svg",
      category: "Surgical Drapes"
    },
    {
      id: "14",
      name: "Insulin Syringes 1ml (Pack of 100)",
      price: 650,
      image: "/placeholder.svg",
      category: "Syringes"
    },
    {
      id: "15",
      name: "Elastic Bandage Roll 6 inch",
      price: 120,
      originalPrice: 180,
      image: "/placeholder.svg",
      category: "Bandages"
    },
    {
      id: "16",
      name: "Latex Surgical Gloves (Pack of 50)",
      price: 950,
      image: "/placeholder.svg",
      category: "Gloves"
    }
  ];

  // Medical Device & Equipment products
  const medicalDeviceProducts = [
    {
      id: "17",
      name: "Patient Vital Signs Monitor",
      price: 45000,
      originalPrice: 52000,
      image: "/placeholder.svg",
      category: "Monitors"
    },
    {
      id: "18",
      name: "ICU Ventilator Machine",
      price: 350000,
      image: "/placeholder.svg",
      category: "Ventilators"
    },
    {
      id: "19",
      name: "Digital X-Ray Machine",
      price: 850000,
      image: "/placeholder.svg",
      category: "X-Ray Machines"
    },
    {
      id: "20",
      name: "Portable Ultrasound Scanner",
      price: 120000,
      originalPrice: 145000,
      image: "/placeholder.svg",
      category: "Ultrasound"
    },
    {
      id: "21",
      name: "Automated External Defibrillator",
      price: 85000,
      image: "/placeholder.svg",
      category: "Defibrillators"
    },
    {
      id: "22",
      name: "ECG Machine 12 Channel",
      price: 65000,
      originalPrice: 75000,
      image: "/placeholder.svg",
      category: "Monitors"
    },
    {
      id: "23",
      name: "Anesthesia Ventilator",
      price: 280000,
      image: "/placeholder.svg",
      category: "Ventilators"
    },
    {
      id: "24",
      name: "Color Doppler Ultrasound",
      price: 450000,
      image: "/placeholder.svg",
      category: "Ultrasound"
    }
  ];

  // Dental products
  const dentalProducts = [
    {
      id: "25",
      name: "Electric Dental Chair Unit",
      price: 185000,
      originalPrice: 210000,
      image: "/placeholder.svg",
      category: "Dental Chairs"
    },
    {
      id: "26",
      name: "High Speed Dental Handpiece",
      price: 12500,
      image: "/placeholder.svg",
      category: "Hand Pieces"
    },
    {
      id: "27",
      name: "Digital Dental X-Ray Sensor",
      price: 95000,
      image: "/placeholder.svg",
      category: "Dental X-Ray"
    },
    {
      id: "28",
      name: "Orthodontic Bracket Kit (Complete Set)",
      price: 8500,
      originalPrice: 11000,
      image: "/placeholder.svg",
      category: "Orthodontics"
    },
    {
      id: "29",
      name: "Titanium Dental Implants (Pack of 10)",
      price: 45000,
      image: "/placeholder.svg",
      category: "Implants"
    },
    {
      id: "30",
      name: "Low Speed Dental Handpiece",
      price: 8500,
      image: "/placeholder.svg",
      category: "Hand Pieces"
    },
    {
      id: "31",
      name: "Dental Chair with LED Light",
      price: 165000,
      originalPrice: 195000,
      image: "/placeholder.svg",
      category: "Dental Chairs"
    },
    {
      id: "32",
      name: "Orthodontic Arch Wires Set",
      price: 3500,
      image: "/placeholder.svg",
      category: "Orthodontics"
    }
  ];

  // Surgical Instruments products
  const surgicalProducts = [
    {
      id: "33",
      name: "Surgical Scalpel Set (10 pieces)",
      price: 1800,
      originalPrice: 2200,
      image: "/placeholder.svg",
      category: "Scalpels"
    },
    {
      id: "34",
      name: "Tissue Forceps 6 inch",
      price: 450,
      image: "/placeholder.svg",
      category: "Forceps"
    },
    {
      id: "35",
      name: "Surgical Scissors Curved",
      price: 650,
      image: "/placeholder.svg",
      category: "Scissors"
    },
    {
      id: "36",
      name: "Self-Retaining Retractor",
      price: 2500,
      originalPrice: 3000,
      image: "/placeholder.svg",
      category: "Retractors"
    },
    {
      id: "37",
      name: "Hemostatic Clamps Set (5 pieces)",
      price: 1850,
      image: "/placeholder.svg",
      category: "Clamps"
    },
    {
      id: "38",
      name: "Disposable Scalpel Blades (Pack of 100)",
      price: 850,
      image: "/placeholder.svg",
      category: "Scalpels"
    },
    {
      id: "39",
      name: "Surgical Scissors Straight 5.5 inch",
      price: 580,
      originalPrice: 750,
      image: "/placeholder.svg",
      category: "Scissors"
    },
    {
      id: "40",
      name: "Artery Forceps Curved 6 inch",
      price: 520,
      image: "/placeholder.svg",
      category: "Forceps"
    }
  ];

  // Hospital Establishment products
  const hospitalProducts = [
    {
      id: "41",
      name: "Electric ICU Hospital Bed",
      price: 55000,
      originalPrice: 65000,
      image: "/placeholder.svg",
      category: "Hospital Beds"
    },
    {
      id: "42",
      name: "Hydraulic Operating Table",
      price: 185000,
      image: "/placeholder.svg",
      category: "Operating Tables"
    },
    {
      id: "43",
      name: "Medical Examination Couch",
      price: 18500,
      image: "/placeholder.svg",
      category: "Medical Furniture"
    },
    {
      id: "44",
      name: "LED Surgical Light Single Dome",
      price: 125000,
      originalPrice: 145000,
      image: "/placeholder.svg",
      category: "Lighting"
    },
    {
      id: "45",
      name: "Medical Storage Cabinet Stainless Steel",
      price: 28500,
      image: "/placeholder.svg",
      category: "Storage"
    },
    {
      id: "46",
      name: "Manual Hospital Bed 3 Function",
      price: 32000,
      image: "/placeholder.svg",
      category: "Hospital Beds"
    },
    {
      id: "47",
      name: "Medical Trolley with Drawers",
      price: 12500,
      originalPrice: 15000,
      image: "/placeholder.svg",
      category: "Medical Furniture"
    },
    {
      id: "48",
      name: "Double Door Medical Refrigerator",
      price: 45000,
      image: "/placeholder.svg",
      category: "Storage"
    }
  ];

  const subcategories = categoryData[categoryName] || ["All"];
  
  const getProductsByCategory = () => {
    switch(categoryName) {
      case "Covid-19 Essentials":
        return covidProducts;
      case "Consumable & Disposable":
        return consumableProducts;
      case "Medical Device & Equipment":
        return medicalDeviceProducts;
      case "Dental":
        return dentalProducts;
      case "Surgical Instruments":
        return surgicalProducts;
      case "Hospital Establishment":
        return hospitalProducts;
      default:
        return [];
    }
  };

  const products = getProductsByCategory();

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
