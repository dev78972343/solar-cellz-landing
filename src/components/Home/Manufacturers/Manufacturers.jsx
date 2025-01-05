import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import Marquee from "react-fast-marquee";

// logos
import logo1 from "../../../assets/images/manufacturers/1280px-Vaisala_logo 1.png";
import logo2 from "../../../assets/images/manufacturers/Blink-EV-Logo 1.png";
import logo3 from "../../../assets/images/manufacturers/BYD-battery 1.png";
import logo4 from "../../../assets/images/manufacturers/Canadian-Solar-logo 1.png";
import logo5 from "../../../assets/images/manufacturers/Duracell_Power_Center_Logo-1 1.png";
import logo6 from "../../../assets/images/manufacturers/Eaton-logo 1.png";
import logo7 from "../../../assets/images/manufacturers/Ecoflow 1.png";
import logo8 from "../../../assets/images/manufacturers/Enphase-Battery 1.png";
import logo9 from "../../../assets/images/manufacturers/EVgo_Logo-1 1.png";
import logo10 from "../../../assets/images/manufacturers/EZ-Solar_logo 1.png";
import logo11 from "../../../assets/images/manufacturers/FranklinWH-Logo-2048x145 1.png";
import logo12 from "../../../assets/images/manufacturers/hitachienergy-logo 1.png";
import logo13 from "../../../assets/images/manufacturers/Home-Grid-Battery 1.png";
import image1 from "../../../assets/images/manufacturers/image 1.png";
import image2 from "../../../assets/images/manufacturers/image 2.png";
import image3 from "../../../assets/images/manufacturers/image 3.png";
import image4 from "../../../assets/images/manufacturers/image 4.png";
import image5 from "../../../assets/images/manufacturers/image 5.png";
import image6 from "../../../assets/images/manufacturers/image 6.png";
import image7 from "../../../assets/images/manufacturers/image 7.png";
import image8 from "../../../assets/images/manufacturers/image 8.png";
import image9 from "../../../assets/images/manufacturers/image 9.png";
import image10 from "../../../assets/images/manufacturers/image 10.png";
import image11 from "../../../assets/images/manufacturers/image 11.png";
import image12 from "../../../assets/images/manufacturers/image 12.png";
import image13 from "../../../assets/images/manufacturers/image 13.png";
import image14 from "../../../assets/images/manufacturers/image 14.png";
import image15 from "../../../assets/images/manufacturers/image 15.png";
import image16 from "../../../assets/images/manufacturers/image 16.png";
import image17 from "../../../assets/images/manufacturers/image 17.png";
import image18 from "../../../assets/images/manufacturers/image 18.png";
import image19 from "../../../assets/images/manufacturers/image 19.png";
import image20 from "../../../assets/images/manufacturers/image 20.png";
import image21 from "../../../assets/images/manufacturers/image 21.png";
import image22 from "../../../assets/images/manufacturers/image 22.png";
import image23 from "../../../assets/images/manufacturers/image 23.png";
import image24 from "../../../assets/images/manufacturers/image 24.png";
import image25 from "../../../assets/images/manufacturers/image 25.png";
import image26 from "../../../assets/images/manufacturers/image 26.png";
import image27 from "../../../assets/images/manufacturers/image 27.png";
import image28 from "../../../assets/images/manufacturers/image 28.png";
import image29 from "../../../assets/images/manufacturers/image 29.png";
import image30 from "../../../assets/images/manufacturers/image 30.png";
import image31 from "../../../assets/images/manufacturers/image 31.png";
import image32 from "../../../assets/images/manufacturers/image 32.png";
import image33 from "../../../assets/images/manufacturers/image 33.png";
import image34 from "../../../assets/images/manufacturers/image 34.png";
import image35 from "../../../assets/images/manufacturers/image 35.png";
import image36 from "../../../assets/images/manufacturers/image 36.png";
import image37 from "../../../assets/images/manufacturers/image 37.png";
import image38 from "../../../assets/images/manufacturers/image 38.png";
import image39 from "../../../assets/images/manufacturers/image 39.png";
import image40 from "../../../assets/images/manufacturers/image 40.png";
import image41 from "../../../assets/images/manufacturers/image 41.png";
import image42 from "../../../assets/images/manufacturers/image 42.png";
import image43 from "../../../assets/images/manufacturers/image 43.png";
import image44 from "../../../assets/images/manufacturers/image 44.png";
import juicebox from "../../../assets/images/manufacturers/Juicebox 1.png";
import lgChemBattery from "../../../assets/images/manufacturers/LG-Chem-Battery 1.png";
import maddoxLogo from "../../../assets/images/manufacturers/Maddox_Logo 1.png";
import midnightLogo from "../../../assets/images/manufacturers/Midnight-logo 1.png";
import rainwise from "../../../assets/images/manufacturers/Rainwise 1.png";
import renogyLogo from "../../../assets/images/manufacturers/renogy-logo 1.png";
import schneiderElectric from "../../../assets/images/manufacturers/Schneider-Electric 1.png";
import soladeckPrimaryLogo from "../../../assets/images/manufacturers/Soladeck_PrimaryLogo-2048x691 1.png";
import solaredgeBattery from "../../../assets/images/manufacturers/Solaredge-Battery 1.png";
import teslaLogo from "../../../assets/images/manufacturers/Tesla-1-logo 1.png";
import teslaBatteryLogo from "../../../assets/images/manufacturers/Tesla-Battery-Logo-1 1.png";
import victronEnergy from "../../../assets/images/manufacturers/Victron-Energy 1.png";
import wallboxLogo from "../../../assets/images/manufacturers/Wallbox_Logo 1.png";

// Manufacturers Logo
const manufacturersLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  juicebox,
  lgChemBattery,
  maddoxLogo,
  midnightLogo,
  rainwise,
  renogyLogo,
  schneiderElectric,
  soladeckPrimaryLogo,
  solaredgeBattery,
  teslaLogo,
  teslaBatteryLogo,
  victronEnergy,
  wallboxLogo,
];

export default function Manufacturers() {
  return (
    <div>
      <SectionHeader
        heading="Our Franchised Manufacturer Partners"
        subHeading="Franchises"
        desc="Sollar Cellz USA is a leading provider of high-quality solar energy solutions, collaborating with a network of trusted franchised manufacturer partners. Together, we innovate and deliver cutting-edge solar products that empower businesses and homeowners to harness sustainable energy efficiently."
        className="mx-auto w-full px-5 text-center md:w-10/12 md:px-0 lg:w-3/4 2xl:w-2/3"
      />

      {/* Manufacturers Logo Carousel */}
      <section className="my-16 space-y-10 lg:my-20">
        {/* 1st Row */}
        <Marquee gradient speed={80} gradientWidth={100} direction="right">
          {manufacturersLogos?.slice(0, 25)?.map((logo) => (
            <div key={logo} className="mr-32">
              <img
                src={logo}
                alt={`manufacturers partner brand Logo`}
                className="aspect-square h-auto w-auto"
              />
            </div>
          ))}
        </Marquee>

        {/* 2nd Row */}
        <Marquee gradient speed={80} gradientWidth={100} direction="left">
          {manufacturersLogos?.slice(25, 50)?.map((logo) => (
            <div key={logo} className="mr-32">
              <img
                src={logo}
                alt={`manufacturers partner brand Logo`}
                className="aspect-square h-auto w-auto"
              />
            </div>
          ))}
        </Marquee>

        {/* 3rd Row */}
        <Marquee gradient speed={80} gradientWidth={100} direction="right">
          {manufacturersLogos?.slice(50)?.map((logo) => (
            <div key={logo} className="mr-32">
              <img
                src={logo}
                alt={`manufacturers partner brand Logo`}
                className="aspect-square h-auto w-auto"
              />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
}
