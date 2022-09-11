export const between = (text: string, start: string, end: string): string => {
    const between = text.split(start).pop().split(end)[0];

    if (between === text) {
        return '';
    }

    return between;
}