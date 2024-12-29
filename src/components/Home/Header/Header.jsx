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
    <div style={{ zIndex: 99999 }} className="relative w-full">
      <div className="flex w-full items-center gap-4 bg-dark-blue-500 px-4 py-3 text-white">
        {/* ============ Image Start here ================ */}
        <div className="headerHover">
          <img className="mt-2 w-24" src={logo} alt="logo" />
        </div>
        {/* ============ Image End here ================== */}

        {/* ============ Search Start here =============== */}
        <div className="relative flex h-10 flex-grow rounded-md">
          <span
            onClick={() => setShowAll(!showAll)}
            className="font-titleFont flex h-full w-14 cursor-pointer items-center justify-center rounded-bl-md rounded-tl-md border-2 bg-gray-200 text-sm text-dark-blue-500 duration-300 hover:bg-gray-300"
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute left-0 top-10 z-50 flex h-80 w-56 flex-col gap-1 overflow-x-hidden overflow-y-scroll border-[1px] border-dark-blue-500 bg-white p-2 text-black">
                {allItems.map((item) => (
                  <li
                    className="font-titleFont cursor-pointer border-b-[1px] border-b-transparent text-sm tracking-wide duration-200 hover:border-b-dark-blue-500"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full flex-grow border-none px-2 text-base text-dark-blue-500 outline-none"
            type="text"
          />
          <span className="flex h-full w-12 cursor-pointer items-center justify-center rounded-br-md rounded-tr-md bg-primary-button-gradient text-white duration-300">
            <SearchIcon />
          </span>
        </div>
        {/* ============ Search End here ================= */}
        {/* ============ Signin Start here =============== */}

        <div className="headerHover flex flex-col items-start justify-center">
          <p className="text-xs font-light text-lightText">Hello, sign in</p>
          <p className="-mt-1 text-sm font-semibold text-whiteText">
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
          <p className="mt-3 text-xs font-semibold text-whiteText">
            Cart{" "}
            <span className="absolute -top-1 left-6 flex h-4 items-center justify-center rounded-full bg-[#f3a847] p-1 text-xs font-semibold text-dark-blue-500">
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
