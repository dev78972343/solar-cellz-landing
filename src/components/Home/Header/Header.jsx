import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logos/logo.png";
import { allItems } from "@/constants/items";
import { HeaderBottom } from "./HeaderBottom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function Header() {
  const [showAll, setShowAll] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAll(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full z-40">
      <div className="flex w-full items-center justify-between gap-2 bg-dark-blue-500 px-4 py-3 text-white md:gap-4">
        {/* ============ Image Start here ================ */}
        <div className="headerHover">
          <img
            className="mt-2 w-full min-w-[100px] max-w-48"
            src={logo}
            alt="logo"
          />
        </div>
        {/* ============ Image End here ================== */}

        {/* ============ Search Start here =============== */}
        <div className="relative flex h-10 grow rounded-md max-w-3xl">
          {/* Dropdown Button */}
          <span
            onClick={() => setShowAll(!showAll)}
            className="flex w-14 cursor-pointer items-center px-1.5 justify-center rounded-bl-md rounded-tl-md bg-gray-100 text-sm text-dark-blue-500 hover:bg-gray-200 duration-200"
          >
            All
            <ArrowDropDownOutlinedIcon />
          </span>

         {/* Dropdown Menu */}
          {showAll && (
            <ul
              ref={dropdownRef}
              className="absolute left-0 top-full z-50 mt-1 w-56 max-h-80 overflow-y-auto rounded-md border border-gray-300 bg-white p-2 shadow-lg"
              onClick={(e) => e.stopPropagation()} 
              onWheel={(e) => e.stopPropagation()} 
            >
              {allItems.map((item) => (
                <li
                  key={item._id}
                  className="cursor-pointer rounded-md px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-dark-blue-500"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
          {/* Search Input */}
          <input
            className="h-full w-full flex-grow border-none px-2 text-base text-dark-blue-500 outline-none"
            type="text"
            placeholder="Search..."
          />
          <span className="flex h-full w-12 cursor-pointer items-center justify-center rounded-br-md rounded-tr-md bg-primary-button-gradient text-white duration-300">
            <SearchIcon />
          </span>
        </div>
        {/* ============ Search End here ================= */}

        {/* ============ Signin Start here =============== */}
        <div className="flex items-center gap-2">
          <div className="headerHover hidden flex-col items-start justify-center md:flex">
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
      </div>
      <HeaderBottom />
    </div>
  );
}
