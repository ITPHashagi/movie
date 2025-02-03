import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ],
  dataDetail: null,
  cart: [],
};

const findIndexProduct = (cart, maSP) =>
  cart.findIndex((product) => product.maSP === maSP);

const shoppingPhoneSlice = createSlice({
  name: "shoppingPhoneSlice",
  initialState,
  reducers: {
    setDataDetail: (state, action) => {
      //   Cập nhật lại state => dataDetail
      state.dataDetail = action.payload;
    },

    setAddToCart: (state, action) => {
      const data = action.payload;
      const productAddToCard = {
        maSP: data.maSP,
        hinhAnh: data.hinhAnh,
        tenSP: data.tenSP,
        soLuong: 1,
        giaBan: data.giaBan,
      };

      //   Tạo mảng mới
      const newCart = [...state.cart];

      const index = findIndexProduct(newCart, productAddToCard.maSP);

      if (index !== -1) {
        newCart[index].soLuong += 1;
      } else {
        newCart.push(productAddToCard);
      }
      state.cart = newCart;
    },

    setUpdateQty: (state, action) => {
      const { maSP, status } = action.payload;
      const index = findIndexProduct(state.cart, maSP);

      if (index !== -1) {
        const newCart = [...state.cart];
        if (status) {
          newCart[index].soLuong += 1;
        } else {
          if (newCart[index].soLuong > 1) {
            newCart[index].soLuong -= 1;
          } else {
            newCart.splice(index, 1);
          }
        }
        // Cập nhật lại state cart
        state.cart = newCart;
      }
    },
  },
});

export const { setDataDetail, setAddToCart, setUpdateQty } =
  shoppingPhoneSlice.actions;

export default shoppingPhoneSlice.reducer;
