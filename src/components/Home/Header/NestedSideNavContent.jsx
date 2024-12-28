import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function NestedSideNavContent({ title, items, setActiveMenu }) {
  return (
    <div>
      <div className="mb-3 border-b-[1px] border-b-gray-300 px-6 py-2.5">
        <button
          onClick={() => setActiveMenu(null)}
          className="flex cursor-pointer items-center gap-1 text-sm font-bold text-amazon_blue"
        >
          <span className="text-amazon_blue">
            <ArrowLeft size={16} className="text-gray-700" />
          </span>
          <span>MAIN MENU</span>
        </button>
      </div>

      <h3 className="font-titleFont mb-1 px-6 text-lg font-semibold">
        {title}
      </h3>
      <ul className="text-sm">
        {items.map((item, index) => (
          <Link key={index} to={item.to}>
            <li className="flex cursor-pointer items-center justify-between px-6 py-2.5 hover:bg-zinc-200">
              {item.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
