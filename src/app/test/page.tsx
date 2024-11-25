import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  dropdown?: boolean;
}

export default function Component() {
  const navItems: NavItem[] = [
    { label: "Platform", href: "/platform" },
    { label: "Solutions", href: "/solutions", dropdown: true },
    { label: "Community", href: "/community" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="min-h-screen ">
      <Image
        src="/home.png"
        alt="3D Vase"
        fill
        className="object-cover h-full w-full"
        priority
        unoptimized
      />
      <div className="absolute h-full w-full">
        <nav className="container mx-auto px-4 py-4 sticky top-5 ">
          <div className="flex items-center bg-white  p-3 rounded-full px-5 justify-between">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Dazr
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 flex items-center"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-gray-900">
                Login
              </Link>
              <Link
                href="/create"
                className="bg-[#2F178A] text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Create your space
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className=" h-screen w-full">
          <div className="container mx-auto px-4 pt-12 pb-24 md:pt-24 flex items-center justify-center h-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl uppercase  font-dela  text-purple-600 leading-tight">
                  Create Immersive 3D Spaces with Ease
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Our platform offers powerful 3D design tools that let you
                  create visually striking backgrounds and immersive
                  environments for your projects. Whether you{"'"}re designing
                  for gaming, virtual worlds, or creative presentations, we make
                  it easy to bring your vision to life.
                </p>
                {/* <button className="bg-fuchsia-600 text-white px-8 py-3 rounded-full hover:bg-fuchsia-700 transition-colors inline-flex items-center space-x-2">
                  <span className="text-sm">Download free tools</span>
                </button> */}
                <a
                  href="#_"
                  className="relative px-10 py-3 font-medium text-white transition duration-300 bg-fuchsia-600 rounded-lg  inline-flex my-4 ease"
                >
                  <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                      viewBox="0 0 487 487"
                      className="w-auto h-full opacity-100 object-stretch"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                        fill="#FFF"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                      viewBox="0 0 487 487"
                      className="object-cover w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                        fill="#FFF"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative">Download free tools</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
