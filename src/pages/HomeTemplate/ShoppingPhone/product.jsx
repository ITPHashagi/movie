import React from "react";
import { setDataDetail, setAddToCart } from "./slice.js";
import { useDispatch } from "react-redux";

export default function Product({
  product,
  // handleViewDataDetail,
  // onClickAddToCart,
}) {
  const dispatch = useDispatch();

  return (
    <div className="w-full border border-input rounded-lg p-6 space-y-4">
      <img
        src={product.hinhAnh}
        alt="phone-apple"
        className="w-full h-[250px] object-cover"
      />
      <h3 className="text-lg font-semibold">{product.tenSP}</h3>
      <button
        onClick={() => {
          // handleViewDataDetail(product);
          dispatch(setDataDetail(product));
        }}
        className="p-3 rounded-lg text-white bg-green-500"
      >
        Xem chi tiết
      </button>
      <button
        onClick={() => {
          dispatch(setAddToCart(product));
        }}
        className="p-3 rounded-lg text-white bg-red-500 ml-2"
      >
        Thêm giỏ hàng
      </button>
    </div>
  );
}
