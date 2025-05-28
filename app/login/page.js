"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin"); // Redirect to admin dashboard
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#333] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#2d2d2d]/80 backdrop-blur-sm rounded-2xl shadow-lg p-10 max-w-md w-full"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/misterbarber.jpg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>

        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text mb-8">
          Admin Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-6 text-center font-semibold">
            {error}
          </p>
        )}

        <label
          htmlFor="email"
          className="block text-gray-300 font-semibold mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label
          htmlFor="password"
          className="block text-gray-300 font-semibold mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          className="w-full mb-8 px-4 py-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-black font-bold bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
