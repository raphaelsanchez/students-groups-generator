import { Group, GroupsState } from '@/types/groups'
import { useState } from 'react'

/** Interface defining the return type of the useGroups hook */
interface UseGroupsReturn {
    /** Current state of the groups generator */
    state: GroupsState
    /** Current error message, if any */
    error: string
    /** Handler for form submission */
    handleSubmit: () => void
    /** Handler for resetting the form */
    handleReset: () => void
    /** Handler for updating the students list */
    handleStudentsChange: (value: string) => void
    /** Handler for updating the number of groups */
    handleNumberOfGroupsChange: (value: number) => void
}

/** Initial state for the groups generator */
const INITIAL_STATE: GroupsState = {
    screen: 'input',
    students: '',
    numberOfGroups: 2,
    groups: [],
}

/**
 * Custom hook for managing the groups generator state and logic
 * @returns {UseGroupsReturn} Object containing state and handlers
 */
export function useGroups(): UseGroupsReturn {
    const [state, setState] = useState<GroupsState>(INITIAL_STATE)
    const [error, setError] = useState<string>('')

    /**
     * Generates random groups from a list of students
     * @param {string[]} students - Array of student names
     * @param {number} numberOfGroups - Number of groups to generate
     * @returns {Group[]} Array of generated groups
     */
    const generateGroups = (
        students: string[],
        numberOfGroups: number
    ): Group[] => {
        const shuffledStudents = [...students].sort(() => Math.random() - 0.5)
        const groups: Group[] = Array.from({ length: numberOfGroups }, () => [])

        shuffledStudents.forEach((student, index) => {
            const groupIndex = index % numberOfGroups
            groups[groupIndex].push(student)
        })

        return groups
    }

    /** Handles form submission and group generation */
    const handleSubmit = (): void => {
        setError('')

        if (!state.students.trim()) {
            setError('La liste des élèves ne peut pas être vide')
            return
        }

        const studentsList = state.students
            .split('\n')
            .map((student) => student.trim())
            .filter((student): student is string => student !== '')

        if (studentsList.length < state.numberOfGroups) {
            setError(
                `Il faut au moins ${state.numberOfGroups} élèves pour former ${state.numberOfGroups} groupes`
            )
            return
        }

        const newGroups = generateGroups(studentsList, state.numberOfGroups)
        setState((prevState) => ({
            ...prevState,
            groups: newGroups,
            screen: 'result',
        }))
    }

    /** Resets the form to its initial state */
    const handleReset = (): void => {
        setState(INITIAL_STATE)
    }

    /**
     * Updates the students list in the state
     * @param {string} value - New students list value
     */
    const handleStudentsChange = (value: string): void => {
        setState((prev) => ({ ...prev, students: value }))
    }

    /**
     * Updates the number of groups in the state
     * @param {number} value - New number of groups
     */
    const handleNumberOfGroupsChange = (value: number): void => {
        setState((prev) => ({ ...prev, numberOfGroups: value || 2 }))
    }

    return {
        state,
        error,
        handleSubmit,
        handleReset,
        handleStudentsChange,
        handleNumberOfGroupsChange,
    }
}
