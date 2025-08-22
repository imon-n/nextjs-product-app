import { products } from "@/data/products";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  // Await the params object 
  const awaitedParams = await params; 
  const id = awaitedParams.id;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <p className="text-xl font-semibold text-gray-700">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-2xl font-semibold text-gray-900 mb-6">
          ${product.price}
        </p>

        <Link
          href="/products"
          className="
            inline-block
            bg-gradient-to-r from-blue-500 to-blue-600
            hover:from-blue-600 hover:to-blue-700
            text-white font-semibold
            py-3 px-8
            rounded-full
            shadow-lg
            transform transition-all duration-300
            hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          "
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
