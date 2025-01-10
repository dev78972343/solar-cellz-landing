import { Star } from "lucide-react";

export default function TestimonialCard({ data }) {
  return (
    <div className="relative group bg-[#dddddd40] overflow-hidden flex flex-col items-start gap-x-6 gap-y-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl lg:flex-row lg:items-center">
      {/* Image Section */}
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 lg:h-[200px] lg:w-[200px]">
        {data?.image ? (
          <img
            src={data?.image}
            alt={data?.reviewerName || "Reviewer Image"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image
          </div>
        )}
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
          “{data?.comment}”
        </p>

        {/* Reviewer Info */}
        <div>
          <p className="font-semibold text-gray-900">{data?.reviewerName}</p>
          <p className="text-sm text-gray-500">{data?.reviewerPosition}</p>
        </div>
      </div>

      {/* Animated Bottom Bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full translate-x-[-100%] bg-gradient-to-r from-blue-500 to-light-blue-500 transition-transform duration-500 ease-in-out group-hover:translate-x-0"></div>
    </div>
  );
}
