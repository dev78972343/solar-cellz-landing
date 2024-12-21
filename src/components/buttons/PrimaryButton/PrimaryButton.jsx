import AnimatedArrow from "@/components/AnimatedArrow/AnimatedArrow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PrimaryButton({
  children,
  className,
  icon,
  arrow = false,
}) {
  return (
    <Button
      className={cn(
        "h-12 rounded-lg border-[2px] border-black bg-primary-button-gradient px-7 font-dmSans text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-[0.98] hover:border-transparent hover:ring-2 hover:ring-normal-blue-500 hover:ring-offset-2",
        className,
        arrow && "group",
      )}
      icon={icon}
    >
      {children} {arrow && <AnimatedArrow />}
    </Button>
  );
}
