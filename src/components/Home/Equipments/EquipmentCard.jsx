import { images } from "./constant";

export default function EquipmentCard({ equipment, idx }) {
  return (
    <div className="h-[230px] flex flex-col justify-center items-center gap-5 rounded-2xl border border-normal-blue-500 bg-white px-4 py-7 shadow-lg transition-all duration-300 ease-in-out">
      <img
        src={images[idx].image}
        alt={images[idx].name}
        className="mx-auto block w-24"
      />

      <p className="text-center text-[13px] md:text-xl font-semibold">
        {equipment}
      </p>
    </div>
  );
}
