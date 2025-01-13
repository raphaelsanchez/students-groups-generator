import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { parseCSV } from "@/utils/csvParser";
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
  /** Handler for importing CSV */
  onFileImport: (students: string[]) => void;
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
  onFileImport,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const students = parseCSV(content);
      onFileImport(students);
    };
    reader.readAsText(file);
  };

  return (
    <Card className="w-screen max-w-xl mx-auto bg-white">
      <CardHeader>
        <CardTitle>Students Groups Generator</CardTitle>
        <p>Generate random groups from a students list past below</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => document.getElementById("csv-input")?.click()}
              className="border border-indigo-600 text-indigo-600"
              type="button"
            >
              Import from CSV
            </Button>
            <input
              id="csv-input"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={handleFileChange}
            />
            <p className="text-sm text-gray-500">or paste your list below</p>
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
};
