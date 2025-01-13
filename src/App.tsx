import { GroupSizeSelector } from "@/components/GroupSizeSelector";
import { InputForm } from "@/components/InputForm";
import { LoadingView } from "@/components/LoadingView";
import { ResultsView } from "@/components/ResultsView";
import { useGroups } from "@/hooks/useGroups";
import React from "react";

/**
 * Main component for the groups generator application
 * Manages the display of either the input form or results view
 */
const GroupsGenerator: React.FC = () => {
  const {
    state,
    error,
    handleNext,
    handleReset,
    handleStudentsChange,
    handleGroupSizeSelect,
    getStudentsList,
    handleDeleteGroup,
    handleReshuffle,
    handleFileImport,
  } = useGroups();

  switch (state.screen) {
    case "input":
      return (
        <InputForm
          students={state.students}
          error={error}
          onStudentsChange={handleStudentsChange}
          onNext={handleNext}
          onFileImport={handleFileImport}
        />
      );

    case "group-size":
      return (
        <GroupSizeSelector
          possibleSizes={state.possibleGroupSizes}
          totalStudents={getStudentsList().length}
          onSelect={handleGroupSizeSelect}
        />
      );

    case "loading":
      return <LoadingView />;

    case "results":
      return (
        <ResultsView
          groups={state.groups}
          onReset={handleReset}
          onDeleteGroup={handleDeleteGroup}
          onReshuffle={handleReshuffle}
        />
      );
  }
};

export default GroupsGenerator;
