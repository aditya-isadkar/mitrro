import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client"; // make sure your Supabase client is set up

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("Categories")
        .select("*") // fetch all columns
        .order("category_name", { ascending: true }); // optional: order by name

      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data);
      }

      console.log(categories)
      setLoading(false);
    };

    fetchCategories();
  }, []);

  if (loading) return <p className="text-center py-6">Loading categories...</p>;

  return (
    <div className="py-6 px-4 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Categories</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide py-2 snap-x snap-mandatory">
        {categories.map((category) => (
          <div
            key={category.id} // assuming your table has 'id'
            className="flex-shrink-0 w-32 sm:w-36 md:w-40 lg:w-44 p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform cursor-pointer text-center"
            onClick={() => navigate("/categories")}
          >
            <img
              src={category.image} // assuming your table has 'img_url' column
              alt={category}
              className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-contain mb-2"
            />
            <p className="text-sm sm:text-base font-medium text-gray-700">
              {category.category_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
