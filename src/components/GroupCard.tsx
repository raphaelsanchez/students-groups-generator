import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Group } from "@/types/groups";
import React, { useState } from "react";

interface GroupCardProps {
  group: Group;
  index: number;
  onDelete?: (index: number) => void;
}

export const GroupCard: React.FC<GroupCardProps> = ({
  group,
  index,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="mb-4 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && onDelete && (
        <Button
          onClick={() => onDelete(index)}
          className="absolute -top-2 -right-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full w-8 h-8 p-0 flex items-center justify-center"
          title="Delete group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
            />
          </svg>
        </Button>
      )}
      <CardContent className="pt-6">
        <h3 className="font-bold mb-2">Group {index + 1}</h3>
        <ul className="list-disc pl-4">
          {group.students.map((student, studentIndex) => (
            <li key={studentIndex}>{student}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
