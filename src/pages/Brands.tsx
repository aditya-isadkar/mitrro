import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List, Star, Award, Building2, Globe, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Brands = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<typeof brands[0] | null>(null);

  const brands = [
    {
      id: 1,
      name: "NIPRO",
      description: "Leading manufacturer of disposable medical products, dialysis equipment, and artificial organs",
      productCount: 156,
      logo: "/placeholder.svg",
      rating: 4.7,
      featured: true,
      categories: ["Dialysis Equipment", "Syringes", "IV Sets", "Blood Bags", "Medical Devices"],
      established: "1954",
      country: "Japan",
      products: ["Disposable Syringes", "IV Cannulas", "Blood Collection Tubes", "Dialysis Machines", "Needles", "Infusion Sets"],
      about: "NIPRO Corporation is a major Japanese manufacturer specializing in dialysis and artificial organ technology. With decades of innovation, NIPRO provides high-quality disposable medical devices used in hospitals worldwide."
    },
    {
      id: 2,
      name: "ROMSONS",
      description: "Trusted Indian manufacturer of medical disposables and healthcare products",
      productCount: 180,
      logo: "/placeholder.svg", 
      rating: 3.7,
      featured: true,
      categories: ["Medical Disposables", "Surgical Products", "Respiratory Care", "Wound Care"],
      established: "1989",
      country: "India",
      products: ["Surgical Gloves", "Face Masks", "Catheters", "Oxygen Masks", "Nebulizers", "IV Sets", "Surgical Drapes"],
      about: "ROMSONS Group is one of India's leading manufacturers of medical disposables. With state-of-the-art manufacturing facilities, ROMSONS provides affordable, quality healthcare products to hospitals and clinics across India and internationally."
    },
    {
      id: 3,
      name: "Dr. Morepen",
      description: "Leading healthcare brand offering diagnostic devices and health monitoring solutions",
      productCount: 95,
      logo: "/placeholder.svg",
      rating: 4.3,
      featured: true,
      categories: ["Blood Glucose Monitors", "BP Monitors", "Thermometers", "Pulse Oximeters", "Health Devices"],
      established: "1984",
      country: "India",
      products: ["Glucometers", "Blood Pressure Monitors", "Digital Thermometers", "Pulse Oximeters", "Nebulizers", "Weighing Scales"],
      about: "Dr. Morepen is a pioneering Indian healthcare brand committed to making quality healthcare accessible. Known for innovative diagnostic devices and health monitoring equipment, Dr. Morepen empowers individuals to manage their health at home."
    },
    {
      id: 4,
      name: "3M Healthcare",
      description: "Global leader in medical supplies, surgical products, and infection prevention solutions",
      productCount: 320,
      logo: "/placeholder.svg",
      rating: 4.9,
      featured: true,
      categories: ["Surgical Supplies", "Wound Care", "Infection Prevention", "Medical Tapes", "PPE"],
      established: "1902",
      country: "USA",
      products: ["Tegaderm Dressings", "Surgical Tapes", "Sterilization Products", "N95 Respirators", "Skin Prep Solutions", "Medical Drapes"],
      about: "3M Healthcare is a division of 3M Company, bringing over a century of innovation to medical care. Trusted by healthcare professionals worldwide, 3M provides advanced medical solutions for surgical procedures, wound management, and infection prevention."
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
            <Button variant="outline" size="sm" onClick={() => setSelectedBrand(brand)}>
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

      {/* Brand Info Dialog */}
      <Dialog open={!!selectedBrand} onOpenChange={() => setSelectedBrand(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {selectedBrand?.name.charAt(0)}
                </span>
              </div>
              {selectedBrand?.name}
            </DialogTitle>
            <DialogDescription>
              {selectedBrand?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 overflow-y-auto pr-2">
            {/* Company Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Country</p>
                  <p className="font-medium">{selectedBrand?.country}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Established</p>
                  <p className="font-medium">{selectedBrand?.established}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Products</p>
                  <p className="font-medium">{selectedBrand?.productCount}+</p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-2xl font-bold">{selectedBrand?.rating}</span>
              <span className="text-muted-foreground">/ 5.0</span>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold mb-2">About {selectedBrand?.name}</h3>
              <p className="text-sm text-muted-foreground">{selectedBrand?.about}</p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-2">Product Categories</h3>
              <div className="flex flex-wrap gap-2">
                {selectedBrand?.categories.map((category, idx) => (
                  <Badge key={idx} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Featured Products */}
            <div>
              <h3 className="font-semibold mb-2">Featured Products</h3>
              <div className="grid grid-cols-2 gap-2">
                {selectedBrand?.products.map((product, idx) => (
                  <div key={idx} className="text-sm p-2 bg-muted rounded flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Brands;