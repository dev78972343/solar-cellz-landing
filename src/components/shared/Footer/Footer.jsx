import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";
import logo from "@/assets/logos/logo.png";
import { Input } from "@/components/ui/input";
import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import playStoreBadge from "../../../assets/images/footer/play-store-badge.webp";
import appStoreBadge from "../../../assets/images/footer/app-store-badge.webp";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { LinkedinSvg, TwitterSvg } from "@/utils/svgContainer";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";

// Static Links
const companyServiceLinks = [
  "Contact Us",
  "Direct Sales",
  "Returns",
  "Privacy Policy",
  "Manufacturers",
  "Request an Online Account",
  "Testimonials",
  "Accessibility Statement",
  "Mobile App",
];

const solarElectricalContractorServicesLinks = [
  "About Us",
  "Engineer Design Services",
  "Line of Credit",
  "Solar Cellz W-9 Form",
  "Green Technology",
  "Solar Energy Direct",
  "Supplier Self Service Portal",
  "Partners Program",
];

const toolsResourcesLinks = [
  "Online Store",
  "Business Resource",
  "Multimeter Calibration Settings",
  "Events",
  "Homeowners",
  "Installation Manual Search",
  "Solar Energy Learning Center",
  "Storage Products",
  "Installation Video Series",
  "Solar Project Calculators",
  "Solar System Maintenance Calendars",
];

const companyInfoLinks = [
  "Investor Relations",
  "Careers",
  "Franchised Manufacturers",
  "Financing",
  "Terms & Conditions",
];

export default function Footer() {
  return (
    <footer className="py-12 bg-black">
      <ResponsiveContainer>
        <div className="flex-start-between w-full flex-col gap-y-5 lg:flex-row">
          <Link to="/">
            <img src={logo} alt="Logo of Sollar Cellz USA" />
          </Link>

          <div className="relative w-full lg:w-[90%] 2xl:w-1/3">
            <Input
              placeholder="Enter email to subscribe to our newsletter"
              className="h-14 w-full rounded-lg border-none bg-white text-black placeholder:text-black/50"
            />

            <PrimaryButton className="absolute right-2 top-1/2 h-10 -translate-y-1/2">
              Subscribe
            </PrimaryButton>
          </div>
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 gap-8 text-sm text-gray-100 md:grid-cols-4 lg:mt-16">
          {/* Column 1 - Company Service */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Company Service</h3>
            <ul className="space-y-2">
              {companyServiceLinks.map((link, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 2 - Solar Electrical Contractor Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Solar Electrical Contractor Services
            </h3>
            <ul className="space-y-2">
              {solarElectricalContractorServicesLinks.map((link, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 3 - Tools & Resources */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Tools & Resources</h3>
            <ul className="space-y-2">
              {toolsResourcesLinks.map((link, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Company Info</h3>
            <ul className="space-y-2">
              {companyInfoLinks.map((link, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                  {link}
                </Link>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 text-xl font-bold">Download Our App</h3>
            <div className="flex-center-start mt-3 gap-x-3">
              <a href="#">
                <img src={playStoreBadge} alt="Play store link badge" />
              </a>
              <a href="#">
                <img src={appStoreBadge} alt="App store link badge" />
              </a>
            </div>
          </div>
        </div>
      </ResponsiveContainer>

      <Separator className="mb-4 mt-10 bg-gray-400" />

      <ResponsiveContainer classes="text-white text-sm font-medium flex-center-between flex-col lg:flex-row gap-y-4">
        <p>&copy; {new Date().getFullYear()} Solar Cellz USA, ALL RIGHTS RESERVED.</p>

        {/* Social Links */}
        <div className="flex-center-start gap-x-3">
          <Link
            to="#"
            className="bg-primary-black text-primary-white rounded-full p-[6px]"
          >
            <TwitterSvg size={20} />
          </Link>

          <Link
            to="#"
            className="bg-primary-black text-primary-white rounded-full p-[6px]"
          >
            <LinkedinSvg size={20} />
          </Link>

          <Link
            to="#"
            className="bg-primary-black text-primary-white rounded-full p-[6px]"
          >
            <Instagram size={20} />
          </Link>

          <Link
            to="#"
            className="bg-primary-black text-primary-white rounded-full p-[6px]"
          >
            <Facebook size={20} />
          </Link>

          <Link
            to="#"
            className="bg-primary-black text-primary-white rounded-full p-[6px]"
          >
            <Youtube size={20} />
          </Link>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
