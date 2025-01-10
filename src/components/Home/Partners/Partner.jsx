// Static partners logo
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const highlights = [
  "✓ Expert Solar Panel Installation",
  "✓ 100% Client Satisfaction",
  "✓ 20+ Years of Experience",
  "✓ Premium Solar Energy Storage Solutions",
  "✓ Tailored Energy Optimization Strategies",
  "✓ Routine Solar System Maintenance & Support",
  "✓ Sustainable, Eco-Friendly Solar Energy",
  "✓ Comprehensive Solar System Repair Services",
  "✓ Cutting-edge Solar Technology & Innovation",
  "✓ Reliable Power Supply Even During Cloudy Days",
  "✓ Efficient and Cost-Effective Solar Solutions",
  "✓ Solar System Installation Across Multiple Industries",
  "✓ Industry-Leading Solar Experts & Technicians",
  "✓ 24/7 Customer Support for Solar Energy Solutions",
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
        {highlights?.map((highlight, idx) => (
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
              {highlight}
            </li>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
