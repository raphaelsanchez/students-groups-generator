import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

/** Props for the InputForm component */
interface InputFormProps {
  /** Current number of groups */
  numberOfGroups: number;
  /** Current students list */
  students: string;
  /** Current error message */
  error: string;
  /** Handler for updating number of groups */
  onNumberOfGroupsChange: (value: number) => void;
  /** Handler for updating students list */
  onStudentsChange: (value: string) => void;
  /** Handler for form submission */
  onSubmit: () => void;
}

/**
 * Component for inputting students and group settings
 * @param {InputFormProps} props - Component props
 */
export const InputForm: React.FC<InputFormProps> = ({
  numberOfGroups,
  students,
  error,
  onNumberOfGroupsChange,
  onStudentsChange,
  onSubmit,
}) => (
  <Card className="w-screen max-w-lg mx-auto m-8 bg-white">
    <CardHeader>
      <CardTitle>Students Groups Generator</CardTitle>
      <p>Generate random groups from a students list past below</p>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="flex gap-4 items-center ">
          <div className="flex gap-2 items-center">
            <label htmlFor="groups-input" className="block text-sm font-medium">
              Number of groups desired:
            </label>

            <Button
              onClick={() =>
                onNumberOfGroupsChange(Math.max(2, numberOfGroups - 1))
              }
              className="bg-indigo-600 text-white h-10 w-10 p-0"
              type="button"
              aria-label="Decrease number of groups"
            >
              -
            </Button>
            <input
              type="text"
              min="2"
              value={numberOfGroups}
              onChange={(e) => onNumberOfGroupsChange(parseInt(e.target.value))}
              className="w-16 p-2 border rounded-md text-center"
              id="groups-input"
            />

            <Button
              onClick={() => onNumberOfGroupsChange(numberOfGroups + 1)}
              className="bg-indigo-600 text-white h-10 w-10 p-0"
              type="button"
              aria-label="Increase number of groups"
            >
              +
            </Button>
          </div>
        </div>
        <div>
          <label
            htmlFor="students-input"
            className="block text-sm font-medium mb-2"
          >
            Students list <em>(one per line)</em>:
          </label>
          <textarea
            id="students-input"
            value={students}
            onChange={(e) => onStudentsChange(e.target.value)}
            className={cn(
              "w-full h-48 p-2 border rounded-md",
              error && "border-red-500"
            )}
            placeholder="John&#10;Mary&#10;Peter&#10;Sophie"
            aria-label="Students list"
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
        <Button
          onClick={onSubmit}
          className="w-full bg-indigo-600 text-white flex items-center gap-2"
          type="button"
        >
          <span>Create shuffled groups</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M6.301 5.5a4.5 4.5 0 0 1 3.732 1.985l.127.2l4.252 7.087a1.5 1.5 0 0 0 1.13.72l.157.008h.741l.02-.312l.011-.14c.056-.719.749-1.17 1.331-.865l.314.168l.368.209a21 21 0 0 1 1.564 1.005l.385.28l.323.245l.137.107c.489.39.47 1.195-.05 1.606l-.136.107l-.32.242l-.38.275l-.438.301a22 22 0 0 1-.714.457l-.426.255l-.375.211l-.316.17c-.577.3-1.207-.085-1.261-.756l-.04-.565H15.7a4.5 4.5 0 0 1-3.732-1.985l-.127-.2l-4.252-7.087a1.5 1.5 0 0 0-1.13-.72L6.301 8.5H4a1.5 1.5 0 0 1-.144-2.993L4 5.5zm1.007 9.612L7.42 15a1.5 1.5 0 1 1 2.237 2a4.5 4.5 0 0 1-3.113 1.494l-.242.006H4a1.5 1.5 0 0 1-.144-2.993L4 15.5h2.301a1.5 1.5 0 0 0 1.007-.388m10.494-10.93l.314.17l.368.208q.197.114.417.248l.459.29q.375.246.688.467l.385.28l.323.245l.137.107c.489.39.47 1.195-.05 1.606l-.136.107l-.32.242l-.38.275l-.438.301a22 22 0 0 1-.714.457l-.426.255l-.375.211l-.316.17c-.577.3-1.207-.085-1.261-.756l-.04-.565H15.7a1.5 1.5 0 0 0-1.007.388L14.58 9a1.5 1.5 0 1 1-2.237-2a4.5 4.5 0 0 1 3.113-1.494l.242-.006h.741l.031-.452c.056-.719.749-1.17 1.331-.865Z"
              />
            </g>
          </svg>
        </Button>
      </div>
    </CardContent>
  </Card>
);
