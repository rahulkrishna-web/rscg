import ProductDetail from "@/app/flour-mills/[slug]/page";

export default function DresserPage() {
  return <ProductDetail params={Promise.resolve({ slug: "emery-stone-dresser" })} />;
}
