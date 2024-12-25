import { transformNameInitials } from "@/utils/transformNameInitials";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils";

const AvatarGroup = ({ users, className }) => {
  return (
    <div className={cn("flex -space-x-3 *:ring-2 *:ring-white", className?.root)}>
      {users?.map((user, idx) => (
        <Avatar
          key={user?.key || idx}
          className={cn("h-8 w-8 md:h-10 md:w-10 lg:h-11 lg:w-11", className?.avatar)}
        >
          <AvatarImage src={user?.image} />
          {user?.name && (
            <AvatarFallback>{transformNameInitials(user?.name)}</AvatarFallback>
          )}
        </Avatar>
      ))}
    </div>
  );
};

export { AvatarGroup };
