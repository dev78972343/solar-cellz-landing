import { useTranslation } from "react-i18next";

export default function EquipmentCard({ equipment, idx }) {
  const { t } = useTranslation();
  return (
    <div className="h-[230px] flex flex-col justify-center items-center gap-5 rounded-2xl border border-normal-blue-500 bg-white px-4 py-7 shadow-lg transition-all duration-300 ease-in-out">
      <img
        src={equipment?.image}
        alt={"Image of " + equipment?.name}
        className="mx-auto block w-24"
      />

      <p className="text-center text-[13px] md:text-xl font-semibold">
        {t(`equipments.cards.${idx}`)}
      </p>
    </div>
  );
}
