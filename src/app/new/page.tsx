"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { Star } from "lucide-react";
import { AnimatedTooltipPreview } from "@/components/tooltip";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen relative bg-gradient-to-b from-black to-emerald-700/40">
      <Navigation />

      {/* <AuroraBackground> */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 pt-44 items-center justify-center px-4"
      >
        <Testimonials />
        <h1 className="text-6xl md:text-7xl font-mont text-center font-semibold text-white max-w-5xl mb-5    mx-auto leading-tight">
          Unlock Your Brand{"'"}s{" "}
          <span className="italic font-instrumentSerif font-normal tracking-wide">
            Potential
          </span>{" "}
          with Expert Marketing
        </h1>

        <p className="text-gray-300 text-center text-xl max-w-2xl mx-auto">
          Harness the power of precision-driven advertising to build awareness,
          drive engagement, and boost your brand’s success.
        </p>
        <div className="flex items-center mt-10 justify-center gap-4">
          <Button
            size="lg"
            className="bg-emerald-600 rounded-xl text-base hover:bg-emerald-600 text-white px-8 py-7"
          >
            Schedule a Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 border bg-white  text-base text-black py-7 px-8 rounded-xl"
          >
            Discover More
          </Button>
        </div>
      </motion.div>
      {/* </AuroraBackground> */}
    </main>
  );
}

export function Testimonials() {
  return (
    <div className="mb-8">
      <AnimatedTooltipPreview />
      <div className="flex items-center justify-center text-yellow-400 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm text-gray-300">
        Trusted by over 300 successful brands
      </p>
    </div>
  );
}
