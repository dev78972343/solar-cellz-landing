import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import PrimaryButton from "@/components/buttons/PrimaryButton/PrimaryButton";
import { useTranslation } from "react-i18next";

export function NavSearchBar() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex w-full max-w-3xl items-center gap-0 rounded-lg bg-white p-1 text-black">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
        <Input
          type="text"
          placeholder={t("navbar.What can we help you find?")}
          className="border-0 pl-10 ring-0 transition-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex w-[1px] items-center">
          <div className="h-6 w-[1px] bg-gray-200" />
        </div>
        <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
        <Input
          type="text"
          placeholder={t("navbar.City, State or ZIP")}
          className="border-0 pl-10 ring-0 transition-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <PrimaryButton className="h-0 border-black py-4">
        {t("navbar.Search")}
      </PrimaryButton>
    </div>
  );
}
