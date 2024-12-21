import { Star } from "lucide-react";

export default function TestimonialCard({ data }) {
  return (
    <div className="flex flex-col items-start gap-x-4 gap-y-5 lg:flex-row lg:items-center">
      <div className="relative w-full rounded-xl lg:h-[200px] lg:w-[200px]">
        <img src={data?.image} alt="" className="w-full" />
      </div>

      <div className="flex-1 pr-10">
        <div className="mb-2 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`size-4 ${i < data?.rating ? "fill-current text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="mb-4 mt-3 leading-relaxed text-gray-700">
          {data?.comment}
        </p>

        <div>
          <p className="font-medium text-gray-900">{data?.reviewerName}</p>
          <p className="text-sm text-gray-500">{data?.reviewerPosition}</p>
        </div>
      </div>
    </div>
  );
}
