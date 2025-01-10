import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import { menuData } from "@/constants/menu-data";
import CloseIcon from "@mui/icons-material/Close";
import { SideNavContent } from "./SideNavContent";
import { useEffect, useRef, useState } from "react";
import { NestedSideNavContent } from "./NestedSideNavContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

export function HeaderBottom() {
  const ref = useRef();
  const [sidebar, setSidebar] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);

  return (
    <div className="bg-dark-blue-400">
    <ResponsiveContainer classes="px-2">
    <div className="flex h-[36px] w-full items-center text-white">
      <ul className="flex items-center gap-4 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="headerHover flex items-center gap-1 cursor-pointer"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover cursor-pointer">Enable Accessibility</li>
        <li className="headerHover cursor-pointer">Find a Branch</li>
        <li className="headerHover cursor-pointer hidden sm:block">List</li>
        <li className="headerHover cursor-pointer hidden sm:block">Event</li>
      </ul>

      {sidebar && (
        <div className="fixed left-0 top-0 h-screen w-full bg-amazon_blue bg-opacity-50 text-black">
          <div className="relative h-full w-full">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-full w-[300px] md:w-[350px] border border-black bg-white"
            >
              <div className="flex w-full items-center gap-4 bg-dark-blue-400 px-6 py-2 text-white">
                <AccountCircleIcon />
                <h3 className="font-titleFont text-lg font-bold tracking-wide">
                  Hello, Sign In
                </h3>
              </div>

              {!activeMenu &&
                menuData.map((menu) => (
                  <SideNavContent
                    key={menu.title}
                    title={menu.title}
                    items={menu.items}
                    setActiveMenu={setActiveMenu}
                  />
                ))}

              {activeMenu &&
                menuData.map((menu) =>
                  menu.items
                    .filter((item) => item.label === activeMenu)
                    .map((subMenu) => (
                      <NestedSideNavContent
                        key={subMenu.label}
                        title={subMenu.label}
                        items={subMenu.subItems}
                        setActiveMenu={setActiveMenu}
                      />
                    )),
                )}

              <span
                onClick={() => setSidebar(false)}
                className="absolute -right-12 top-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border-2 bg-transparent text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
    </ResponsiveContainer>
    </div>
  );
}
