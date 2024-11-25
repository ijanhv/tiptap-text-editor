import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserGroup() {
  const users = [
    { id: 1, image: "https://i.pravatar.cc/100?img=1" },
    { id: 2, image: "https://i.pravatar.cc/100?img=2" },
    { id: 3, image: "https://i.pravatar.cc/100?img=3" },
    { id: 4, image: "https://i.pravatar.cc/100?img=4" },
    { id: 5, text: "100K+" },
  ];

  return (
    <div className="flex -space-x-3">
      {users.map((user) => (
        <Avatar key={user.id} className="w-10 h-10 border-2 border-cream">
          {user.image ? (
            <AvatarImage src={user.image} alt="User" />
          ) : (
            <AvatarFallback className="bg-gray-200 text-xs">
              {user.text}
            </AvatarFallback>
          )}
        </Avatar>
      ))}
    </div>
  );
}
