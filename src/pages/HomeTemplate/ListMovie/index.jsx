import { useEffect } from "react";
import Movie from "./movie";
import { axios } from "axios";

export default function ListMovie() {
  const fetchListMovie = async () => {
    try {
      const result = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04",
        method: "GET",
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchListMovie();
  }, []);
  return (
    <div className="container mx-auto">
      <h1>list movie</h1>
      <div className="grid grid-cols-4 gap-5">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}
