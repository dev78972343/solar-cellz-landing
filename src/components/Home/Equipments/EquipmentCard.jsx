export default function EquipmentCard({ equipment }) {
  return (
    <div className="rounded-2xl border border-normal-blue-500 bg-white px-4 py-7 shadow-lg transition-all duration-300 ease-in-out">
      <img
        src={equipment?.image}
        alt={"Image of " + equipment?.name}
        className="mx-auto block h-[130px] w-auto"
      />

      <p className="mt-5 text-center text-xl font-semibold">
        {equipment?.name}
      </p>
    </div>
  );
}
