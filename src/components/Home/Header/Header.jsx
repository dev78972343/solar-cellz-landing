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
            
            {/* ============ Logo =============== */}
            <a href="/" className="flex items-center">
              <img className="hidden md:block w-full min-w-24 max-w-48 object-contain" src={logo} alt={navData.topnav.logoAltText} />
              <img className="md:hidden w-12 object-contain" src={smLogo} alt={navData.topnav.logoAltText} />
            </a>

            {/* ============ Search Box =============== */}
            <div className="relative flex h-10 grow max-w-3xl rounded-md">
              {/* Dropdown Button */}
              <button
                onClick={() => setShowAll(!showAll)}
                className={cn(
                  "flex w-16 cursor-pointer items-center px-1.5 justify-center rounded-bl-md rounded-tl-md bg-gray-100 text-sm text-dark-blue-500 hover:bg-gray-200 duration-200",
                  showAll && "ring-2 ring-primary bg-gray-200"
                )}
                aria-label="All category"
              >
                {navData.topnav.search.all}
                <ArrowDropDownOutlinedIcon />
              </button>

              {/* Dropdown Menu */}
              {showAll && (
                <ul
                  ref={dropdownRef}
                  className="absolute left-0 top-full z-50 mt-1 flex flex-col gap-0.5 py-2 min-w-60 max-h-80 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg transition-opacity duration-300 ease-in-out"
                  onWheel={(e) => e.stopPropagation()}
                >
                  {navData.topnav.allmenus.map((item, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer px-3 py-1 text-sm md:text-base text-gray-700 hover:bg-slate-100 hover:text-dark-blue-500 transition-colors"
                      onClick={() => setShowAll(false)}
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

              {/* Search Button */}
              <button className="flex shrink-0 h-full w-10 md:w-12 items-center justify-center rounded-br-md rounded-tr-md bg-primary-button-gradient text-white duration-300 hover:opacity-90">
                <SearchIcon />
              </button>
            </div>

            {/* ============ Account & Cart Section =============== */}
            <div className="flex items-center gap-3">
              {/* Sign-in */}
              <div className="headerHover hidden md:flex flex-col items-start">
                <p className="text-xs font-light text-lightText">
                  {navData.topnav.account.hello}, {navData.topnav.account.signin}
                </p>
                <p className="-mt-1 text-sm font-semibold flex items-center gap-1">
                  {navData.topnav.account.title}
                  <ArrowDropDownOutlinedIcon />
                </p>
              </div>

              {/* Cart */}
              <div className="relative flex items-center cursor-pointer p-2 hover:bg-opacity-70 transition duration-200">
                <ShoppingCartIcon />
                <span className="absolute -top-1 left-6 flex h-5 w-5 items-center justify-center rounded-full bg-[#f3a847] text-xs font-semibold text-dark-blue-500">
                  0
                </span>
              </div>
            </div>

          </div>
        </ResponsiveContainer>
      </div>
      <HeaderBottom />
    </div>
  );
}
