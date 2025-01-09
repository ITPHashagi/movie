import React from "react";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const product = useSelector((state) => state.shoppingPhoneReducer.dataDetail);
  return (
    <div className="flex gap-6">
      <div className="space-y-6">
        <h4 className="text-2xl font-bold">{product.tenSP}</h4>
        <img
          src={product.hinhAnh}
          alt="phone-apple"
          className="w-full h-[300px]"
        />
      </div>
      <div className="space-y-6">
        <h4 className="text-2xl font-bold">Thông số</h4>
        <div className="space-y-6">
          <div className="space-x-24 items-center flex ">
            <p>Màn hình</p>
            <p>{product.manHinh}</p>
          </div>

          <div className="space-x-24 items-center flex">
            <p>Camera trước</p>
            <p>{product.cameraTruoc}</p>
          </div>

          <div className="space-x-24 items-center flex">
            <p>Camera Sau</p>
            <p>{product.cameraSau}</p>
          </div>

          <div className="space-x-24 items-center flex">
            <p>Ram</p>
            <p>{product.ram}</p>
          </div>

          <div className="space-x-24 items-center flex">
            <p>Rom</p>
            <p>{product.rom}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
