import { Group } from "@/types/groups";
import React from "react";

/** Props for the GroupCard component */
interface GroupCardProps {
  /** The group of students to display */
  group: Group;
  /** The index of the group */
  index: number;
}

/**
 * Component for displaying a single group of students
 * @param {GroupCardProps} props - Component props
 */
export const GroupCard: React.FC<GroupCardProps> = ({ group, index }) => (
  <div className=" bg-indigo-100 rounded-lg border border-indigo-600 overflow-hidden">
    <h3 className="px-4 py-2 bg-indigo-600 text-white font-bold text-center mb-2">
      Group {index + 1}
    </h3>
    <div className="p-4 flex flex-wrap gap-2 justify-center">
      {group.map((student, studentIndex) => (
        <span
          key={`student-${studentIndex}`}
          className="px-4 text-indigo-700 py-1 bg-white rounded-full shadow-sm  font-bold"
        >
          {student}
        </span>
      ))}
    </div>
  </div>
);
