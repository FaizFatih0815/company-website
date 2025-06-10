"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-orange z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-3 font-DM-Serif font-semibold text-xl">
        <Link href="/" className="relative w-[115px] h-[40px]">
          <Image
            src="/Logo.jpg"
            alt="Logo"
            fill
            className="object-contain object-left h-full"
          />
        </Link>

        <nav className="hidden text-xl lg:flex gap-6  items-center">
          <Link href="/about-us" className="hover:text-black">
            About Us
          </Link>
          <Link href="/products" className="hover:text-black">
            Products
          </Link>
          <Link href="/blog" className="hover:text-black">
            Blog List
          </Link>
          <Link href="/teams" className="hover:text-black">
            Teams
          </Link>
          <a href="#CONTACT" className="hover:text-black">
            Contact Us
          </a>

          {user?.role === "admin" && (
            <Link
              href="/create-blog"
              className="hover:text-black font-bold text-orange-700"
            >
              Create Blog
            </Link>
          )}

          {user ? (
            <button
              onClick={logout}
              className="hover:text-black text-red-600 font-semibold ml-4"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="hover:text-black">
              Login
            </Link>
          )}
        </nav>

        <button
          className="lg:hidden text-orange focus:outline-none relative w-[30px] h-[30px]"
          onClick={toggleMenu}
        >
          <Image
            src={isOpen ? "/close.svg" : "/hamburger.svg"}
            alt="Menu Icon"
            fill
            className="object-contain"
          />
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col bg-white px-6 py-4 space-y-3 text-base shadow-md z-40">
          <Link
            href="/about-us"
            onClick={closeMenu}
            className="hover:text-black"
          >
            About Us
          </Link>
          <Link
            href="/products"
            onClick={closeMenu}
            className="hover:text-black"
          >
            Products
          </Link>
          <Link href="/blog" onClick={closeMenu} className="hover:text-black">
            Blog List
          </Link>
          <Link href="/teams" onClick={closeMenu} className="hover:text-black">
            Teams
          </Link>
          <a href="#CONTACT" onClick={closeMenu} className="hover:text-black">
            Contact Us
          </a>

          {user?.role === "admin" && (
            <Link
              href="/create-blog"
              onClick={closeMenu}
              className="hover:text-black font-bold text-orange-700"
            >
              Create Blog
            </Link>
          )}

          {user ? (
            <button
              onClick={() => {
                logout();
                closeMenu();
              }}
              className="hover:text-black text-red-600 font-semibold"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={closeMenu}
              className="hover:text-black"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
