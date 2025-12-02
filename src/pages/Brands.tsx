import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  Award,
  Building2,
  Globe,
  Calendar,
  Mail,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState<(typeof brands)[0] | null>(
    null
  );
  const [inquiryBrand, setInquiryBrand] = useState<(typeof brands)[0] | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const brands = [
    {
      id: 1,
      name: "NIPRO",
      description:
        "Leading manufacturer of disposable medical products, dialysis equipment, and artificial organs",
      productCount: 156,
      logo: "/placeholder.svg",
      rating: 4.7,
      featured: true,
      categories: [
        "Dialysis Equipment",
        "Syringes",
        "IV Sets",
        "Blood Bags",
        "Medical Devices",
      ],
      established: "1954",
      country: "Japan",
      products: [
        "Disposable Syringes",
        "IV Cannulas",
        "Blood Collection Tubes",
        "Dialysis Machines",
        "Needles",
        "Infusion Sets",
      ],
      about:
        "NIPRO Corporation is a major Japanese manufacturer specializing in dialysis and artificial organ technology. With decades of innovation, NIPRO provides high-quality disposable medical devices used in hospitals worldwide.",
    },
    {
      id: 2,
      name: "ROMSONS",
      description:
        "Trusted Indian manufacturer of medical disposables and healthcare products",
      productCount: 180,
      logo: "/placeholder.svg",
      rating: 3.7,
      featured: true,
      categories: [
        "Medical Disposables",
        "Surgical Products",
        "Respiratory Care",
        "Wound Care",
      ],
      established: "1989",
      country: "India",
      products: [
        "Surgical Gloves",
        "Face Masks",
        "Catheters",
        "Oxygen Masks",
        "Nebulizers",
        "IV Sets",
        "Surgical Drapes",
      ],
      about:
        "ROMSONS Group is one of India's leading manufacturers of medical disposables. With state-of-the-art manufacturing facilities, ROMSONS provides affordable, quality healthcare products to hospitals and clinics across India and internationally.",
    },
    {
      id: 3,
      name: "Dr. Morepen",
      description:
        "Leading healthcare brand offering diagnostic devices and health monitoring solutions",
      productCount: 95,
      logo: "/placeholder.svg",
      rating: 4.3,
      featured: true,
      categories: [
        "Blood Glucose Monitors",
        "BP Monitors",
        "Thermometers",
        "Pulse Oximeters",
        "Health Devices",
      ],
      established: "1984",
      country: "India",
      products: [
        "Glucometers",
        "Blood Pressure Monitors",
        "Digital Thermometers",
        "Pulse Oximeters",
        "Nebulizers",
        "Weighing Scales",
      ],
      about:
        "Dr. Morepen is a pioneering Indian healthcare brand committed to making quality healthcare accessible. Known for innovative diagnostic devices and health monitoring equipment, Dr. Morepen empowers individuals to manage their health at home.",
    },
    {
      id: 4,
      name: "3M Healthcare",
      description:
        "Global leader in medical supplies, surgical products, and infection prevention solutions",
      productCount: 320,
      logo: "/placeholder.svg",
      rating: 4.9,
      featured: true,
      categories: [
        "Surgical Supplies",
        "Wound Care",
        "Infection Prevention",
        "Medical Tapes",
        "PPE",
      ],
      established: "1902",
      country: "USA",
      products: [
        "Tegaderm Dressings",
        "Surgical Tapes",
        "Sterilization Products",
        "N95 Respirators",
        "Skin Prep Solutions",
        "Medical Drapes",
      ],
      about:
        "3M Healthcare is a division of 3M Company, bringing over a century of innovation to medical care. Trusted by healthcare professionals worldwide, 3M provides advanced medical solutions for surgical procedures, wound management, and infection prevention.",
    },
  ];

  const filteredBrands = brands.filter(
    (brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.categories.some((cat) =>
        cat.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const featuredBrands = filteredBrands.filter((brand) => brand.featured);
  const otherBrands = filteredBrands.filter((brand) => !brand.featured);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inquiryBrand) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        "submit-brand-inquiry",
        {
          body: {
            brand_name: inquiryBrand.name,
            customer_name: inquiryForm.name.trim(),
            customer_email: inquiryForm.email.trim(),
            customer_phone: inquiryForm.phone.trim() || null,
            inquiry_message: inquiryForm.message.trim(),
          },
        }
      );

      if (error) {
        console.error("Brand inquiry error:", error);
        throw error;
      }

      console.log("Brand inquiry submitted successfully:", data);

      setInquiryForm({ name: "", email: "", phone: "", message: "" });
      setInquiryBrand(null);

      toast({
        title: "Inquiry Submitted!",
        description: "We've received your inquiry and will respond soon.",
      });
    } catch (error: any) {
      console.error("Error submitting brand inquiry:", error);
      toast({
        title: "Error",
        description:
          error?.message || "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const BrandCard = ({
    brand,
    index,
  }: {
    brand: (typeof brands)[0];
    index: number;
  }) => (
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
            <p className="text-muted-foreground text-sm">{brand.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">{brand.productCount}</span> products
              available
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
            <Button className="flex-1" onClick={() => setInquiryBrand(brand)}>
              <Mail className="h-4 w-4 mr-2" />
              Product Inquiry
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedBrand(brand)}
            >
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
            Discover trusted brands offering high-quality medical, healthcare,
            and safety products
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
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
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
            <div
              className={`${
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }`}
            >
              {featuredBrands.map((brand, index) => (
                <BrandCard key={brand.id} brand={brand} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* All Brands */}
        {otherBrands.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">All Brands</h2>
            <div
              className={`${
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }`}
            >
              {otherBrands.map((brand, index) => (
                <BrandCard
                  key={brand.id}
                  brand={brand}
                  index={index + featuredBrands.length}
                />
              ))}
            </div>
          </div>
        )}

        {filteredBrands.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No brands found matching your search.
            </p>
          </div>
        )}
      </main>

      {/* Product Inquiry Dialog */}
      <Dialog
        open={!!inquiryBrand}
        onOpenChange={() => {
          setInquiryBrand(null);
          setInquiryForm({ name: "", email: "", phone: "", message: "" });
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Product Inquiry - {inquiryBrand?.name}</DialogTitle>
            <DialogDescription>
              Send us your inquiry about {inquiryBrand?.name} products and we'll
              get back to you soon.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleInquirySubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                required
                value={inquiryForm.name}
                onChange={(e) =>
                  setInquiryForm({ ...inquiryForm, name: e.target.value })
                }
                placeholder="Enter your full name"
                maxLength={100}
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={inquiryForm.email}
                onChange={(e) =>
                  setInquiryForm({ ...inquiryForm, email: e.target.value })
                }
                placeholder="your.email@example.com"
                maxLength={255}
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={inquiryForm.phone}
                onChange={(e) =>
                  setInquiryForm({ ...inquiryForm, phone: e.target.value })
                }
                placeholder="+1 (555) 000-0000"
                maxLength={20}
              />
            </div>

            <div>
              <Label htmlFor="message">Your Inquiry *</Label>
              <Textarea
                id="message"
                required
                value={inquiryForm.message}
                onChange={(e) =>
                  setInquiryForm({ ...inquiryForm, message: e.target.value })
                }
                placeholder="Tell us about your product inquiry..."
                rows={4}
                maxLength={1000}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Brand Info Dialog */}
      <Dialog
        open={!!selectedBrand}
        onOpenChange={() => setSelectedBrand(null)}
      >
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
            <DialogDescription>{selectedBrand?.description}</DialogDescription>
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
              <span className="text-2xl font-bold">
                {selectedBrand?.rating}
              </span>
              <span className="text-muted-foreground">/ 5.0</span>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold mb-2">
                About {selectedBrand?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {selectedBrand?.about}
              </p>
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
                  <div
                    key={idx}
                    className="text-sm p-2 bg-muted rounded flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Partner With Us Section */}
      <div className="mt-20 mb-24">
        <div
          className="rounded-2xl p-10 md:p-14 shadow-xl bg-gradient-primary text-white 
    flex flex-col items-center text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Partner With{" "}
            <span className="text-yellow-300 drop-shadow">Mitrro</span>
          </h2>

          <p className="text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
            Are you a brand or supplier looking to expand your reach? Join
            Mitrro and showcase your healthcare, medical, and safety products to
            our fast-growing buyer network across India.
          </p>

          <Button
            onClick={() => navigate("/sale-on-mitrro")}
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-xl transition-all shadow-md"
          >
            Become a Partner
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Brands;
