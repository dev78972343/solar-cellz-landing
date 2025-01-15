import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CanadaFlag,
  FrenchFlag,
  GermanFlag,
  SpanishFlag,
  UnitedStatesFlag,
} from "@/components/svg logos/CountryFlags";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguages } from "@/hook/useLanguage";
import { LANGUAGES } from "@/constants/supported-languages";
import { useTranslation } from "react-i18next";

// Supported Languages
const languages = [
  {
    label: "English",
    value: LANGUAGES.en,
    flag: <UnitedStatesFlag size={20} />,
  },
  {
    label: "Español",
    value: LANGUAGES.es,
    flag: <SpanishFlag size={20} />,
  },
  {
    label: "Français",
    value: LANGUAGES.fr,
    flag: <FrenchFlag size={20} />,
  },
  {
    label: "Deutsch",
    value: LANGUAGES.de,
    flag: <GermanFlag size={20} />,
  }
];

const dropdownMenuItems = [
  {
    key: "partnersProgramMenu",
    labelTrigger: "Partners Program",
    items: [
      {
        key: "1",
        label: "See My Points",
        href: "/#",
      },
      {
        key: "2",
        label: "Program Overview",
        href: "/#",
      },
      {
        key: "3",
        label: "Program Perks",
        href: "/#",
      },
    ],
  },
  {
    key: "myAccountMenu",
    labelTrigger: "My Account",
    items: [
      {
        key: "1",
        label: "Account Dashboard",
        href: "/#",
      },
      {
        key: "2",
        label: "Buy Again",
        href: "/#",
      },
      {
        key: "3",
        label: "My Orders",
        href: "/#",
      },
    ],
  },
];

const staticMenuItem = [
  {
    label: "Find a Branch",
    href: "/#",
  },
  {
    label: "List",
    href: "/#",
  },
  {
    label: "Events",
    href: "/#",
  },
  {
    label: "Careers",
    href: "/#",
  },
  {
    label: "Contact Us",
    href: "/#",
  },
];

export default function TopNavMenu() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(null); // change language
  const { currentLanguage, changeLanguage } = useLanguages();

  // Find currently selected language
  useEffect(() => {
    if (!currentLanguage) return;

    const language = languages.find(
      (language) => language.value === currentLanguage,
    );
    if (language) setSelectedLanguage(language);
  }, [currentLanguage]);

  return (
    <div className="mt-0.5 flex-center flex-wrap gap-5">
      <button className="hidden sm:block">{t("navbar.bottomnav.btn")}</button>
      <NavigationMenu className="mr-8 sm:mr-0">
        <NavigationMenuList>
          {/* Language Switcher */}
           <NavigationMenuItem>
            <NavigationMenuTrigger className="flex-center-start w-max gap-x-2">
              {selectedLanguage?.flag}
              <span>{selectedLanguage?.label}</span>
            </NavigationMenuTrigger>

            <NavigationMenuContent className="w-fit sm:!min-w-[200px] space-y-1 p-3">
              {languages.map((language, idx) => (
                <button
                  key={idx}
                  className="flex-center-start text-nowrap w-full gap-x-2 rounded p-1 text-base hover:bg-slate-100"
                  onClick={() => changeLanguage(language?.value)}
                >
                  {language.flag}
                  <span>{t(`navbar.bottomnav.language.${idx}`)}</span>
                </button>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Partners Program + My Account */}
          <div className="hidden sm:flex items-center flex-wrap gap-5">
          {dropdownMenuItems.map((menuItem, pIdx) => (
            <NavigationMenuItem key={pIdx}>
              <NavigationMenuTrigger>
                {t(`navbar.bottomnav.dropdownitems.${pIdx}.title`)}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!min-w-[200px] space-y-1 p-3 text-base">
                {menuItem?.items?.map((item, cIdx) => (
                  <Link
                    key={cIdx}
                    to={item.href}
                    className="flex-center-start w-full gap-x-2 rounded p-1 hover:bg-slate-100"
                  >
                    {t(`navbar.bottomnav.dropdownitems.${pIdx}.items.${cIdx}`)}
                  </Link>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
          </div>
        </NavigationMenuList>
      </NavigationMenu>

<div className="hidden lg:flex items-center gap-5 ">
      {/* Static Menu Items */}
      {staticMenuItem.map((item, idx) => (
        <Link key={idx} to={item.href}>
          {t(`navbar.bottomnav.links.${idx}`)}
        </Link>
      ))}
    </div>
    </div>
  );
}
