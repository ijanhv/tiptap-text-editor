"use client";

import { Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

export function Navigation() {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50  backdrop-blur-md mb-10">
      <div className="max-w-3xl border rounded-md mx-auto px-4 sm:px-6 w-full lg:px-8">
        <div className="flex items-center gap-3 w-full h-16">
          <div className="hidden md:block w-full">
            <div className="flex items-center space-x-8 text-center text-sm  w-full">
              <Link
                href="/about"
                className="text-white  w-full hover:text-gray-300"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-white  w-full hover:text-gray-300"
              >
                Blog
              </Link>
              <Link
                href="/services"
                className="text-white  w-full hover:text-gray-300"
              >
                Services
              </Link>
              <Link
                href="/process"
                className="text-white w-full hover:text-gray-300"
              >
                Process
              </Link>
              <div className="relative group">
                <button className="flex items-center text-white  w-full hover:text-gray-300">
                  Pages
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Button className="bg-emerald-600  rounded-xl w-full hover:bg-emerald-600  text-white">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
