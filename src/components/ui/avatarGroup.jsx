import { transformNameInitials } from "@/utils/transformNameInitials";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const AvatarGroup = ({ users }) => {
  return (
    <div className="flex -space-x-3 *:ring-2 *:ring-white">
      {users?.map((user, idx) => (
        <Avatar
          key={user?.key || idx}
          className="h-8 w-8 md:h-10 md:w-10 lg:h-11 lg:w-11"
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
