"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl font-Poppins">
      <nav className="container max-w-[1970px] mx-auto w-[96%] py-5 px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl lg:text-3xl font-extrabold">Insurance</h1>

          <ul className="hidden lg:flex gap-10 text-sm font-semibold">
            <li className="hover:text-blue-700"><Link href="/">Home</Link></li>
            <li className="hover:text-blue-700"><Link href="/insurance_products">Insurance Products</Link></li>
            <li className="hover:text-blue-700"><Link href="/renew_policy">Renew Policy</Link></li>
            <li className="hover:text-blue-700"><Link href="/claim">Claim</Link></li>
            <li className="hover:text-blue-700"><Link href="/supports">Supports</Link></li>
          </ul>

          <button className="hidden lg:block text-base font-bold bg-blue-700 hover:bg-blue-500 duration-200 text-white border-0 rounded-full py-2 px-6">
            Sign in
          </button>

          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {isOpen && (
          <ul className="lg:hidden mt-4 space-y-3 bg-white shadow-lg rounded-lg py-4 px-6">
            <li className="hover:text-blue-700"><Link href="/">Home</Link></li>
            <li className="hover:text-blue-700"><Link href="/insurance_products">Insurance Products</Link></li>
            <li className="hover:text-blue-700"><Link href="/renew_policy">Renew Policy</Link></li>
            <li className="hover:text-blue-700"><Link href="/claim">Claim</Link></li>
            <li className="hover:text-blue-700"><Link href="/supports">Supports</Link></li>
            <li>
              <button className="w-full text-center font-bold bg-blue-700 hover:bg-blue-500 duration-200 text-white border-0 rounded-full py-2 px-6">
                Sign in
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
