// Static partners logo
import beyGoodLogo from "../../../assets/images/partners/bey-good.webp";
import ncSustainableLogo from "../../../assets/images/partners/nc-sustainable.png";
import nmsdcLogo from "../../../assets/images/partners/nmsdc.png";
import seiaLogo from "../../../assets/images/partners/seia.png";
import Marquee from "react-fast-marquee";

// Static partners logo
const partnersLogos = [beyGoodLogo, ncSustainableLogo, nmsdcLogo, seiaLogo, beyGoodLogo, ncSustainableLogo, nmsdcLogo,];

export default function BrandsLogoCarousel() {
  return (
    
      <Marquee
        gradient
        pauseOnHover
        speed={80}
        gradientWidth={100}
        gradientColor="rgb(243 244 246)"
        
      >
        {partnersLogos?.map((logo) => (
          <div key={logo} className="mr-10">
            <img
              src={logo}
              alt={`partner brand Logo`}
              className="h-16 w-auto"
            />
          </div>
        ))}
      </Marquee>
  );
}
