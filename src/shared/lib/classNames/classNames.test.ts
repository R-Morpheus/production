import {classNames} from "./classNames";

describe('classNames', () => {
  test('with only first parap', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional param', () => {
    const result = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(result)
  })

  test('with mods', () => {
    const result = 'someClass class1 class2 hovered scrollable'
    expect(classNames(
      'someClass',
      {hovered: true, scrollable: true},
      ['class1', 'class2']))
      .toBe(result)
  })

  test('with mods false', () => {
    const result = 'someClass class1 class2 hovered'
    expect(classNames(
      'someClass',
      {hovered: true, scrollable: false},
      ['class1', 'class2']))
      .toBe(result)
  })

  test('with mods undefined', () => {
    const result = 'someClass class1 class2 hovered'
    expect(classNames(
      'someClass',
      {hovered: true, scrollable: undefined},
      ['class1', 'class2']))
      .toBe(result)
  })
})