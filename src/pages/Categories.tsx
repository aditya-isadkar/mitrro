import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";

const Categories = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 1,
      name: "Sanitizers & Disinfectants",
      description: "Professional-grade sanitization solutions for medical and commercial use",
      productCount: 45,
      image: "/placeholder.svg",
      subcategories: ["Hand Sanitizers", "Surface Disinfectants", "Medical Grade", "Alcohol-based"]
    },
    {
      id: 2,
      name: "Medical Equipment",
      description: "Essential medical devices and diagnostic equipment",
      productCount: 78,
      image: "/placeholder.svg",
      subcategories: ["Diagnostic Tools", "Monitoring Devices", "Emergency Equipment", "Surgical Instruments"]
    },
    {
      id: 3,
      name: "Spraying Equipment",
      description: "Industrial and agricultural spraying solutions",
      productCount: 32,
      image: "/placeholder.svg",
      subcategories: ["Knapsack Sprayers", "Electric Sprayers", "Manual Pumps", "Atomizers"]
    },
    {
      id: 4,
      name: "Personal Protective Equipment",
      description: "Safety gear and protective equipment for healthcare professionals",
      productCount: 156,
      image: "/placeholder.svg",
      subcategories: ["Masks & Respirators", "Gloves", "Protective Clothing", "Eye Protection"]
    },
    {
      id: 5,
      name: "Laboratory Supplies",
      description: "Essential supplies for medical and research laboratories",
      productCount: 89,
      image: "/placeholder.svg",
      subcategories: ["Test Kits", "Lab Equipment", "Consumables", "Safety Supplies"]
    },
    {
      id: 6,
      name: "Cleaning Solutions",
      description: "Professional cleaning products for healthcare facilities",
      productCount: 67,
      image: "/placeholder.svg",
      subcategories: ["Floor Cleaners", "Multi-surface", "Specialized Solutions", "Eco-friendly"]
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Product 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Categories
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Browse our comprehensive range of medical and healthcare products organized by category
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
        }`}>
          {filteredCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{category.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {category.productCount} items
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">
                      Subcategories:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.map((sub, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">
                    Browse Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No categories found matching your search.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Categories;