import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Products from "@/components/Products";
import Collection from "@/components/Collection";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProduct, newProducts, collectionProduct }) {
  return <div className="w-full px-2 md:px-4">
    <Hero product={featuredProduct} />
    <hr class="my-4 h-px border-0 bg-gray-300" />
    <Products products={newProducts} />
    <hr class="my-4 h-px border-0 bg-gray-300" />
    <Collection product={collectionProduct} />
  </div>
}


export async function getServerSideProps() {
  await mongooseConnect();

  const featuredId = '66419f347e2ffc230b0d5fae'
  const collectionId = '6641a5077e2ffc230b0d6046'
  const featuredProduct = await Product.findById(featuredId);
  const collectionProduct = await Product.findById(collectionId)

  const newProducts = await Product.find({},null,{sort:{'_id':1}, limit:5})


  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      collectionProduct: JSON.parse(JSON.stringify(collectionProduct)),
    }
  }
}
