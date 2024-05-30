"use client";

import Navbar from "@components/navbar/navbar";
import Hero from "./components/hero/hero";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="bg-[#21272F] overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
