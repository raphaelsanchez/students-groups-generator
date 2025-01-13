import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const LoadingView: React.FC = () => {
  return (
    <Card className="w-screen max-w-lg mx-auto m-8 bg-white">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600" />
        <p className="mt-4 text-lg">Creating groups...</p>
      </CardContent>
    </Card>
  );
};
