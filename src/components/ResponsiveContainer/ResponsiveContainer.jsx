import { cn } from "@/lib/utils";

export default function ResponsiveContainer({ children, classes, id }) {
  return (
    <section
      className={cn(
        `3xl:w-3/4 mx-auto w-full px-5 md:px-10 lg:w-[90%] lg:px-0 2xl:w-[85%]`,
        classes,
      )}
      id={id}
    >
      {children}
    </section>
  );
}
