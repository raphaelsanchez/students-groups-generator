import { Group } from '@/types/groups'
import { useCallback, useState } from 'react'

/** Type representing the current screen of the application */
type Screen = 'input' | 'group-size' | 'loading' | 'results'

/** Interface representing the global state of the application */
interface State {
    /** Current screen being displayed */
    screen: Screen
    /** Currently selected group size */
    selectedGroupSize: number | null
    /** List of possible group sizes based on student count */
    possibleGroupSizes: number[]
    /** Generated groups of students */
    groups: Group[]
    /** Raw input string containing the list of students */
    students: string
}

/**
 * Hook managing the global state of the application
 * @returns Object containing state and state management functions
 */
export const useAppState = () => {
    const [state, setState] = useState<State>({
        screen: 'input',
        selectedGroupSize: null,
        possibleGroupSizes: [],
        groups: [],
        students: '',
    })

    /** Sets the current screen of the application */
    const setScreen = useCallback((screen: Screen) => {
        setState((prev) => ({ ...prev, screen }))
    }, [])

    /** Updates the list of possible group sizes */
    const setPossibleSizes = useCallback((sizes: number[]) => {
        setState((prev) => ({ ...prev, possibleGroupSizes: sizes }))
    }, [])

    /** Updates the generated groups */
    const setGroups = useCallback((groups: Group[]) => {
        setState((prev) => ({ ...prev, groups }))
    }, [])

    /** Updates the raw students input string */
    const setStudents = useCallback((value: string) => {
        setState((prev) => ({ ...prev, students: value }))
    }, [])

    /** Resets the application state to its initial values */
    const reset = useCallback(() => {
        setState({
            screen: 'input',
            selectedGroupSize: null,
            possibleGroupSizes: [],
            groups: [],
            students: '',
        })
    }, [])

    return {
        state,
        setScreen,
        setPossibleSizes,
        setGroups,
        reset,
        setStudents,
    }
}
