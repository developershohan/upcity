import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../features/product/ProductSlice";
import { useEffect } from "react";
import { getProduct } from "../features/product/ProductApiSlice";
import {Link} from "react-router-dom"

export default function ProductCard() {
  const dispatch = useDispatch();
  const { products } = useSelector(productSelector);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="bg-white">
      <div className="">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.thumbnail}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <div >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </div>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
