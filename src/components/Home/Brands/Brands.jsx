import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import BrandsLogoCarousel from "./BrandsLogoCarousel";
import { cn } from "@/lib/utils";

export default function Brands({ className }) {
  return (
    <div className={cn(className)}>
      <ResponsiveContainer>
        <div className="flex md:flex-row flex-col gap-6 items-center">
          <h3 className="text-2xl font-bold text-black-600">Liquidity Supported by:</h3>
         <BrandsLogoCarousel />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
