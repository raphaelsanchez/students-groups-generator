import { InputForm } from "@/components/InputForm";
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
    handleSubmit,
    handleReset,
    handleStudentsChange,
    handleNumberOfGroupsChange,
  } = useGroups();

  if (state.screen === "input") {
    return (
      <InputForm
        numberOfGroups={state.numberOfGroups}
        students={state.students}
        error={error}
        onNumberOfGroupsChange={handleNumberOfGroupsChange}
        onStudentsChange={handleStudentsChange}
        onSubmit={handleSubmit}
      />
    );
  }

  return <ResultsView groups={state.groups} onReset={handleReset} />;
};

export default GroupsGenerator;
