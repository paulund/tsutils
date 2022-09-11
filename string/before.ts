export const before = (text: string, beforeText: string): string => {
    const before = text.split(beforeText)[0];
    if (before === text) {
        return '';
    }

    return before;
}