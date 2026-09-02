import React from "react";
import ProductDetail from "@/app/flour-mills/[slug]/page";

export default function NeomaticPage() {
  return <ProductDetail params={Promise.resolve({ slug: "neomatic" })} />;
}
