import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

/** Props for the InputForm component */
interface InputFormProps {
  /** Current students list */
  students: string;
  /** Current error message */
  error: string;
  /** Handler for updating students list */
  onStudentsChange: (value: string) => void;
  /** Handler for form submission */
  onNext: () => void;
}

/**
 * Component for inputting students and group settings
 * @param {InputFormProps} props - Component props
 */
export const InputForm: React.FC<InputFormProps> = ({
  students,
  error,
  onStudentsChange,
  onNext,
}) => (
  <Card className="w-screen max-w-lg mx-auto bg-white">
    <CardHeader>
      <CardTitle>Students Groups Generator</CardTitle>
      <p>Generate random groups from a students list past below</p>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
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
          />
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
        <Button
          onClick={onNext}
          className="w-full bg-indigo-600 text-white"
          type="button"
        >
          Next
        </Button>
      </div>
    </CardContent>
  </Card>
);
