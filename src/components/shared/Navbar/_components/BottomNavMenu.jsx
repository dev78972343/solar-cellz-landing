import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import CustomNavSubMenu from "@/components/CustomNavSubMenu/CustomNavSubMenu";
import { Link } from "react-router-dom";
import { menuItems } from "../navigation-menu-links/nav-menu-links";

export default function BottomNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="relative flex-wrap gap-5">
        {menuItems?.map((menuItem) => (
          <NavigationMenuItem key={menuItem?.key} className="!relative">
            <NavigationMenuTrigger className="max-w-[250px]">
              {menuItem.labelTrigger}
            </NavigationMenuTrigger>

            {/* Show nav sub menu on hover if subItems exist, or just show the link */}
            <NavigationMenuContent className="relative !min-w-[270px] space-y-1 p-2">
              {menuItem?.items?.map((item) => (
                <>
                  {item.subItems ? (
                    <CustomNavSubMenu item={item} subItems={item.subItems} />
                  ) : (
                    <Link
                      key={item.key}
                      to={item.href}
                      className="flex-center-start w-full gap-x-2 rounded px-3 py-2 text-base font-medium hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  )}
                </>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
