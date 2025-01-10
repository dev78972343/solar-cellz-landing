// Static partners logo
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const partners = [
  "✓ Guerrier Inc",
  "✓ Artistic Ingenuity",
  "✓ Unforgettable Experiences",
  "✓ Crafting Stories",
  "✓ Exceptional Events",
  "✓ Inspiring Experiences",
  "✓ Unforgettable Moments",
  "✓ Artistic Ingenuity",
  "✓ Unforgettable Experiences",
  "✓ Crafting Stories",
  "✓ Exceptional Events",
  "✓ Inspiring Experiences",
  "✓ Unforgettable Moments",
  "✓ Artistic Ingenuity",
  "✓ Unforgettable Experiences",
];

export default function Partners({ className }) {
  return (
    <div className={cn(className, "py-12 bg-marquee-gradient")}>
      <Marquee
        gradient
        pauseOnHover
        speed={80}
        gradientWidth={100}
        gradientColor="#111722"
        className="overflow-hidden"
      >
        {partners?.map((partner, idx) => (
          <div key={idx} className="mr-10">
            <li
              className="uppercase tracking-[1px] text-5xl text-transparent font-bold"
              style={{
                WebkitTextStroke: "1px #757575",
                strokeWidth: "1px",
                WebkitTextStrokeColor: "#757575",
                stroke: "#757575",
                color: "#02010100",
              }}
            >
              {partner}
            </li>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
