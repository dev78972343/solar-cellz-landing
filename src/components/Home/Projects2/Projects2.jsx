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
    poster:company1,
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff7808fef2aeecfff1b_Outliant.svg",
    stat: "$1M+",
    description: "increased revenue",
    quote:
      "Webflow has the power of custom coded web development but the accessibility of a visual interface. Webflow has the power of custom coded web development but the accessibility of a visual interface.",
    author: "Marcus Jones — COO",
    storyLink: "https://webflow.com/customers/outliant",
  },
  {
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/vanta.mp4",
    poster:company2,
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7ff723543705ff82037b_Vanta.svg",
    stat: "5k",
    description: "Faster speed to market",
    quote:
      "Webflow's visual-first CMS has been very powerful in helping us save time on shipping new pages. Webflow's visual-first CMS has been very powerful in helping us save time on shipping new pages.",
    author: "Jenny Thai — Head of Content",
    storyLink: "https://webflow.com/customers/vanta",
  },
  {
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/customers/lattice.mp4",
    poster:company3,
    logo: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66e9c8c8c31654c494fcc596_Frame.svg",
    stat: "20%",
    description: "increase in organic traffic",
    quote:
      "With Webflow, we’ve significantly improved organic traffic, SEO, and conversions.",
    author: "CMO",
    storyLink: "https://webflow.com/customers/lattice",
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
