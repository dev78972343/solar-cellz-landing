import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import logos from "./constants";

export default function Manufacturers({ className }) {
  const { t } = useTranslation();
  const manufacturersContent = t("manufacturers", { returnObjects: true });
  return (
    <div className={className}>
      <SectionHeader
        heading={manufacturersContent.heading}
        subHeading={manufacturersContent.subHeading}
        desc={manufacturersContent.desc}
        className="mx-auto w-full px-5 text-center md:w-10/12 md:px-0 lg:w-3/4 2xl:w-2/3"
      />

      {/* Manufacturers Logo Carousel */}
      <section className="my-16 space-y-8 lg:my-20">
        {/* 1st Row */}
        <Marquee gradient speed={80} gradientWidth={100} direction="right">
          {logos?.slice(0, 25)?.map((logo) => (
            <div key={logo} className="mr-10 md:mr-24">
              <img
                src={logo}
                alt={`manufacturers partner Logo`}
                className="aspect-square h-auto w-auto"
              />
            </div>
          ))}
        </Marquee>

        {/* 2nd Row */}
        <Marquee gradient speed={80} gradientWidth={100} direction="left">
          {logos?.slice(25, 50)?.map((logo) => (
            <div key={logo} className="mr-10 md:mr-24">
              <img
                src={logo}
                alt={`manufacturers partner Logo`}
                className="aspect-square h-auto w-auto"
              />
            </div>
          ))}
        </Marquee>

        {/* 3rd Row */}
        <Marquee gradient speed={80} gradientWidth={100} direction="right">
          {logos?.slice(50)?.map((logo) => (
            <div key={logo} className="mr-10 md:mr-24">
              <img
                src={logo}
                alt={`manufacturers partner Logo`}
                className="aspect-square h-auto w-auto"
              />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
}
