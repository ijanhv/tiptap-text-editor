"use client";
import React from "react";
import { Navbar } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserGroup } from "@/components/user-group";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-[#F8F6D1]">
      <Navbar />

      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col h-full lg:flex-row items-center gap-12 py-16 lg:space-y-0 space-y-8">
          {/* Right Section: Circle and Image */}
          <div className="flex-1 w-full lg:order-2 relative flex items-center justify-center lg:justify-end">
            <div className="absolute right-0 bottom-0  h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px] rounded-full bg-[#1A0098] z-10" />
            <div className="relative z-20 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] lg:h-[600px] lg:w-[600px]">
              <Image
                alt="Avaana platform image"
                src="/image.png"
                fill
                unoptimized
                className="h-full w-full object-contain "
              />
            </div>
          </div>

          {/* Divider for larger screens */}
          <div className="hidden lg:block absolute right-1/2 mt-6 border-black border-[0.5px] h-screen" />

          {/* Left Section */}
          <div className="flex-1 lg:order-1 space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold leading-tight">
              Build a global experience that customers love
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              Empower your business to craft seamless, localized experiences
              that delight international customers with Avaana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 rounded-full relative max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full py-4 sm:py-6 border-slate-900"
              />
              <Button
                size="lg"
                className="bg-[#1A0098] h-full sm:absolute sm:right-0 rounded-full hover:bg-blue-700 text-white"
              >
                Get started
              </Button>
            </div>

            <div className="space-y-2">
              <UserGroup />
              <div className="flex items-center gap-2">
                <p className="font-semibold">14,000+ Users</p>
                <p className="text-gray-600">are building with Avaana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
