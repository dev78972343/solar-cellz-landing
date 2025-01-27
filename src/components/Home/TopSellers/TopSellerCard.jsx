import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import textTruncate from "@/utils/textTruncate";
import { Star } from "lucide-react";
import productImages from "./constant";

export default function TopSellerCard({ data, reviewsText}) {
  return (
    <Card className="max-h-[430px] min-h-[400px] border transition-all duration-300 ease-in-out hover:border-sky-500">
      <CardContent>
        <div className="rounded-xl bg-sky-50 py-3">
          <img
            src={productImages?.[data?.id]?.image}
            alt={data?.name}
            className="mx-auto block h-auto max-h-[200px] w-auto"
          />
        </div>

        <h5 className="mt-3 text-xl font-semibold">
        {textTruncate(data?.name, 40)}
        </h5>

        <div className="flex-center-start mb-5 mt-1 gap-x-2 text-[#666666]">
          <Star size={20} className="fill-yellow-400 stroke-yellow-400" />
          <span className="-mb-1">
            {data?.rating} ({data?.reviews} {reviewsText})
          </span>
        </div>

        <p className="text-xl font-semibold text-normal-blue-500">
          ${data?.price}
        </p>
      </CardContent>

      <CardFooter>
        <PrimaryButton className="h-10 w-full border-none">
          {data.button.text}
        </PrimaryButton>
      </CardFooter>
    </Card>
  );
}
