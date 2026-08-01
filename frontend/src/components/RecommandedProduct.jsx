import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import displayCurrency from "../helpers/displayCurrency";
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";

function RecommandedProduct({ category, brandName, id }) {
  const [recommandedProduct, setRecommandedProduct] = useState([]);
  const [currentImage, setCurrentImage] = useState({})
  const [slide, setSlide] = useState(0)



  const nextSlide = () => {
    if (slide < recommandedProduct.length - 3) {
      setSlide((prev) => prev + 1);
    }

  }


  const preveSlide = () => {
    if (slide > 0) {
      setSlide((prev) => prev - 1);
    }
  }

  const recommandedProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/getrecommanded?category=${category}&brand=${brandName}&id=${id}`, {
        withCredentials: true,

      }

      );

      setRecommandedProduct(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!category || !brandName || !id) return;

    recommandedProducts();
  }, [category, brandName, id]);

  return (

    <>
      <h2 className="text-blue-300 font-bold text-xl p-5">
        Recommanded Products
      </h2>


      <div className="w-full border rounded-md border-slate-300 relative flex items-center gap-4 md:gap-6">

        <button
          onClick={preveSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
        >
          <CiCircleChevLeft size={35} className="text-green-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
        >
          <CiCircleChevRight size={35} className="text-green-700" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${slide * 33.333}%)`,
            }}
          >
            {recommandedProduct.map((pro) => (
              <Link
                key={pro._id}
                to={`/product/${pro._id}`}
                className="min-w-[33.333%] p-3"
              >
                <div className="cart-body cursor-pointer hover:translate-y-0.5 transition-all h-full p-5 rounded-xl">
                  <img
                    src={pro.productImage[0]}
                    alt=""
                    className="bg-transparent mix-blend-multiply h-56 rounded-xl object-contain w-full hover:scale-110 transition-all"
                  />

                  <div className="text-gray-400 mt-3">
                    <p>{pro.brandName}</p>
                    <p>{displayCurrency(pro.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
export default RecommandedProduct