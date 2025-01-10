import { cn } from "@/lib/utils";
import EmblaCarousel from "./EmblaCarousel";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

import company1 from "@/assets/images/project2/company-one.jpg";
import company2 from "@/assets/images/project2/company-two.jpg";
import company3 from "@/assets/images/project2/company-three.jpg";

const OPTIONS = { loop: true };
const SLIDES = [
  {
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/outliant.mp4",
    poster: company1,
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff7808fef2aeecfff1b_Outliant.svg",
    stat: "$1M+",
    description: "Increased energy savings",
    quote:
      "Solar Cellz revolutionized the way we think about sustainable energy. With their cutting-edge technology, we have reduced our energy costs by over 30%.",
    author: "Marcus Jones — COO, Sustainable Energy Inc.",
    storyLink: "https://solarcellz.com/customers/sustainable-energy",
  },
  {
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/vanta.mp4",
    poster: company2,
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff723543705ff82037b_Vanta.svg",
    stat: "100+",
    description: "Enhanced green energy adoption",
    quote:
      "Solar Cellz's innovative solutions have empowered our transition to green energy. Their reliable and efficient products have accelerated our sustainability efforts.",
    author: "Jenny Thai — Head of Operations, GreenTech Solutions",
    storyLink: "https://solarcellz.com/customers/greentech-solutions",
  },
  {
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/lattice.mp4",
    poster: company3,
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e9c8c8c31654c494fcc596_Frame.svg",
    stat: "40%",
    description: "Sustainable growth through innovation",
    quote:
      "Solar Cellz has been a game-changer for our operations. Their renewable energy solutions have helped us reduce our carbon footprint and increase efficiency by 40%.",
    author: "CMO, EcoPower Corp.",
    storyLink: "https://solarcellz.com/customers/ecopower-corp",
  },
];


export default function Projects2({ className }) {
  return (
    <div className={cn(className)}>
    <ResponsiveContainer>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </ResponsiveContainer>
    </div>
  );
}
