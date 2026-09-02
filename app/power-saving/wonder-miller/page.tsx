import React from "react";
import ProductDetail from "@/app/flour-mills/[slug]/page";

export default function WonderMillerPage() {
  // We use the robust ProductDetail component from the flour mills feature, 
  // artificially passing the slug to render the Wonder Miller data.
  // We use Promise.resolve to mock the Next.js App Router params object.
  return <ProductDetail params={Promise.resolve({ slug: "wonder-miller" })} />;
}
