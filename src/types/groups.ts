/** Type representing the current screen state of the application */
export type Screen = 'input' | 'result'

/** Type representing a group of students */
export interface Group {
    students: string[]
}

/** Interface representing the global state of the groups generator */
export interface GroupsState {
    /** Current screen being displayed */
    screen: Screen
    /** Raw input string containing the list of students */
    students: string
    /** Number of groups to generate */
    numberOfGroups: number
    /** Array of generated groups */
    groups: Group[]
}
