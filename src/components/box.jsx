import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Bogette from '../assets/bogette.png'

export const Box = ({ item }) => {
  const [like, setLike] = useState(false);
  const likeCodes = () => {
    setLike((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-col w-full max-w-[350px] bg-white rounded-[30px]">
        <div className="flex relative flex-col">
          <button
            onClick={likeCodes}
            className="absolute top-[10px] right-[10px] bg-white w-10 h-10 flex justify-center items-center rounded-full text-[#704A24] font-[600] text-[20px]"
          >
            {like ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </button>
          <img className="w-full h-full  object-cover" src={item?.image} alt="" />
          <Link to={""}>
            <button className="absolute bottom-[10px] right-[10px] bg-white px-[15px] py-[6px] rounded-[30px]">
              Add to Cart <i></i>
            </button>
          </Link>
        </div>
        <div className="flex flex-col max-w-[300px] w-full mx-auto">
          <div className="flex w-full justify-between mb-1 mt-4">
            <p>{item?.category} (grade:{item?.stars})</p>
            <p>${item?.price}</p>
          </div>
          <div className="flex gap-1 mb-4">
            <i className="fa-solid fa-star text-[#FBA651]"></i>
            <i className="fa-solid fa-star text-[#FBA651]"></i>
            <i className="fa-solid fa-star text-[#FBA651]"></i>
            <i className="fa-solid fa-star text-[#FBA651]"></i>
            <i className="fa-solid fa-star text-[#FBA651]"></i>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};