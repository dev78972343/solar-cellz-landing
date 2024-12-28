import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export function SideNavContent({ title, items, setActiveMenu }) {
  return (
    <div className="border-b-[1px] border-b-gray-300 py-3">
      <h3 className="font-titleFont mb-1 px-6 text-lg font-semibold">
        {title}
      </h3>
      <ul className="text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveMenu(item.label)}
            className="flex cursor-pointer items-center justify-between px-6 py-2 hover:bg-zinc-200"
          >
            {item.label}
            <span>
              <KeyboardArrowRightIcon />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
