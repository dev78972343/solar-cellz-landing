import { cn } from "@/lib/utils";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import expert1Img from "@/assets/images/experts/expert-1.png";
import expert2Img from "@/assets/images/experts/expert-2.png";
import expert3Img from "@/assets/images/experts/expert-3.png";
import { Facebook, Linkedin, Share2, Twitter, Youtube } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  slideUpChildVariants,
  slideUpParentVariants,
} from "@/utils/sharedMotionVariants";
import { motion } from "motion/react";

const team = [
  {
    name: "Rodrigues Christy",
    role: "Project Manager",
    image: expert1Img,
    social: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Matthew Hong",
    role: "CEO & Founder",
    image: expert2Img,
    social: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Anita Bentley",
    role: "Marketing Manager",
    image: expert3Img,
    social: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Beverly Dyer",
    role: "System Engineer",
    image: expert2Img,
    social: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Donny Evans",
    role: "System Engineer",
    image: expert3Img,
    social: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Rodrigues Christy",
    role: "Project Manager",
    image: expert1Img,
    social: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Matthew Hong",
    role: "CEO & Founder",
    image: expert2Img,
    social: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Anita Bentley",
    role: "Marketing Manager",
    image: expert3Img,
    social: ["facebook", "twitter", "linkedin"],
  },
];

export default function Teams({ className }) {
  return (
    <section className={cn("bg-white", className)}>
      <ResponsiveContainer>
        <motion.section
          variants={slideUpParentVariants()}
          transition={{
            delay: 2,
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <motion.h2
            variants={slideUpChildVariants}
            className="mb-8 text-3xl font-bold text-green-600"
          >
            Meet With Our <span className="text-gray-800">Experts</span>
          </motion.h2>
          <Carousel
            opts={{
              loop: false,
              duration: 60,
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 8000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
          >
            <CarouselContent>
              {/* <div className="flex flex-wrap items-center justify-center gap-6"> */}
              {team.map((member, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6"
                >
                  <TeamCard member={member} />
                </CarouselItem>
              ))}
              {/* </div> */}
            </CarouselContent>

            <div className="mt-4">
              <CarouselDots />
            </div>
          </Carousel>
        </motion.section>
      </ResponsiveContainer>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <motion.div variants={slideUpChildVariants} className="group text-center">
      <div className="relative flex justify-center">
        <div className="relative size-40">
          <img
            src={member.image}
            alt={member.name}
            className="mx-auto mb-4 size-full rounded-full"
          />
          <div className="absolute bottom-2 right-2 size-8 rounded-full bg-white p-1">
            <button className="flex h-full w-full items-center justify-center rounded-full bg-green-500 text-white hover:text-white">
              <Share2 className="size-4" />
            </button>
          </div>
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/facebook bg-white p-2 hover:bg-green-600 hover:text-white">
              <Facebook className="size-4 text-green-600 group-hover/facebook:text-white" />
            </div>
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/twitter bg-white p-2 hover:bg-green-600 hover:text-white">
              <Twitter className="size-4 text-green-600 group-hover/twitter:text-white" />
            </div>
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/linkedin bg-white p-2 hover:bg-green-600 hover:text-white">
              <Linkedin className="size-4 text-green-600 group-hover/linkedin:text-white" />
            </div>
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full group/youtube bg-white p-2 hover:bg-green-600 hover:text-white">
              <Youtube className="size-4 text-green-600 group-hover/youtube:text-white" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-sm text-green-500">{member.role}</p>
      <div className="mt-4 flex justify-center gap-4">
        {member.social.map((platform, idx) => (
          <a
            key={idx}
            href={`#${platform}`}
            className="text-green-500 hover:text-green-600"
          >
            <i className={`fab fa-${platform}`}></i>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
