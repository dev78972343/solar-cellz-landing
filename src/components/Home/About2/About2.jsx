import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  ChevronRightIcon,
  Eclipse,
} from "lucide-react";

const aboutData = [
  {
    title: "Solar Power System",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: [
      "Solar Backup Systems",
      "Renewable Consulting",
      "Home Solar Integration",
    ],
    icon: <BatteryCharging size={36} />,
  },
  {
    title: "Household solar panel",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: [
      "Solar Panel Installation",
      "Solar Energy Saving System",
      "Bio Electricity Supply",
    ],
    icon: <Cable size={36} />,
  },
  {
    title: "Solar Panel Cleaning",
    description:
      "By generating your own electricity from solar energy, you can significantly reduce your monthly utility bills.",
    features: ["Non-Toxic Agents", "Water Efficient", "Safe Panel Surfaces"],
    icon: <Eclipse size={36} />,
  },
];

export default function About2() {
  return (
    <ResponsiveContainer className="bg-sky-blue-50 py-16 font-dmSans">
      <div className="container mx-auto mt-20 px-6 lg:px-16">
        <h2 className="text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Complete solar solution <br /> with repair services
        </h2>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8">
          {aboutData.map((card, index) => (
            <div
              key={index}
              className="relative flex w-full max-w-[350px] flex-col gap-4 rounded-xl bg-white p-6 pt-[72px]"
            >
              <div className="absolute -top-5 flex h-16 w-16 items-center justify-center rounded-lg bg-green-400 p-3 text-white">
                {/* <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="h-full w-full"
                /> */}
                {card.icon}
              </div>
              <h3 className="text-gray-9 00 text-xl font-medium">
                {card.title}
              </h3>
              <p className="text-gray-500">{card.description}</p>
              <ul className="list-inside list-disc space-y-2 font-medium text-gray-900">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRightIcon className="size-4 font-semibold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 flex items-center justify-between gap-2 rounded-3xl border px-[3px] py-[3px] uppercase text-gray-900 hover:underline">
                <span className="ml-5 text-sm font-medium">View More</span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
}
