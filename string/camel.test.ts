import {camel} from "./camel";

test('it will camelcase text', () => {
    expect(camel('CamelCaseClassName')).toBe('camelCaseClassName')
    expect(camel('Camel Case Class Name')).toBe('camelCaseClassName')
    expect(camel('Camel CaseClassName')).toBe('camelCaseClassName')
    expect(camel('camel case class name')).toBe('camelCaseClassName')
    expect(camel('CamelCase ClassName')).toBe('camelCaseClassName')
    expect(camel('CamelCaseClass Name')).toBe('camelCaseClassName')
});