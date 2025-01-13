import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface GroupSizeSelectorProps {
  possibleSizes: number[];
  totalStudents: number;
  onSelect: (size: number) => void;
}

export const GroupSizeSelector: React.FC<GroupSizeSelectorProps> = ({
  possibleSizes,
  totalStudents,
  onSelect,
}) => {
  return (
    <Card className="w-screen max-w-lg mx-auto m-8 bg-white">
      <CardHeader>
        <CardTitle>Select Group Size</CardTitle>
        <p>
          Choose how many students you want in each group ({totalStudents}{" "}
          students total)
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 flex-wrap">
          {possibleSizes.map((size) => {
            const numberOfGroups = Math.ceil(totalStudents / size);
            const description = `${numberOfGroups} group${
              numberOfGroups > 1 ? "s" : ""
            }`;

            return (
              <Button
                key={size}
                onClick={() => onSelect(size)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-2xl font-bold rounded-xl flex-1 py-4 flex flex-col gap-1"
              >
                <span>{size} students</span>
                <span className="text-sm font-normal">{description}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
