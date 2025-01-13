import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import BrandsLogoCarousel from "./BrandsLogoCarousel";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Brands({ className }) {
  const { t } = useTranslation();
  return (
    <div className={cn(className, "bg-gray-100")}>
      <ResponsiveContainer>
        <div className="py-10 flex md:flex-row flex-col gap-8 items-center">
          <h3 className="text-2xl font-bold text-gray-800">{t("brands.title")}</h3>
         <BrandsLogoCarousel />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
