"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80  border-b border-black backdrop-blur-sm h-16">
      <div className="max-w-7xl mx-auto w-full py-4">
        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center ">
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <Link
                  href="#"
                  className="hover:text-gray-600 transition-colors"
                >
                  Product
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-600 transition-colors"
                >
                  Learn
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-600 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 mr-32">
            <Link href="/" className="text-2xl font-semibold font-syne">
              avaana
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden px-5 bg-transparent border-black md:inline-flex rounded-full"
            >
              Log in
            </Button>
            <Button className="bg-black text-white px-5 hover:bg-black/90 rounded-full">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
