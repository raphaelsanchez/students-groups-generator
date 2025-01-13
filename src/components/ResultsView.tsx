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
  /** Handler for deleting a group */
  onDeleteGroup: (index: number) => void;
  /** Handler for reshuffling students */
  onReshuffle: () => void;
}

/**
 * Component for displaying the generated groups
 * @param {ResultsViewProps} props - Component props
 */
export const ResultsView: React.FC<ResultsViewProps> = ({
  groups,
  onReset,
  onDeleteGroup,
  onReshuffle,
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
    <Card className="w-screen max-w-xl mx-auto mt-8 bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Groups Results 🚀</CardTitle>
        <Button
          onClick={onReshuffle}
          className="border border-indigo-600 text-indigo-600 flex items-center gap-2 flex-shrink"
          type="button"
          aria-label="Reshuffle students into new random groups"
        >
          <span className="sr-only">Reshuffle Students</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
            aria-hidden="true"
            role="img"
            focusable="false"
          >
            <title>Reshuffle icon</title>
            <path
              fill="currentColor"
              d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9S384 204.8 384 191.8v-32h-32c-10.1 0-19.6 4.7-25.6 12.8L284 229.3L244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6M164 282.7l40 53.3l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c10.1 0 19.6-4.7 25.6-12.8zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9S383.9 461 383.9 448v-32h-32c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c30.2 0 58.7 14.2 76.8 38.4l153.6 204.8c6 8.1 15.5 12.8 25.6 12.8h32v-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"
            />
          </svg>
        </Button>
      </CardHeader>
      <CardContent>
        <div ref={targetRef} className="mb-4 mx-auto ">
          {groups.map((group, index) => (
            <GroupCard
              key={`group-${index}`}
              group={group}
              index={index}
              onDelete={groups.length > 2 ? onDeleteGroup : undefined}
            />
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
