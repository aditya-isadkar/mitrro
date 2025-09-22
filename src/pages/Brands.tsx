import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List, Star, Award } from "lucide-react";
import { Input } from "@/components/ui/input";

const Brands = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const brands = [
    {
      id: 1,
      name: "Melange",
      description: "Premium sanitization solutions with advanced formulations",
      productCount: 24,
      logo: "/placeholder.svg",
      rating: 4.8,
      featured: true,
      categories: ["Sanitizers", "Disinfectants", "Personal Care"],
      established: "2018",
      country: "India"
    },
    {
      id: 2,
      name: "Samson",
      description: "Professional spraying equipment and agricultural solutions",
      productCount: 18,
      logo: "/placeholder.svg", 
      rating: 4.6,
      featured: true,
      categories: ["Spraying Equipment", "Agricultural Tools"],
      established: "2015",
      country: "India"
    },
    {
      id: 3,
      name: "MediCore",
      description: "Trusted medical equipment and diagnostic devices",
      productCount: 45,
      logo: "/placeholder.svg",
      rating: 4.9,
      featured: false,
      categories: ["Medical Equipment", "Diagnostics", "Monitoring"],
      established: "2010",
      country: "Germany"
    },
    {
      id: 4,
      name: "SafeGuard Pro",
      description: "Professional-grade protective equipment and safety solutions",
      productCount: 67,
      logo: "/placeholder.svg",
      rating: 4.7,
      featured: true,
      categories: ["PPE", "Safety Equipment", "Protection"],
      established: "2012",
      country: "USA"
    },
    {
      id: 5,
      name: "CleanTech Solutions",
      description: "Innovative cleaning and sanitization technology",
      productCount: 32,
      logo: "/placeholder.svg",
      rating: 4.5,
      featured: false,
      categories: ["Cleaning Solutions", "Technology", "Industrial"],
      established: "2019",
      country: "Netherlands"
    },
    {
      id: 6,
      name: "LabExpert",
      description: "Comprehensive laboratory supplies and equipment",
      productCount: 89,
      logo: "/placeholder.svg",
      rating: 4.8,
      featured: false,
      categories: ["Laboratory", "Research", "Testing Equipment"],
      established: "2008",
      country: "Switzerland"
    }
  ];

  const filteredBrands = brands.filter(brand =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredBrands = filteredBrands.filter(brand => brand.featured);
  const otherBrands = filteredBrands.filter(brand => !brand.featured);

  const BrandCard = ({ brand, index }: { brand: typeof brands[0], index: number }) => (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {brand.featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-primary text-white">
            <Award className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">
              {brand.name.charAt(0)}
            </span>
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{brand.name}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm ml-1">{brand.rating}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {brand.country}
              </Badge>
              <span className="text-xs text-muted-foreground">
                Est. {brand.established}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {brand.description}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">{brand.productCount}</span> products available
            </p>
            <div className="flex flex-wrap gap-1">
              {brand.categories.map((category, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button className="flex-1">
              View Products
            </Button>
            <Button variant="outline" size="sm">
              Brand Info
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Our 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Brands
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover trusted brands offering high-quality medical, healthcare, and safety products
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search brands..."
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

        {/* Featured Brands */}
        {featuredBrands.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-500" />
              Featured Brands
            </h2>
            <div className={`${
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
            }`}>
              {featuredBrands.map((brand, index) => (
                <BrandCard key={brand.id} brand={brand} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* All Brands */}
        {otherBrands.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              All Brands
            </h2>
            <div className={`${
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
            }`}>
              {otherBrands.map((brand, index) => (
                <BrandCard key={brand.id} brand={brand} index={index + featuredBrands.length} />
              ))}
            </div>
          </div>
        )}

        {filteredBrands.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No brands found matching your search.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Brands;