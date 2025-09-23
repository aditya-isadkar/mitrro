import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Building2, Users, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const businessFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  businessType: z.string().min(1, "Please select business type"),
  businessSize: z.string().min(1, "Please select business size"),
  annualRevenue: z.string().min(1, "Please select annual revenue range"),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),
  address: z.string().min(10, "Complete address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Valid ZIP code is required"),
  description: z.string().min(50, "Business description must be at least 50 characters"),
  terms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
});

type BusinessFormData = z.infer<typeof businessFormSchema>;

const SaleOnMitrro = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<BusinessFormData>({
    resolver: zodResolver(businessFormSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      businessType: "",
      businessSize: "",
      annualRevenue: "",
      website: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      description: "",
      terms: false,
    },
  });

  const onSubmit = (data: BusinessFormData) => {
    console.log("Business registration data:", data);
    setIsSubmitted(true);
    toast({
      title: "Registration Submitted!",
      description: "We'll review your application and contact you within 2-3 business days.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Registration Submitted Successfully!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for your interest in partnering with Mitrro. Our business development team will review your application and contact you within 2-3 business days.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-primary hover:opacity-90">
              Submit Another Registration
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Partner with Mitrro</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of healthcare businesses that trust Mitrro for their pharmaceutical and medical supply needs. Register your business today and unlock exclusive wholesale pricing and benefits.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-card">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Wholesale Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access exclusive wholesale rates and bulk discounts for all pharmaceutical products.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-card">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get assigned a dedicated account manager for personalized service and support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-card">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Business Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access marketing materials and business development resources to grow your practice.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <Card className="max-w-4xl mx-auto shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Business Registration Form</CardTitle>
              <CardDescription className="text-lg">
                Fill out the form below to start your partnership with Mitrro
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPerson"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter contact person name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter business email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select business type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="hospital">Hospital</SelectItem>
                              <SelectItem value="clinic">Clinic</SelectItem>
                              <SelectItem value="pharmacy">Pharmacy</SelectItem>
                              <SelectItem value="laboratory">Laboratory</SelectItem>
                              <SelectItem value="nursing-home">Nursing Home</SelectItem>
                              <SelectItem value="medical-practice">Medical Practice</SelectItem>
                              <SelectItem value="dental-practice">Dental Practice</SelectItem>
                              <SelectItem value="veterinary">Veterinary Practice</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Size *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select business size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="500+">500+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="annualRevenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Annual Revenue *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select revenue range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="under-100k">Under $100K</SelectItem>
                              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                              <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                              <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                              <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                              <SelectItem value="10m+">$10M+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter complete business address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter state" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter ZIP code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your business, services offered, and how you plan to use Mitrro's products..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the Terms and Conditions and Privacy Policy *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="text-center pt-6">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-gradient-primary hover:opacity-90 px-12"
                    >
                      <Shield className="h-5 w-5 mr-2" />
                      Submit Registration
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaleOnMitrro;