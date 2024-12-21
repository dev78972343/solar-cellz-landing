import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function AnimatedArrow({
  className = "size-[18px]",
  stroke = "#ffffff",
}) {
  return (
    <div className="relative overflow-hidden">
      <ArrowRight
        className={cn(
          "-rotate-45 transition-all duration-300 ease-in-out-circ group-hover:-translate-y-5 group-hover:translate-x-5",
          className,
        )}
        stroke={stroke}
      />

      <ArrowRight
        className={cn(
          "absolute -bottom-5 -left-5 -rotate-45 transition-all duration-300 ease-in-out-circ group-hover:bottom-0 group-hover:left-0",
          className,
        )}
        stroke={stroke}
      />
    </div>
  );
}
