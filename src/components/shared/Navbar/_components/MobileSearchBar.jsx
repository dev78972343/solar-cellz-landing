import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { Search } from "lucide-react";

export default function MobileSearchBar() {
  return (
    <div className="mx-auto flex w-full flex-col gap-2 rounded-lg bg-transparent p-4 md:w-3/4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="What can we help you find?"
          className="w-full rounded-md bg-white py-2 pl-10 pr-3 text-sm text-black focus-visible:ring-offset-blue-400"
        />
      </div>

      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="City, State or ZIP"
          className="w-full rounded-md bg-white py-2 pl-10 pr-3 text-sm text-black focus-visible:ring-offset-blue-400"
        />
      </div>

      <PrimaryButton className="h-10 w-full border-white">Search</PrimaryButton>
    </div>
  );
}
