
import ProductNav from "../../components/ProductNav";
import ProductCard from "../../components/ProductCard";
import ProductSidebar from "../../components/ProductSidebar";
import Pagination from "../../components/Pagination";


const Products = () => {

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ProductNav />
      <div className=" grid grid-cols-3 gap-7">
        <div className="left_side col-span-1 hidden lg:block">
          <ProductSidebar />
        </div>
        <div className="col-span-3 lg:col-span-2 flex flex-col gap-7">
          <ProductCard />
          <Pagination/>
        </div>
      </div>
    </main>
  );
};

export default Products;
