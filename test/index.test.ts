import { describe } from '@jest/globals'
import { camelKebab } from '../src'

describe('camel-kebab', () => {
  test('should make a normal string camel-kebab case', () => {
    const sensibleString = 'A sensible string'
    const unsensibleString = camelKebab(sensibleString)
    expect(unsensibleString).toBe('a-Sensible-String')
  })

  test('should make a Pascal-cased string camel-kebab case', () => {
    const sensibleString = 'A Sensible String'
    const unsensibleString = camelKebab(sensibleString)
    expect(unsensibleString).toBe('a-Sensible-String')
  })

  test('should make a camel-cased string camel-kebab case', () => {
    const sensibleString = 'aSensibleString'
    const unsensibleString = camelKebab(sensibleString)
    expect(unsensibleString).toBe('a-Sensible-String')
  })

  test('should make a kebab-cased string camel-kebab case', () => {
    const sensibleString = 'a-sensible-string'
    const unsensibleString = camelKebab(sensibleString)
    expect(unsensibleString).toBe('a-Sensible-String')
  })

  test('should make a mixed-case string camel-kebab case', () => {
    const sensibleString = 'a-sensibleMixed String'
    const unsensibleString = camelKebab(sensibleString)
    expect(unsensibleString).toBe('a-Sensible-Mixed-String')
  })

  test('should make a normal string with unnecessary spaces camel-kebab case', () => {
    const sensibleString = 'A    sensible       string'
    const unsensibleString = camelKebab(sensibleString)
    expect(unsensibleString).toBe('a-Sensible-String')
  })

  test('should ignore an empty string', () => {
    const sensibleString = ''
    const unsensibleString = camelKebab(sensibleString)
    expect(unsensibleString).toBe('')
  })
})
