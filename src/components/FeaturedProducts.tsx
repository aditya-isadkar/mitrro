import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description?: string;
  quantity:number
}

const LIMIT = 8; // products per page

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);

    const start = page * LIMIT;
    const end = start + LIMIT - 1;

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .range(start, end);

    if (!error && data) {
      if (data.length < LIMIT) {
        setHasMore(false); // no more products
      }

      setProducts((prev) => [...prev, ...data]);
    }

    setLoading(false);
  };

  // Fetch on page change
  useEffect(() => {
    fetchProducts();
  }, [page]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (bottom && !loading && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Featured 
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Products
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore state-of-the-art medical devices loved worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.length === 0 && !loading ? (
            <p className="col-span-full text-center text-muted-foreground">
              No products available yet.
            </p>
          ) : (
            products.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image_url}
                  category={product.description || ""}
                  maxQuantity={product.quantity}
                />
              </div>
            ))
          )}
        </div>

        {/* Loading indicator for infinite scroll */}
        {loading && (
          <p className="text-center text-muted-foreground">Loading...</p>
        )}

        {!hasMore && (
          <p className="text-center text-muted-foreground">No more products.</p>
        )}

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/products">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
