import { Card, CardContent } from "@/components/ui/card";
import { Group } from "@/types/groups";
import React from "react";

interface GroupCardProps {
  group: Group;
  index: number;
}

export const GroupCard: React.FC<GroupCardProps> = ({ group, index }) => {
  return (
    <Card className="mb-4">
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
