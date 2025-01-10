import { GroupCard } from "@/components/GroupCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Group } from "@/types/groups";
import React from "react";

/** Props for the ResultsView component */
interface ResultsViewProps {
  /** Array of generated groups */
  groups: Group[];
  /** Handler for resetting the form */
  onReset: () => void;
}

/**
 * Component for displaying the generated groups
 * @param {ResultsViewProps} props - Component props
 */
export const ResultsView: React.FC<ResultsViewProps> = ({
  groups,
  onReset,
}) => (
  <Card className="w-screen max-w-lg mx-auto mt-8 bg-white">
    <CardHeader>
      <CardTitle>Groups Results 🚀</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {groups.map((group, index) => (
          <GroupCard key={`group-${index}`} group={group} index={index} />
        ))}
        <Button
          onClick={onReset}
          className="w-full border border-indigo-600 text-indigo-600 flex gap-2 items-center"
          type="button"
        >
          <span>Generate new groups</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"
            />
          </svg>
        </Button>
      </div>
    </CardContent>
  </Card>
);
