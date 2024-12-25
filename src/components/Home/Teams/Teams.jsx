import { cn } from "@/lib/utils";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import expert1Img from "@/assets/images/experts/expert-1.png";
import expert2Img from "@/assets/images/experts/expert-2.png";
import expert3Img from "@/assets/images/experts/expert-3.png";
import { Facebook, Linkedin, Share2, Twitter, Youtube } from "lucide-react";

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
];

export default function Teams({ className }) {
  return (
    <section className={cn("bg-white", className)}>
      <ResponsiveContainer>
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-green-600">
            Meet With Our <span className="text-gray-800">Experts</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mx-auto mb-4 h-36 w-36 rounded-full"
                  />
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform gap-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-2 hover:bg-green-600 hover:text-white">
                      <Facebook size={16} />
                    </div>
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-2 hover:bg-green-600 hover:text-white">
                      <Twitter size={16} />
                    </div>
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-2 hover:bg-green-600 hover:text-white">
                      <Linkedin size={16} />
                    </div>
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white p-2 hover:bg-green-600 hover:text-white">
                      <Youtube size={16} />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white p-1">
                    <button className="flex h-full w-full items-center justify-center rounded-full bg-green-500 text-white hover:text-white">
                      <Share2 size={14} />
                    </button>
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
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
