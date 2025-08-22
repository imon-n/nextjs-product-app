"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-8 lg:px-16 py-16 bg-gray-100 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              <Link
                href={`/products/${product.id}`}
                className="text-blue-500 font-medium hover:text-blue-600 transition-colors"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
