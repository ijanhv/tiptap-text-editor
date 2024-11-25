import React from "react";
import { Button } from "@/components/ui/button";

import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pb-10 bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bric font-bold text-black leading-tight mb-6">
              Empowering You,
              <br />
              Every Step
              <span className="inline-block w-4 h-4 bg-[#CCFF00] rounded-full ml-2" />
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Join FitLife for the support, tools, and inspiration you need to
              reach your fitness and wellness goals. Let’s make healthy living
              accessible to everyone.
            </p>

            <div className="flex flex-col gap-8">
              <Button className="bg-black text-white rounded-full w-fit px-8 py-6 text-lg">
                Start Your Journey
                <span className="ml-2">→</span>
              </Button>

              <DownloadCard />
            </div>
          </div>

          <div className="relative">
            <div className="relative -left-36 -bottom-24 z-30 h-[800px]">
              <Image
                src="/women.png"
                alt="Fitness Woman"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="absolute -right-4 top-12 bg-[#CCFF00] p-8 rounded-3xl">
              <div className="max-w-[300px]">
                <div className="">
                  <p className="font-semibold mb-2 text-2xl text-black">
                    Available on iOS and Android
                  </p>
                  <Button variant="default" className="rounded-full">
                    Get the App →
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute flex flex-col gap-20 bottom-20 left-20 h-[200px] items-center justify-center max-w-[530px] pl-36 w-full bg-gray-100 p-6 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4">
                <Button
                  variant="default"
                  size="icon"
                  className="bg-[#CCFF00] hover:bg-[#CCFF00] text-black rounded-full h-12 w-12"
                >
                  <Play className="h-6 w-6" />
                </Button>
                <div className="text-black font-bric">
                  <h3 className="text-3xl font-bold">50+ Workout Videos</h3>
                  <p>Curated for All Levels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[44px] bg-black text-white rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              number="10"
              description="years of expertise in fitness and wellness"
            />
            <StatsCard
              number="75"
              description="Local offices to support you globally"
            />
            <StatsCard number="2000" description="New members joining daily" />
            <StatsCard
              number="300k+"
              description="Total app downloads worldwide"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export function DownloadCard() {
  return (
    <div className="bg-black text-white p-8 rounded-3xl flex flex-col gap-4 max-w-lg">
      <div className="flex items-center gap-3">
        <div className="w-32 h-24  relative overflow-hidden">
          <Image
            src="https://cdn.vectorstock.com/i/2000v/23/67/qr-code-the-white-color-icon-vector-15662367.webp"
            alt="QR Code"
            fill
            unoptimized
            className="object-contain scale-125"
          />
        </div>
        <div className="">
          <h3 className="text-2xl font-bold mb-2 font-bric">Get FitLife App</h3>
          <p className="text-gray-400 mb-4">
            Scan to download, and enjoy 3 months of free access!
          </p>
        </div>

        <span className="bg-[#CCFF00] h-16 w-24 flex items-center justify-center hover:bg-[#CCFF00] text-black rounded-full ">
          <ArrowRight size={30} />
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-3xl font-bold font-bric">300k+</div>
          <div className="text-gray-400 text-sm">Happy Users</div>
        </div>
        <div>
          <div className="text-3xl font-bold font-bric">150</div>
          <div className="text-gray-400 text-sm">Certified Trainers</div>
        </div>
        <div className="flex -space-x-2">
          <div className="h-16 w-16 relative">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              alt="Trainer"
              fill
              unoptimized
              className="rounded-full object-cover border-2 border-black"
            />
          </div>
          <div className="h-16 w-16 relative">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Trainer"
              fill
              unoptimized
              className="rounded-full object-cover border-2 border-black"
            />
          </div>
          <div className="h-16 w-16 relative">
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Trainer"
              fill
              unoptimized
              className="rounded-full object-cover border-2 border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="flex items-center text-black justify-between py-6 max-w-7xl mx-auto px-4">
      <Link href="/" className="flex items-end">
        <span className="text-2xl font-bold">FitLife</span>
        <span className="bg-[#CCFF00] h-2 w-2 rounded-full mb-2"></span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-600 transition-colors">
          About
        </Link>
        <Link
          href="/features"
          className="hover:text-gray-600 transition-colors"
        >
          Features
        </Link>
        <Link
          href="/download"
          className="hover:text-gray-600 transition-colors"
        >
          Download
        </Link>
        <Link href="/pricing" className="hover:text-gray-600 transition-colors">
          Pricing
        </Link>
      </div>

      <Button
        variant="default"
        className="bg-black text-white rounded-full px-6"
      >
        Contact Us
      </Button>
    </nav>
  );
}

interface StatsCardProps {
  number: string;
  description: string;
}

export function StatsCard({ number, description }: StatsCardProps) {
  return (
    <div className="flex flex-col">
      <span className="text-5xl font-bold mb-2 font-bric">{number}</span>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}
