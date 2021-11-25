/**
 * Transforms strings with spaces, camel-casing, kebab-casing or Pascal casing to a useless camel-kebab cased string.
 * @param [input]
 * @returns A string in the camel-kebab format
 */
export const camelKebab = (input: string) => {
  input = camelize(input)
  const matcher = new RegExp('(?<!-)([A-Z])', 'g')
  let match: RegExpExecArray | null = null
  while ((match = matcher.exec(input)) !== null) {
    const characters = input.split('')
    characters.splice(match.index, 1, `-${input.charAt(match.index)}`)
    input = characters.join('')
  }

  return input
}

/** https://stackoverflow.com/a/2970667 */
const camelize = (input: string) =>
  input
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '')
