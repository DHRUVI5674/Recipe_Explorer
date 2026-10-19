"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            CookBook
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/recipes"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Recipes
            </Link>

            {/* Categories */}
            <Link
              href="/recipes/category"
              className="text-sm font-medium text-gray-700 transition hover:text-black"
            >
              Categories
            </Link>
          </nav>

          {/* Desktop Search Button */}
          <Link
            href="/recipes"
            className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:block"
          >
            Search Recipes
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-2">

              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
              >
                Home
              </Link>

              <Link
                href="/recipes"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
              >
                Recipes
              </Link>

              {/* Categories → Category Listing */}
              <Link
                href="/recipes/category"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
              >
                Categories
              </Link>

              <Link
                href="/recipes"
                onClick={closeMenu}
                className="mt-2 rounded-full border border-gray-300 px-4 py-3 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Search Recipes
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}