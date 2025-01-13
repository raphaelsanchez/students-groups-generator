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
          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 p-0 flex items-center justify-center"
          title="Delete group"
        >
          ×
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
