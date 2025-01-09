import React, { useState } from "react";
import Product from "./product";
import ProductDetail from "./ProductDetail";
import Cart from "./cart";
import { useSelector } from "react-redux";

export default function ShoppingPhone() {
  const props = useSelector((state) => state.shoppingPhoneReducer);
  const { data } = props;

  const { dataDetail } = props;

  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-lg font-bold mb-4">Danh sách sản phẩm</h1>

      {/* Giỏ hàng */}
      <Cart />

      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => {
          return <Product key={item.maSP} product={item} />;
        })}
      </div>

      {dataDetail != null && dataDetail != undefined && (
        <>
          <h2 className="text-lg font-bold mt-8 mb-4">Thông số kỹ thuật</h2>
          <ProductDetail />
        </>
      )}
    </div>
  );
}
