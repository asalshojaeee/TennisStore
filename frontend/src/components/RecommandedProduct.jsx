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

      <div className="relative w-full border rounded-md border-slate-300">

        <button
          onClick={preveSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer"
        >
          <CiCircleChevLeft size={35} className="text-green-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 cursor-pointer"
        >
          <CiCircleChevRight size={35} className="text-green-700" />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${slide * 33.333}%)`,
            }}
          >
            {recommandedProduct.map((pro) => (
              <div
                key={pro._id}
                className="min-w-[33.333%] flex-shrink-0 p-3"
              >
                <Link to={`/product/${pro._id}`}>
                  <div className="cart-body cursor-pointer hover:translate-y-0.5 transition-all rounded-xl h-full">
                    <img
                      src={pro.productImage[0]}
                      alt={pro.productName}
                      className="bg-transparent mix-blend-multiply h-56 w-full object-contain rounded-xl hover:scale-110 transition-all"
                    />

                    <div className="text-gray-400 mt-3">
                      <p>{pro.brandName}</p>
                      <p>{displayCurrency(pro.price)}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
export default RecommandedProduct