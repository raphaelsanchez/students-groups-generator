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
  } = useGroups();

  switch (state.screen) {
    case "input":
      return (
        <InputForm
          students={state.students}
          error={error}
          onStudentsChange={handleStudentsChange}
          onNext={handleNext}
        />
      );

    case "group-size":
      return (
        <GroupSizeSelector
          possibleSizes={state.possibleGroupSizes}
          onSelect={handleGroupSizeSelect}
        />
      );

    case "loading":
      return <LoadingView />;

    case "results":
      return <ResultsView groups={state.groups} onReset={handleReset} />;
  }
};

export default GroupsGenerator;
