"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductPage({ onAdd }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  if (status === "loading")
    return <p className="text-center mt-20">Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price }),
    });

    if (res.ok) {
      const newProduct = await res.json();
      alert("Product added!");
      setName("");
      setDescription("");
      setPrice("");
      if (onAdd) onAdd(newProduct);
      router.push("/products");
    } else {
      const data = await res.json();
      alert("Error: " + data.message);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">
              Product Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Price ($)</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              type="number"
              min="0"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
