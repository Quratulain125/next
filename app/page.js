"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductsHeader from "@/components/ProductsHeader";
import ProductGrid from "@/components/ProductGrid";
import ButtonGroup from "@/components/ButtonGroup";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar />
      <ProductsHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductGrid searchQuery={searchQuery} />
      <ButtonGroup />
      <Footer />
    </div>
  );
}
