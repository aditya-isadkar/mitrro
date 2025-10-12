import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, User, Clock, Search, ArrowRight, TrendingUp, Heart, Shield } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Pharmaceutical Supply Chain Management",
    excerpt: "Exploring how technology and innovation are revolutionizing pharmaceutical distribution and improving patient outcomes worldwide.",
    content: "The pharmaceutical supply chain is undergoing a massive transformation driven by technological innovation and changing market demands. From blockchain-enabled tracking systems to AI-powered demand forecasting, the industry is embracing digital solutions that promise greater efficiency, transparency, and patient safety.\n\nKey technologies reshaping the landscape include IoT sensors for real-time temperature monitoring during transit, machine learning algorithms that predict supply disruptions before they occur, and automated warehousing systems that minimize human error. These innovations are critical as the industry faces growing pressure to reduce costs while maintaining the highest quality standards.\n\nThe COVID-19 pandemic highlighted both the vulnerabilities and the resilience of pharmaceutical supply chains. Companies that had invested in digital infrastructure were better positioned to adapt to sudden changes in demand and supply disruptions. Looking forward, the integration of predictive analytics, automated systems, and enhanced collaboration platforms will be essential for building more robust and responsive supply networks.\n\nRegulatory compliance remains a top priority, with serialization requirements and track-and-trace mandates becoming standard across major markets. Modern supply chain management systems must seamlessly integrate these compliance features while maintaining operational efficiency. The future belongs to organizations that can balance innovation with regulatory adherence, delivering life-saving medications safely and reliably to patients worldwide.",
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
    content: "The COVID-19 vaccine distribution effort represented one of the largest and most complex pharmaceutical logistics operations in history. The challenges were unprecedented: ultra-cold storage requirements, global coordination across diverse healthcare systems, and the urgency to vaccinate billions of people in record time.\n\nOne of the most significant lessons learned was the critical importance of cold chain infrastructure. mRNA vaccines requiring storage at -70°C pushed the limits of existing logistics networks and spurred rapid innovation in portable freezer technology and temperature monitoring systems. Pharmaceutical companies and distributors had to rapidly scale up their cold chain capabilities, leading to investments that will benefit the industry long after the pandemic.\n\nThe crisis also highlighted the need for better data sharing and coordination between public health authorities, manufacturers, and distributors. Countries that established centralized tracking systems and transparent data-sharing protocols achieved more efficient distribution and higher vaccination rates. This experience has led to calls for standardized global frameworks for emergency pharmaceutical distribution.\n\nAnother key takeaway was the importance of flexibility and redundancy in supply chains. Organizations with diversified manufacturing sites and transportation partnerships were better able to navigate disruptions. Moving forward, the pharmaceutical industry is likely to maintain higher inventory levels and more diverse supplier networks to ensure resilience against future crises.",
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
    content: "Quality assurance in medical device manufacturing is not just a regulatory requirement—it's a moral imperative that directly impacts patient safety. The complexity of modern medical devices demands rigorous quality control processes at every stage, from design and development through production and post-market surveillance.\n\nA robust quality management system (QMS) forms the foundation of successful medical device manufacturing. ISO 13485 certification has become the global standard, providing a framework for consistent quality processes. Leading manufacturers go beyond minimum requirements, implementing advanced statistical process control, automated inspection systems, and comprehensive documentation practices that ensure full traceability.\n\nRisk management is central to quality assurance, with ISO 14971 providing guidelines for identifying, evaluating, and controlling risks throughout a device's lifecycle. This proactive approach helps manufacturers anticipate potential issues before they reach patients. Modern quality systems increasingly incorporate real-world evidence and post-market data to continuously improve products and processes.\n\nHuman factors engineering has emerged as a critical component of quality assurance, recognizing that even well-designed devices can fail if they don't account for how healthcare professionals actually use them. Usability testing and human factors validation studies are now essential parts of the development process, helping ensure that devices perform safely and effectively in real-world clinical settings.",
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
    content: "Digital transformation is revolutionizing healthcare supply chains, with artificial intelligence and machine learning leading the charge in creating smarter, more efficient systems. These technologies are tackling longstanding challenges in inventory management, demand forecasting, and waste reduction.\n\nAI-powered demand forecasting systems analyze vast amounts of historical data, seasonal patterns, and external factors to predict future needs with unprecedented accuracy. This helps healthcare facilities maintain optimal inventory levels—reducing both stockouts and excess inventory that leads to waste from expired medications. Some advanced systems can even factor in weather patterns, disease outbreaks, and population health trends to anticipate demand spikes.\n\nMachine learning algorithms are also transforming warehouse operations and logistics. Automated systems can optimize storage locations based on product velocity and compatibility, while intelligent routing algorithms ensure efficient delivery schedules. These technologies not only reduce operational costs but also improve product availability and reduce the environmental impact of healthcare supply chains.\n\nBlockchain technology is emerging as a powerful tool for enhancing transparency and security in pharmaceutical supply chains. By creating immutable records of every transaction and movement, blockchain helps combat counterfeit drugs, ensures regulatory compliance, and builds trust among all stakeholders. Early adopters are seeing benefits in streamlined recalls, improved inventory accuracy, and enhanced collaboration across complex supply networks.",
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
    content: "Navigating the complex landscape of pharmaceutical regulations requires constant vigilance and a deep understanding of evolving requirements. From FDA regulations in the United States to the Falsified Medicines Directive in Europe, pharmaceutical distributors must comply with multiple overlapping regulatory frameworks while maintaining operational efficiency.\n\nThe Drug Supply Chain Security Act (DSCSA) represents a major shift toward enhanced traceability in the U.S. pharmaceutical supply chain. Full implementation of serialization and track-and-trace requirements is creating unprecedented visibility into product movement while helping combat counterfeit drugs. Distributors must invest in technology systems capable of capturing, storing, and exchanging serialization data at scale.\n\nGood Distribution Practice (GDP) guidelines provide a framework for ensuring product integrity throughout the distribution process. These standards cover everything from facility requirements and equipment qualification to personnel training and transportation management. Compliance requires robust quality management systems, regular audits, and continuous improvement programs.\n\nInternational distribution adds additional layers of complexity, as companies must navigate varying regulatory requirements across different jurisdictions. Successful global distributors maintain dedicated regulatory affairs teams, implement harmonized quality systems that meet the strictest standards, and stay engaged with regulatory authorities through trade associations and industry forums. The investment in compliance infrastructure pays dividends in market access, operational reliability, and patient safety.",
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
    content: "Sustainability has become a critical priority for the pharmaceutical and medical device industries, as companies recognize both the environmental imperative and the business case for eco-friendly practices. The challenge lies in implementing sustainable practices without compromising the stringent quality and safety standards required for medical products.\n\nGreen manufacturing initiatives are focusing on energy efficiency, waste reduction, and sustainable sourcing. Many manufacturers are investing in renewable energy, implementing closed-loop water systems, and optimizing production processes to minimize resource consumption. These efforts not only reduce environmental impact but often lead to significant cost savings over time.\n\nPackaging represents a major opportunity for sustainability improvements. The medical industry has traditionally relied heavily on single-use plastics to ensure sterility and product integrity. Innovative companies are now developing biodegradable alternatives, optimizing package sizes to reduce material use, and designing packaging that's easier to recycle. Some are exploring reusable packaging systems for certain product categories, carefully balancing sustainability goals with patient safety requirements.\n\nSupply chain sustainability extends beyond manufacturing to include transportation, warehousing, and distribution. Companies are optimizing logistics networks to reduce carbon emissions, partnering with carriers committed to sustainable practices, and implementing green building standards for distribution centers. The most forward-thinking organizations are conducting full lifecycle assessments of their products, from raw material extraction through end-of-life disposal, to identify opportunities for reducing environmental impact throughout the value chain.",
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
  const [selectedBlog, setSelectedBlog] = useState<typeof blogPosts[0] | null>(null);

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
                    <Button className="bg-gradient-primary hover:opacity-90 w-fit" onClick={() => setSelectedBlog(post)}>
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
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" onClick={() => setSelectedBlog(post)}>
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

      {/* Blog Detail Dialog */}
      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
          <DialogHeader>
            <div className="relative w-full h-64 -mx-6 -mt-6 mb-4">
              <img 
                src={selectedBlog?.image} 
                alt={selectedBlog?.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                {selectedBlog?.category}
              </Badge>
            </div>
            <DialogTitle className="text-2xl">{selectedBlog?.title}</DialogTitle>
            <DialogDescription>
              <div className="flex items-center space-x-4 text-sm mt-2">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{selectedBlog?.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedBlog?.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{selectedBlog?.readTime}</span>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          
          <div className="overflow-y-auto pr-2">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {selectedBlog?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;