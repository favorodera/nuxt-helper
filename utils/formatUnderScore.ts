import type { FormatOptions } from '../types/utils/formatUnderScore'

/**
 * Format a string with underscores to a readable string
 * @param text - The string to format
 * @param options - The options to format the string
 * @returns The formatted string
 *
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/utils/formatUnderScore.md#formatunderscore formatUnderScore}
 */
export default function (text: string, options?: FormatOptions) {
  const { capitalizePositions = 'all', spacePositions = 'all' } = options || {}

  const blocks = text.split('_')

  let processedBlocks = [...blocks]

  if (capitalizePositions === 'all') {

    processedBlocks = processedBlocks.map(word => word.charAt(0).toUpperCase() + word.slice(1))

  } else if (Array.isArray(capitalizePositions)) {

    processedBlocks = processedBlocks.map((word, index) => {

      if (capitalizePositions.includes(index)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }

      return word
    })
  }

  if (spacePositions === 'all') {

    return processedBlocks.join(' ')

  } else if (Array.isArray(spacePositions)) {
    const result: (string | string)[] = [...processedBlocks]
    
    for (let positionIndex = spacePositions.length - 1; positionIndex >= 0; positionIndex--) {

      const currentPosition = spacePositions[positionIndex]

      if (currentPosition >= 0 && currentPosition < result.length - 1) {
        result.splice(currentPosition + 1, 0, ' ')
      }
    }
    
    return result.join('')
  }

  return processedBlocks.join('')
}
