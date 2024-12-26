import { useState } from "react";
import { Box } from "./box";
import data from "../constant/data";

export const Top = () => {
  const [selectedCategory, setSelectedCategory] = useState("Most popular");

  // Filter the data based on the selected category
  const filteredData = data.filter((item) =>
    selectedCategory === "Most popular" ? true : item.category === selectedCategory
  );

  return (
    <>
      <div className="w-full flex flex-col">
        {/* Categories */}
        <div className="flex w-full justify-evenly max-w-[1092px] mt-[30px] mx-auto mb-[40px]">
          {[
            { label: "Most popular", icon: "fa-fire" },
            { label: "Favorites", icon: "fa-heart" },
            { label: "Bread", icon: "fa-bread-slice" },
            { label: "Cookie", icon: "fa-cookie" },
            { label: "Croissant", icon: "fa-bread-slice" },
            { label: "Cupcake", icon: "fa-cake-candles" },
            { label: "Custard pie", icon: "fa-pizza-slice" },
            { label: "Donut", icon: "fa-certificate" },
            { label: "Coffe", icon: "fa-coffee" },
            { label: "Cake", icon: "fa-cake-candles" },
          ].map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:border-b-2 hover:border-[#996531] transition-all duration-500 ease-in-out border-b-2 ${
                selectedCategory === category.label ? "border-[#996531]" : "border-transparent"
              } hover:text-[#996531] flex items-center text-[#1C140C]`}
              onClick={() => setSelectedCategory(category.label)}
            >
              <i className={`fa-solid ${category.icon} mr-2`}></i>
              <p>{category.label}</p>
            </div>
          ))}
        </div>

        {/* Filtered Boxes */}
        <div className="w-full gap-[20px] flex flex-wrap justify-start max-w-[1100px] mx-auto overflow-y-scroll max-h-[78.2vh]">
          {filteredData.map((item, index) => (
            <Box key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
