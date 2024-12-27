import { useState } from "react";
import logo from "@/assets/logos/logo.png";
import { allItems } from "@/constants/items";
import { HeaderBottom } from "./HeaderBottom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function Header() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="z-[99999] w-full">
      <div className="bg-amazon_blue flex w-full items-center gap-4 px-4 py-3 text-white">
        {/* ============ Image Start here ================ */}
        <div className="headerHover">
          <img className="mt-2 w-24" src={logo} alt="logo" />
        </div>
        {/* ============ Image End here ================== */}

        {/* ============ Search Start here =============== */}
        <div className="relative flex h-10 flex-grow rounded-md">
          <span
            onClick={() => setShowAll(!showAll)}
            className="text-amazon_blue font-titleFont flex h-full w-14 cursor-pointer items-center justify-center rounded-bl-md rounded-tl-md border-2 bg-gray-200 text-sm duration-300 hover:bg-gray-300"
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="border-amazon_blue absolute left-0 top-10 z-50 flex h-80 w-56 flex-col gap-1 overflow-x-hidden overflow-y-scroll border-[1px] bg-white p-2 text-black">
                {allItems.map((item) => (
                  <li
                    className="font-titleFont hover:border-b-amazon_blue cursor-pointer border-b-[1px] border-b-transparent text-sm tracking-wide duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="text-amazon_blue h-full flex-grow border-none px-2 text-base outline-none"
            type="text"
          />
          <span className="bg-amazon_yellow text-amazon_blue flex h-full w-12 cursor-pointer items-center justify-center rounded-br-md rounded-tr-md duration-300 hover:bg-[#f3a847]">
            <SearchIcon />
          </span>
        </div>
        {/* ============ Search End here ================= */}
        {/* ============ Signin Start here =============== */}

        <div className="headerHover flex flex-col items-start justify-center">
          <p className="text-lightText text-xs font-light">Hello, sign in</p>
          <p className="text-whiteText -mt-1 text-sm font-semibold">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
        {/* ============ Signin End here ================= */}

        {/* ============ Cart Start here ================= */}
        <div className="headerHover relative flex items-start justify-center">
          <ShoppingCartIcon />
          <p className="text-whiteText mt-3 text-xs font-semibold">
            Cart{" "}
            <span className="text-amazon_blue absolute -top-1 left-6 flex h-4 items-center justify-center rounded-full bg-[#f3a847] p-1 text-xs font-semibold">
              0
            </span>
          </p>
        </div>
        {/* ============ Cart End here =================== */}
      </div>
      <HeaderBottom />
    </div>
  );
}
