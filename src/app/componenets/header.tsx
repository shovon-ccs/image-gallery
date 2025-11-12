"use client";

import React, { useEffect, useState } from "react";
import { SearchIcon } from "./icons";
import { useRouter, useSearchParams } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [searchData, setSearchData] = useState("");
  /*const [isClient, setIsClient] = useState(false);

  // Hydration-safe
  useEffect(() => {
    setIsClient(true);
    setSearchData(params.get("search") || ""); // Initialize from URL
  }, [params]);*/

  // Debounced search navigation (only updates search, preserves category)
  /*useEffect(() => {
    if (!isClient) return;

    const timeout = setTimeout(() => {
      const category = params.get("category"); // preserve current category
      const query = new URLSearchParams();

      if (searchData) query.set("search", searchData);
      if (category) query.set("category", category);

      router.push(`/?${query.toString()}`);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchData, isClient, params, router]);*/
    const [mounted, setMounted] = useState(false);
    // wait until component has mounted on client
    useEffect(() => setMounted(true), []);
      
    useEffect(() => {
      //if (!isClient) return;
      if (!mounted) return; // ⛔ skip SSR mismatches
      const category = params.get("category"); // preserve current category
      if (searchData) {
        router.push(searchData ? `/?search=${searchData}` : '/');
      } else {
        router.push(category?`/?category=${category}`:'/');
      }
    }, [searchData, router]);

  return (
    <div className="flex justify-between items-center gap-2.5">
      <div className="w-full max-w-xl flex justify-center items-center relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchData}               // controlled
          readOnly={!mounted}             // SSR safe
          onChange={mounted ? (e) => setSearchData(e.target.value) : undefined}
          className="inline-block w-full py-2 px-4 pr-8 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-500 rounded"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2">
          <SearchIcon />
        </button>
      </div>

      <button className="px-8 bg-slate-800 text-white text-base uppercase font-bold py-4 rounded-xl hover:bg-slate-700 active:translate-y-0.5 cursor-pointer">
        Upload
      </button>
    </div>
  );
};

export default Header;
