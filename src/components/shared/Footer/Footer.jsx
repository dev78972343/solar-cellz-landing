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
import { useTranslation } from "react-i18next";
import footerDatas from "./constant";

export default function Footer() {
  const { companyServiceLinks , solarElectricalContractorServicesLinks, toolsResourcesLinks, companyInfoLinks} = footerDatas
  const { t } = useTranslation();
  return (
    <footer className="py-12 bg-black">
      <ResponsiveContainer>
        <div className="flex-start-between w-full flex-col gap-y-5 lg:flex-row">
          <Link to="/">
            <img src={logo} alt={t("logo.logoAltText")} />
          </Link>

          <div className="relative w-full lg:w-[90%] 2xl:w-1/3">
            <Input
              placeholder={t("footer.subscribeInputPlaceholder")}
              className="h-14 w-full rounded-lg border-none bg-white text-black placeholder:text-black/50"
            />

            <PrimaryButton className="absolute right-2 top-1/2 h-10 -translate-y-1/2">
              {t("footer.subscribeButton")}
            </PrimaryButton>
          </div>
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 gap-8 text-sm text-gray-100 md:grid-cols-4 lg:mt-16">
          {/* Column 1 - Company Service */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("footer.companyService.title")}</h3>
            <ul className="space-y-2">
              {companyServiceLinks.map((_, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                  {t(`footer.companyService.links.${index}`)}
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 2 - Solar Electrical Contractor Services */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              {t("footer.solarElectricalContractorServices.title")}
            </h3>
            <ul className="space-y-2">
              {solarElectricalContractorServicesLinks.map((_, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                 {t(`footer.solarElectricalContractorServices.links.${index}`)}
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 3 - Tools & Resources */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("footer.toolsResources.title")}</h3>
            <ul className="space-y-2">
              {toolsResourcesLinks.map((_, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                  {t(`footer.toolsResources.links.${index}`)}
                </Link>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">{t("footer.companyInfo.title")}</h3>
            <ul className="space-y-2">
              {companyInfoLinks.map((_, index) => (
                <Link to="#" className="block hover:underline" key={index}>
                {t(`footer.companyInfo.links.${index}`)}
                </Link>
              ))}
            </ul>

            <h3 className="mb-4 mt-6 text-xl font-bold">{t("footer.downloadApp.title")}</h3>
            <div className="flex-center-start mt-3 gap-x-3">
              <a href="#">
                <img src={playStoreBadge} alt={t("footer.downloadApp.badges.0.platform")}/>
              </a>
              <a href="#">
                <img src={appStoreBadge} alt={t("footer.downloadApp.badges.1.platform")} />
              </a>
            </div>
          </div>
        </div>
      </ResponsiveContainer>

      <Separator className="mb-4 mt-10 bg-gray-400" />

      <ResponsiveContainer classes="text-white text-sm font-medium flex-center-between flex-col lg:flex-row gap-y-4">
        <p>&copy; {new Date().getFullYear()} {t(`footer.copyright`)}</p>

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
