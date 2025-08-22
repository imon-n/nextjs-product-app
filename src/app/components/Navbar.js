// app/components/Navbar.js
"use client"; // MUST be first line

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow z-50 p-4 flex justify-between items-center">
      <h1 className="font-bold">Fake Product App</h1>
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/products" className="mr-4">Products</Link>

        {/* Conditional Rendering */}
        {status === "authenticated" ? (
          <>
            <Link href="/dashboard/add-product" className="mr-4">Add Product</Link>
            <button onClick={() => signOut()} className="bg-red-400 text-white rounded-2xl px-2 py-1 ">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
