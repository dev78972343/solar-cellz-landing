import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * A navigation sub-menu component that is rendered as a hover card.
 *
 * @param {Object} item - The item containing the label and href of the sub-menu.
 * @param {Array} subItems - The array of sub-items to be rendered in the sub-menu. It must contain `key`, `label`, and `href` properties.
 * @returns {React.ReactElement} - A hover card containing the sub-menu items.
 */
export default function CustomNavSubMenu({ item, subItems }) {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger className="flex-center-between group w-full gap-x-5 rounded px-3 py-2 text-base font-medium hover:bg-slate-100">
        {item.label}
        <ChevronRight className="h-3 w-3" />
      </HoverCardTrigger>

      {/* Sub menu on the right side */}
      <HoverCardContent
        side="right"
        align="start"
        sideOffset={0}
        className="flex !min-w-[200px] flex-col rounded-md border-2 bg-white px-0 py-1 text-black"
      >
        {subItems?.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="rounded px-3 py-2 text-base font-medium hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
}
