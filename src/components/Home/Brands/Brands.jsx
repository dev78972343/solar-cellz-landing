import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import BrandsLogoCarousel from "./BrandsLogoCarousel";
import { cn } from "@/lib/utils";

export default function Brands({ className }) {
  return (
    <div className={cn(className, "bg-gray-100")}>
      <ResponsiveContainer>
        <div className="py-10 flex md:flex-row flex-col gap-8 items-center">
          <h3 className="text-2xl font-bold text-gray-800">Liquidity Supported by</h3>
         <BrandsLogoCarousel />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
