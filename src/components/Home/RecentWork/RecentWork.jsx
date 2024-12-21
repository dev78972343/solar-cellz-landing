import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { cn } from "@/lib/utils";
import workImg1 from "@/assets/images/recent-work/recent-work-1.jpg";
import workImg2 from "@/assets/images/recent-work/recent-work-2.jpg";
import workImg3 from "@/assets/images/recent-work/recent-work-3.jpg";
import RecentWorkCard from "./RecentWorkCard";
import { MapPin } from "lucide-react";
import { Move } from "lucide-react";
import { UserRound } from "lucide-react";

// Static data for Recent Work
const recentWorkData = [
  {
    key: 1,
    image: workImg1,
    imageSide: "left",
    title: "Emei Solar Panel Station",
    systemType: "Off-Grid Systems",
    description:
      "Aliquet dignissim erat habitasse aliquet tincidunt phasellus ultrices.",
    details: [
      {
        key: 1,
        icon: <MapPin size={18} />,
        label: "Location",
        value: "Mount Emei, USA",
      },
      {
        key: 2,
        icon: <Move size={18} />,
        label: "Total Area",
        value: "500 square meters",
      },
      {
        key: 3,
        icon: <UserRound size={18} />,
        label: "Client",
        value: "CHN Company",
      },
    ],
    features: [
      { key: 1, title: "100 KWP", desc: "Power Output" },
      { key: 2, title: "300 KWH", desc: "Battery Capacity" },
      { key: 3, title: "120 KW", desc: "Capacity" },
    ],
    link: "Learn More",
  },
  {
    key: 2,
    image: workImg2,
    imageSide: "right",
    title: "Graciela Roof Solar Panel",
    systemType: "Grid-Tied Systems",
    description:
      "Aliquet dignissim erat habitasse aliquet tincidunt phasellus ultrices.",
    details: [
      {
        key: 1,
        icon: <MapPin size={18} />,
        label: "Location",
        value: "The Boltons, USA",
      },
      {
        key: 2,
        icon: <Move size={18} />,
        label: "Total Area",
        value: "50 square meters",
      },
      {
        key: 3,
        icon: <UserRound size={18} />,
        label: "Client",
        value: "Graciela Messer",
      },
    ],
    features: [
      { key: 1, title: "100 KWP", desc: "Power Output" },
      { key: 2, title: "300 KWH", desc: "Battery Capacity" },
      { key: 3, title: "120 KW", desc: "Capacity" },
    ],
    link: "Learn More",
  },
  {
    key: 3,
    image: workImg3,
    imageSide: "left",
    title: "Keller Farm Solar Panel",
    systemType: "Off-Grid Systems",
    description:
      "Aliquet dignissim erat habitasse aliquet tincidunt phasellus ultrices.",
    details: [
      {
        key: 1,
        icon: <MapPin size={18} />,
        label: "Location",
        value: "Mauro, Neuhardenberg",
      },
      {
        key: 2,
        icon: <Move size={18} />,
        label: "Total Area",
        value: "500 square meters",
      },
      {
        key: 3,
        icon: <UserRound size={18} />,
        label: "Client",
        value: "Patrick Keller",
      },
    ],
    features: [
      { key: 1, title: "100 KWP", desc: "Power Output" },
      { key: 2, title: "300 KWH", desc: "Battery Capacity" },
      { key: 3, title: "120 KW", desc: "Capacity" },
    ],
    link: "Learn More",
  },
];

export default function RecentWork({ className }) {
  return (
    <ResponsiveContainer classes={cn("", className)}>
      <section className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
        <SectionHeader heading="Our Recent Work" subHeading="Our Projects" />
        <PrimaryButton arrow={true}>More Projects</PrimaryButton>
      </section>

      {/* Recent Works */}
      <section className="mt-16 space-y-20 overflow-hidden">
        {recentWorkData?.map((data) => (
          <RecentWorkCard key={data?.key} data={data} />
        ))}
      </section>
    </ResponsiveContainer>
  );
}
