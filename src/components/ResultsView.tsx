import { GroupCard } from "@/components/GroupCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Group } from "@/types/groups";
import React from "react";
import generatePDF, { Margin, Resolution } from "react-to-pdf";

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
}) => {
  const targetRef = React.useRef(null);

  const handleExportPDF = () =>
    generatePDF(targetRef, {
      method: "open",
      resolution: Resolution.HIGH,
      page: {
        margin: Margin.SMALL,
        format: "letter",
        orientation: "portrait",
      },
      canvas: {
        mimeType: "image/png",
        qualityRatio: 1,
      },
      overrides: {
        pdf: {
          compress: true,
        },
        canvas: {
          useCORS: true,
        },
      },
    });

  return (
    <Card className="w-screen max-w-lg mx-auto mt-8 bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Groups Results 🚀</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={targetRef} className="mb-4 mx-auto max-w-md">
          {groups.map((group, index) => (
            <GroupCard key={`group-${index}`} group={group} index={index} />
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            onClick={handleExportPDF}
            className="bg-indigo-600 text-white flex items-center gap-2 flex-1"
            type="button"
            title="Export as PDF"
          >
            <span className="hidden sm:inline">Export PDF</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V9H8c.8 0 1.5.7 1.5 1.5zm5 2c0 .8-.7 1.5-1.5 1.5h-2.5V9H13c.8 0 1.5.7 1.5 1.5zm4-3H17v1h1.5V13H17v2h-1.5V9h3zm-6 2v-1.5h-2V13z"
              />
            </svg>
          </Button>
          <Button
            onClick={onReset}
            className="w-full border border-indigo-600 text-indigo-600 flex gap-2 items-center flex-1"
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
};
