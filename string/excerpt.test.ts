import {excerpt} from "./excerpt";

test('it shows the excerpt of the text', () => {
    const startingText = 'Sint dolor ad consectetur aliquip minim eiusmod Lorem et cillum consectetur quis.';
    expect(excerpt(startingText, 10)).toBe('Sint dolor...')
    expect(excerpt(startingText, 10, '[...]')).toBe('Sint dolor[...]')
})