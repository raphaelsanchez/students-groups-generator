import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface GroupSizeSelectorProps {
  possibleSizes: number[];
  onSelect: (size: number) => void;
}

export const GroupSizeSelector: React.FC<GroupSizeSelectorProps> = ({
  possibleSizes,
  onSelect,
}) => {
  return (
    <Card className="w-screen max-w-lg mx-auto m-8 bg-white">
      <CardHeader>
        <CardTitle>Select Group Size</CardTitle>
        <p>Choose how many students you want in each group</p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 flex-wrap">
          {possibleSizes.map((size) => (
            <Button
              key={size}
              onClick={() => onSelect(size)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-2xl font-bold rounded-lg aspect-square flex items-center justify-center w-16 h-16"
            >
              {size}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
