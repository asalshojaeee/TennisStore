import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import displayCurrency from "../helpers/displayCurrency";

function RecommandedProduct({ category, brandName, id }) {
  const [recommandedProduct, setRecommandedProduct] = useState([]);
  const [currentImage, setCurrentImage] = useState({})

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
      <h2 className="text-blue-300 font-bold text-xl">
        Recommanded Products
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 ">



        {recommandedProduct.map((pro, index) => {
          return (
            <Link to={`/product/${pro?._id}`}>
              <div className="cart-body  bg-gray-50 cursor-pointer hover:translate-y-0.5 transition-all h-full w-full flex-col  p-5 rounded-xl">
                <img
                  src={pro.productImage[0]}
                  alt=""
                  className="bg-transparent mix-blend-multiply h-56 rounded-xl object-contain w-full hover:scale-120 transition-all"
                />

                {/* <div className="flex justify-center gap-2 mt-3">
              {pro.productImage.map((img, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setCurrentImage(prev => ({
                      ...prev,
                      [pro._id]: i,
                    }))
                  }
                  className={`cursor-pointer w-2 h-2 rounded-full ${
                    (currentImage[pro._id] || 0) === i
                      ? "bg-blue-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div> */}

                <div className="text-gray-400 ">
                  <p className="">
                    {pro?.brandName}
                  </p>
                  <p className="">
                    {displayCurrency(pro?.price)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  )
}
export default RecommandedProduct