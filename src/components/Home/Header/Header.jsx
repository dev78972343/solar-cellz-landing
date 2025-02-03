import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logos/SolarCellz-logo.svg";
import smLogo from "@/assets/logos/sm-logo.png";
import { HeaderBottom } from "./HeaderBottom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export default function Header() {
  const { t } = useTranslation();
  const navData = t("navbar", { returnObjects: true });
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
      <div className="bg-dark-blue-500">
        <ResponsiveContainer classes="px-2">
      <div className="flex w-full items-center justify-between gap-2 py-3 text-white md:gap-4">
        {/* ============ Image Start here ================ */}
        <a href="/" className="">
        <div className="hidden md:block headerHover">
          <img
            className="mt-2 w-full min-w-24 max-w-48"
            src={logo}
            alt={t("navbar.topnav.logoAltText")}
          />
        </div>
        <img className="md:hidden w-12" src={smLogo} alt={navData.topnav.logoAltText}/>
        </a>
        {/* ============ Image End here ================== */}
        
        {/* ============ Search Start here =============== */}
        <div className="relative flex h-10 grow rounded-md max-w-3xl">
          {/* Dropdown Button */}
          <span
            onClick={() => setShowAll(!showAll)}
            className={cn("flex w-16 cursor-pointer items-center px-1.5 justify-center rounded-bl-md rounded-tl-md bg-gray-100 text-sm text-dark-blue-500 hover:bg-gray-200 duration-200", showAll && "ring-2 ring-primary bg-gray-200")}
          >
            {navData.topnav.search.all}
            <ArrowDropDownOutlinedIcon />
          </span>

         {/* Dropdown Menu */}
          {showAll && (
            <ul
              ref={dropdownRef}
              className="absolute left-0 top-full z-50 mt-1 min-w-60 max-h-80 overflow-y-auto rounded-md border border-gray-300 bg-white p-2 shadow-lg" 
              onWheel={(e) => e.stopPropagation()} 
            >
              {navData.topnav.allmenus.map((item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer rounded-md px-2 py-1 text-sm text-gray-700 hover:bg-slate-100 hover:text-dark-blue-500"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          {/* Search Input */}
          <input
            className="h-full w-full flex-grow border-none px-2 text-base text-dark-blue-500 outline-none focus:ring-2 focus:ring-primary"
            type="text"
            placeholder={navData.topnav.search.placeholder}
          />
          <span className="flex shrink-0 h-full w-10 md:w-12 cursor-pointer items-center justify-center rounded-br-md rounded-tr-md bg-primary-button-gradient text-white duration-300">
            <SearchIcon />
          </span>
        </div>
        {/* ============ Search End here ================= */}

        {/* ============ Signin Start here =============== */}
        <div className="flex items-center gap-2">
          <div className="headerHover hidden flex-col items-start justify-center md:flex">
            <p className="text-xs font-light text-lightText">{navData.topnav.account.hello}, {navData.topnav.account.signin}</p>
            <p className="-mt-1 text-sm font-semibold text-whiteText">
              {navData.topnav.account.title}
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
             {navData.topnav.cart.title}
              <span className="absolute -top-1 left-6 flex h-4 items-center justify-center rounded-full bg-[#f3a847] p-1 text-xs font-semibold text-dark-blue-500">
                0
              </span>
            </p>
          </div>
          {/* ============ Cart End here =================== */}
        </div>
      </div>
      </ResponsiveContainer>
      </div>
      <HeaderBottom />
    </div>
  );
}
