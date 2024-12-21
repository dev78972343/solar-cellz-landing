export default function ExpertCard({ data }) {
  return (
    <div
      key={data?.id}
      className="group relative inline-block h-full w-full overflow-hidden rounded-lg"
    >
      <img
        src={data?.image}
        alt={`Image of ${data?.name}, ${data?.role}`}
        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
      />

      {/* overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-[23px] bg-gradient-to-br from-black/40 to-black/40 transition-all duration-500 ease-in-out group-hover:scale-110" />

      <div className="absolute left-4 top-4 text-white">
        <h3 className="text-xl font-medium lg:text-2xl 2xl:text-3xl">
          {data?.name}
        </h3>
        <p className="text-base 2xl:text-lg">{data?.role}</p>
      </div>
    </div>
  );
}
