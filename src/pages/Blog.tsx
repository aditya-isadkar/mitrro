import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Clock, Search, ArrowRight, TrendingUp, Heart, Shield } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Pharmaceutical Supply Chain Management",
    excerpt: "Exploring how technology and innovation are revolutionizing pharmaceutical distribution and improving patient outcomes worldwide.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/src/assets/hero-medical.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "COVID-19 Vaccine Distribution: Lessons Learned",
    excerpt: "Analyzing the global vaccine rollout and how it transformed pharmaceutical logistics and emergency response protocols.",
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Healthcare",
    image: "/src/assets/product-sanitizer.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Quality Assurance in Medical Device Manufacturing",
    excerpt: "Best practices for ensuring medical device quality, compliance, and safety throughout the manufacturing process.",
    author: "Lisa Rodriguez",
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Quality Control",
    image: "/src/assets/product-atomizer.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Transformation in Healthcare Supply Chains",
    excerpt: "How artificial intelligence and machine learning are optimizing inventory management and reducing waste.",
    author: "Dr. Sarah Johnson",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "/src/assets/product-sprayer.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Regulatory Compliance in Pharmaceutical Distribution",
    excerpt: "Understanding FDA regulations and international standards for pharmaceutical distributors and manufacturers.",
    author: "Dr. Michael Chen",
    date: "March 1, 2024",
    readTime: "9 min read",
    category: "Compliance",
    image: "/src/assets/hero-medical.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Sustainable Practices in Medical Supply Manufacturing",
    excerpt: "How the pharmaceutical industry is adopting eco-friendly practices while maintaining product quality and safety.",
    author: "Lisa Rodriguez",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/src/assets/product-sanitizer.jpg",
    featured: false,
  },
];

const categories = ["All", "Industry Insights", "Healthcare", "Technology", "Quality Control", "Compliance", "Sustainability"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Mitrro Blog</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stay informed with the latest insights, trends, and best practices in pharmaceutical and healthcare industries from our team of experts.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                placeholder="Search articles..."
                className="pl-4 pr-12 py-3 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-white/20 hover:bg-white/30"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map(post => (
              <Card key={post.id} className="shadow-hover border-0 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {post.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-gradient-primary hover:opacity-90 w-fit">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-gradient-primary hover:opacity-90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <Card key={post.id} className="shadow-card hover:shadow-hover transition-all duration-300 border-0 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest pharmaceutical industry insights, product updates, and expert analysis.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button variant="secondary" className="text-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Popular Topics</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Industry Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Latest developments and emerging trends in pharmaceutical and healthcare industries.
                </p>
                <Button variant="outline" size="sm">
                  Explore Trends
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Patient Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Best practices and innovations for improving patient outcomes and healthcare delivery.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Regulatory Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay compliant with the latest regulatory changes and industry standards.
                </p>
                <Button variant="outline" size="sm">
                  View Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;