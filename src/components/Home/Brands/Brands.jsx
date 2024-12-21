import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import BrandsLogoCarousel from "./BrandsLogoCarousel";
import { cn } from "@/lib/utils";

export default function Brands({ className }) {
  return (
    <div className={cn("bg-light-blue-500 pb-20 pt-12 text-white", className)}>
      <ResponsiveContainer>
        <div className="text-center">
          <h3 className="text-5xl font-bold">Our Partners</h3>
          {/* <p className="mt-5 text-lg text-white/85">
            You would need to build an on-grid, off-grid, or hybrid solar
            system, EV charging including the following:
          </p> */}
        </div>

        <BrandsLogoCarousel />
      </ResponsiveContainer>
    </div>
  );
}
