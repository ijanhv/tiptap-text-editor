"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F4ED]">
      <div className="">
        <Navigation />

        <div className="py-16 text-center">
          <div className="inline-flex mx-auto max-w-7xl sm:px-6 lg:px-8 items-center px-4 py-1 mb-6 bg-[#FDD291] text-black border-none rounded-full transition-transform hover:translate-y-[-2px] ">
            <Users className="h-4 w-4 mr-2" />
            Join thousands of brands achieving more with us
          </div>

          <h1 className="relative mx-auto max-w-7xl px-4 sm:px-6 font-semibold lg:px-8 font-bric text-5xl md:text-7xl tracking-tight mb-6 transition-transform hover:translate-y-[-2px]">
            <span className="text-black">Capture Attention,</span>
            <br />
            <span className="text-black">Transform Your Brand</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto ">
            Drive growth with powerful video storytelling from our team of
            creative media experts. Let ViviMedia elevate your brand{"'"}s
            story.
          </p>

          <div className="concave-rectangle relative overflow-hidden">
            <span>
              <Gallery />
            </span>
          </div>

          {/* <Gallery /> */}

          {/* <Gallery /> */}

          <div className="inline-block">
            <div className="p-2 rounded-full border-2 border-dashed border-[#FF7B6C]">
              <Button
                size="lg"
                className="rounded-full shadow-none bg-[#FF7B6C] text-white py-7 px-8 text-lg transition-all duration-300 hover:translate-y-[-4px] active:translate-y-[0px]"
              >
                Join 10,0000+ Users
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export function Navigation() {
  return (
    <nav className="flex mx-auto max-w-7xl  items-center justify-between py-6">
      <div className="flex items-center space-x-2 text-black transition-transform hover:translate-y-[-2px]">
        <span className="text-xl font-bold ">ViviMedia</span>
      </div>
      <div className="hidden md:flex items-center gap-8 ml-24">
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Portfolio</NavLink>
        <NavLink href="#">Clients</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          className="transition-transform rounded-full border border-gray-800 text-gray-800 px-8 hover:translate-y-[-2px] active:translate-y-[0px]"
        >
          Login
        </Button>
        <Button className="transition-all px-6 bg-gray-800 text-white rounded-full hover:translate-y-[-2px] active:translate-y-[0px]">
          Get Started
        </Button>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-gray-800 transition-all",
        "hover:text-primary hover:translate-y-[-2px]",
        "active:translate-y-[0px]"
      )}
    >
      {children}
    </Link>
  );
}
