import { useTranslation } from "react-i18next";
import { OPTIONS} from "./constant";
import EmblaCarousel from "./EmblaCarousel";
import ResponsiveContainer from "@/components/ResponsiveContainer/ResponsiveContainer";

export default function Projects({ className }) {
  const { t } = useTranslation();
  const reviews = t("reviews", { returnObjects: true });
  return (
    <div className={className}>
      <ResponsiveContainer>
        <EmblaCarousel slides={reviews} options={OPTIONS} />
      </ResponsiveContainer>
    </div>
  );
}
