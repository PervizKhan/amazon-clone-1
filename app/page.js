import ProductFeed from "../components/ProductFeed";
import Banner from "../components/Banner";
import Header from "../components/Header";
import fetchData from "../utils/fetchData";

export default async function Home() {
  const data = await fetchData("https://fakestoreapi.com/products");

  return (
    <div>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={data} />
      </main>
    </div>
  );
}
