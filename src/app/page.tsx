import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import prisma from "@/lib/db/prisma";
import Link from "next/link";

export default async function Home() {
  const products = await prisma?.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div>
      <div className="hero mx-auto rounded-xl bg-base-200 xl:max-w-3/4">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={800}
            height={400}
            className="w-full max-w-md rounded-lg xl:shadow-xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              className="btn-primary btn"
              href={"/products/" + products[0].id}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Flexbox begins here */}
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

// <div className="card card-side bg-base-100 shadow-xl">
//   <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
//   <div className="card-body">
//     <h2 className="card-title">New movie is released!</h2>
//     <p>Click the button to watch on Jetflix app.</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Watch</button>
//     </div>
//   </div>
// </div>
