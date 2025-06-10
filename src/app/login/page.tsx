"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://topdeer-us.backendless.app/api/data/UserMustika?where=email%3D'${email}'%20AND%20password%3D'${password}'`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();

      if (data.length > 0) {
        const user = {
          email: data[0].email,
          role: data[0].role,
        };
        login(user);
        router.push("/");
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-cream font-montserrat text-black pb-15">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <p className="flex justify-center text-center text-[10px] text-gray-400 mb-5">
        For Exam Code <br /> Admin = email : admin@mail.com | password :
        admin123 <br /> User = email : user@mail.com | password : user123
      </p>
      <form onSubmit={handleLogin} className="space-y-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-orange font-montserrat font-bold text-white rounded-lg hover:bg-orange-700"
        >
          Login
        </button>
      </form>
    </section>
  );
}
