import {snake} from "./snake";

test('it can snake case this text', () => {
  expect(snake('this is the text to snake case!')).toBe('this_is_the_text_to_snake_case')
})
