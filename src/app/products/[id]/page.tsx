import { notFound } from "next/navigation";
import Image from "next/image";
import PriceTag from "@/components/PriceTag";
import prisma from "@/lib/db/prisma";
import { cache } from "react";
import { Metadata } from "next";
import AddToCart from "./AddToCart";
import { incrementProductQuantity } from "./actions";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma?.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + "Analogue Cameras",
    description: product.description,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt=""
        width={400}
        height={400}
        className="rounded-lg"
        priority
      />

      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
        <AddToCart productId={product.id} incrementProductQuantity={incrementProductQuantity} />
      </div>
    </div>
  );
}
