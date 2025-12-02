import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, Package, CreditCard, Settings, Eye } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const profileSchema = z.object({
  full_name: z.string().trim().min(2, { message: "Full name must be at least 2 characters" }).max(100, { message: "Full name must be less than 100 characters" }),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 characters" }).max(15, { message: "Phone number must be less than 15 characters" }).optional(),
});

interface OrderItem {
  id: string;
  product_name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  total_amount: number;
  status: string;
  payment_method?: string;
  shipping_address?: string;
  created_at: string;
  items: OrderItem[];
}

const MyProfile = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({ full_name: "", phone: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate("/login");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
      fetchOrders();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user?.id)
        .maybeSingle();
      if (error) throw error;
      if (data) setProfileData({ full_name: data.full_name || "", phone: data.phone || "" });
    } catch (error: any) {
      toast.error("Error loading profile: " + error.message);
    }
  };

  const fetchOrders = async () => {
    if (!user) return;
    setLoadingOrders(true);
    try {
      // Fetch orders for the logged-in user
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select(`*, order_items(*)`) // fetch order items if you have order_items table
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (ordersError) throw ordersError;

      if (ordersData) {
        const formattedOrders: Order[] = ordersData.map((order: any) => ({
          ...order,
          items: order.order_items || [], // fallback to empty array
        }));
        setOrders(formattedOrders);
      }
    } catch (error: any) {
      toast.error("Error loading orders: " + error.message);
    } finally {
      setLoadingOrders(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    try {
      const validatedData = profileSchema.parse(profileData);
      setUpdating(true);
      const { error } = await supabase
        .from("profiles")
        .upsert({
          user_id: user.id,
          full_name: validatedData.full_name,
          phone: validatedData.phone,
          updated_at: new Date().toISOString(),
        });
      if (error) throw error;
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Error updating profile: " + error.message);
      }
    } finally {
      setUpdating(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  if (loading) return <div className="min-h-screen"><Header /><div className="container mx-auto py-16 flex justify-center">Loading...</div><Footer /></div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">Manage your account information and view your order history</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile" className="flex items-center gap-2"><User className="h-4 w-4"/>Profile</TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2"><Package className="h-4 w-4"/>Orders</TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2"><Settings className="h-4 w-4"/>Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              {/* Profile Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                        <Input id="email" type="email" value={user.email || ""} className="pl-10" disabled />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                        <Input id="full_name" name="full_name" value={profileData.full_name} onChange={handleInputChange} className="pl-10" disabled={!isEditing} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                        <Input id="phone" name="phone" value={profileData.phone} onChange={handleInputChange} className="pl-10" disabled={!isEditing} />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {!isEditing ? (
                      <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                    ) : (
                      <>
                        <Button onClick={handleSaveProfile} disabled={updating} className="bg-gradient-primary hover:opacity-90">{updating ? "Saving..." : "Save Changes"}</Button>
                        <Button variant="outline" onClick={() => { setIsEditing(false); fetchProfile(); }}>Cancel</Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View and track your previous orders</CardDescription>
                </CardHeader>
                <CardContent>
                  {loadingOrders ? (
                    <p className="text-center text-muted-foreground">Loading orders...</p>
                  ) : orders.length === 0 ? (
                    <p className="text-center text-muted-foreground">No orders found</p>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <Card key={order.id} className="border">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h3 className="font-semibold">Order #{order.id}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Placed on {new Date(order.created_at).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="text-right">
                                <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>{order.status}</Badge>
                                <p className="text-lg font-semibold mt-1">${order.total_amount.toFixed(2)}</p>
                              </div>
                            </div>
                            <Separator className="my-4"/>
                            <div className="space-y-2">
                              <p className="text-sm font-medium">Items:</p>
                              {order.items.map((item, index) => (
                                <p key={index} className="text-sm text-muted-foreground">• {item.product_name} x {item.quantity}</p>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Settings Options like Password, Email Notifications, Payment Methods */}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyProfile;
