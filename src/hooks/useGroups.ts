import { useCallback } from 'react'
import { useAppState } from './useAppState'
import { useGrouping } from './useGrouping'
import { useStudents } from './useStudents'

/**
 * Main hook orchestrating the group generation process
 * Combines state management, student input handling, and group creation
 * @returns Object containing application state and event handlers
 */
export const useGroups = () => {
    const {
        state,
        setScreen,
        setPossibleSizes,
        setGroups,
        reset,
        setStudents,
    } = useAppState()
    const { error, handleStudentsChange, getStudentsList, validateStudents } =
        useStudents(state.students, setStudents)
    const { calculatePossibleGroupSizes, createGroups, redistributeGroup } =
        useGrouping()

    /** Handles the "Next" button click in the input form */
    const handleNext = useCallback(() => {
        if (!validateStudents()) return

        const studentsList = getStudentsList()
        const possibleSizes = calculatePossibleGroupSizes(studentsList.length)
        setPossibleSizes(possibleSizes)
        setScreen('group-size')
    }, [
        validateStudents,
        getStudentsList,
        calculatePossibleGroupSizes,
        setPossibleSizes,
        setScreen,
    ])

    /**
     * Handles group size selection and triggers group generation
     * @param size - Selected group size
     */
    const handleGroupSizeSelect = useCallback(
        (size: number) => {
            setScreen('loading')
            setTimeout(() => {
                const groups = createGroups(getStudentsList(), size)
                setGroups(groups)
                setScreen('results')
            }, 1500)
        },
        [createGroups, getStudentsList, setGroups, setScreen]
    )

    const handleDeleteGroup = useCallback(
        (groupIndex: number) => {
            const newGroups = redistributeGroup(state.groups, groupIndex)
            setGroups(newGroups)
        },
        [state.groups, redistributeGroup, setGroups]
    )

    return {
        state,
        error,
        handleStudentsChange,
        handleNext,
        handleGroupSizeSelect,
        handleReset: reset,
        getStudentsList,
        handleDeleteGroup,
    }
}
