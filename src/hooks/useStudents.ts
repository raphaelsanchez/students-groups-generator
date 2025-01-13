import { useCallback, useState } from 'react'

/**
 * Hook managing student list input and validation
 * @param students - Current students input string
 * @param setStudents - Function to update students input
 * @returns Object containing student-related state and functions
 */
export const useStudents = (
    students: string,
    setStudents: (value: string) => void
) => {
    /** Error message if validation fails */
    const [error, setError] = useState('')

    /** Handles changes to the students input field */
    const handleStudentsChange = useCallback(
        (value: string) => {
            setStudents(value)
            setError('')
        },
        [setStudents]
    )

    /** Converts the raw input string into an array of student names */
    const getStudentsList = useCallback(() => {
        return students
            .trim()
            .split('\n')
            .filter((s) => s.trim())
    }, [students])

    /** Validates that there are enough students (minimum 4) */
    const validateStudents = useCallback(() => {
        const list = getStudentsList()
        if (list.length < 4) {
            setError('Please enter at least 4 students')
            return false
        }
        return true
    }, [getStudentsList])

    return {
        students,
        error,
        handleStudentsChange,
        getStudentsList,
        validateStudents,
    }
}
