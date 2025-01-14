import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TestimonialCard({ data, idx }) {
  const { t } = useTranslation();
  return (
    <div className="m-2 relative group bg-[#dddddd40] overflow-hidden flex flex-col items-start gap-x-6 gap-y-5 rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md lg:flex-row lg:items-center">
      {/* Image Section */}
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 lg:h-[200px] lg:w-[200px]">
          <img
            src={data?.image}
            alt={data?.name}
            className="h-full w-full object-cover"
          />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Rating */}
        <div className="mb-3 flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < data?.rating
                  ? "fill-current text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="mb-4 text-gray-700 leading-relaxed italic">
          “{t(`testimonials.cards.${idx}.comment`)}”
        </p>

        {/* Reviewer Info */}
        <div>
          <p className="font-semibold text-gray-900">{t(`testimonials.cards.${idx}.name`)}</p>
          <p className="text-sm text-gray-500">{t(`testimonials.cards.${idx}.position`)}</p>
        </div>
      </div>

      {/* Animated Bottom Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full translate-x-[-100%] bg-gradient-to-r from-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
    </div>
  );
}
