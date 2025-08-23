"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
