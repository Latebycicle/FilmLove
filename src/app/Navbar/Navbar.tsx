import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData:FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString();

    if(searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
    
}

export default async function Navbar() {
    const cart = await getCart();

  return (
    <div className=" bg-base-100">
      <div className="max-w-7x1 navbar flex-col gap-1 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="Logo" /> Analogue
            Cameras
          </Link>
        </div>

        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="Search Query"
                placeholder="Search"
                className="min-w-[100] input-bordered input w-full"
              />
            </div>
          </form>
          <ShoppingCartButton cart = {cart}></ShoppingCartButton>
        </div>
      </div>
    </div>
  );
}

/*
        
        <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
      </div>
    </div>*/
