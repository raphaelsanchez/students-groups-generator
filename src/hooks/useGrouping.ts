import { Group } from '@/types/groups'
import { useCallback } from 'react'

/**
 * Hook containing group generation logic
 * @returns Object with group calculation and creation functions
 */
export const useGrouping = () => {
    /**
     * Calculates possible group sizes based on total student count
     * @param studentCount - Total number of students
     * @returns Array of possible group sizes
     */
    const calculatePossibleGroupSizes = useCallback((studentCount: number) => {
        const sizes = []
        for (let i = 2; i <= Math.floor(studentCount / 2); i++) {
            if (studentCount % i <= Math.floor(i / 2)) {
                sizes.push(i)
            }
        }
        return sizes
    }, [])

    /**
     * Creates groups from a list of students
     * @param studentsList - Array of student names
     * @param size - Desired size for each group
     * @returns Array of student groups
     */
    const createGroups = useCallback(
        (studentsList: string[], size: number): Group[] => {
            const shuffled = [...studentsList].sort(() => Math.random() - 0.5)
            const groups: Group[] = []

            // Create complete groups
            for (
                let i = 0;
                i < Math.floor(shuffled.length / size) * size;
                i += size
            ) {
                groups.push({
                    students: shuffled.slice(i, i + size),
                })
            }

            // Gérer les étudiants restants
            const remainingStudents = shuffled.slice(
                Math.floor(shuffled.length / size) * size
            )
            if (remainingStudents.length === 1) {
                const randomGroupIndex = Math.floor(
                    Math.random() * groups.length
                )
                groups[randomGroupIndex].students.push(remainingStudents[0])
            } else if (remainingStudents.length > 1) {
                groups.push({
                    students: remainingStudents,
                })
            }

            return groups
        },
        []
    )

    const redistributeGroup = useCallback(
        (groups: Group[], groupIndexToRemove: number): Group[] => {
            const newGroups = [...groups]
            const studentsToRedistribute =
                newGroups[groupIndexToRemove].students
            newGroups.splice(groupIndexToRemove, 1)

            // Redistribuer les étudiants un par un
            studentsToRedistribute.forEach((student) => {
                // Trouver le groupe le plus petit
                const smallestGroupIndex = newGroups
                    .map((g, index) => ({ size: g.students.length, index }))
                    .sort((a, b) => a.size - b.size)[0].index

                newGroups[smallestGroupIndex].students.push(student)
            })

            return newGroups
        },
        []
    )

    const reshuffleGroups = useCallback((groups: Group[]): Group[] => {
        // Récupérer tous les étudiants
        const allStudents = groups.flatMap((g) => g.students)
        const shuffled = [...allStudents].sort(() => Math.random() - 0.5)

        // Recréer les groupes avec la même structure
        return groups.map((group, index) => ({
            students: shuffled.slice(
                index * group.students.length,
                (index + 1) * group.students.length
            ),
        }))
    }, [])

    return {
        calculatePossibleGroupSizes,
        createGroups,
        redistributeGroup,
        reshuffleGroups,
    }
}
