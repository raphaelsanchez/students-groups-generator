/**
 * Parse CSV content into an array of student names
 * @param content CSV file content
 * @returns Array of student names
 */
export const parseCSV = (content: string): string[] => {
    return content
        .split(/[\r\n]+/) // Split on newlines
        .map((line) => line.split(',')[0]) // Take first column
        .map((name) => name.trim())
        .filter(Boolean) // Remove empty lines
}
