import Image from "next/image";
import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <Image
        src="https://links.papareact.com/dyz"
        width={1600}
        height={250}
        alt="ad"
        className="md:col-span-full"
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
