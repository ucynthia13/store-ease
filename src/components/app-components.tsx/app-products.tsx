import ProductCard from "./ProductCard";

const ProductsPage = () => {
  return (
    <div className="">
      <h2 className="text-xl opacity-80 my-8">Category Name</h2>
      <div className="grid grid-cols-3 gap-12 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsPage;
