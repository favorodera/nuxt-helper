import type { FormatOptions } from '../types/utils/formatUnderScore'

/**
 * Format a string with underscores to a readable string
 * @param text - The string to format
 * @param options - The options to format the string
 * @returns The formatted string
 *
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/utils/formatUnderScore.md#formatunderscore formatUnderScore}
 */
export default function formatUnderScore(text: string, options?: FormatOptions) {
  const { capitalizePositions = 'all', spacePositions = 'all' } = options || {}

  const blocks = text.split('_')

  if (capitalizePositions === 'all') {
    return blocks.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  let processedBlocks = blocks

  if (capitalizePositions && Array.isArray(capitalizePositions)) {
    const capitalizePositionsRef = capitalizePositions

    processedBlocks = blocks.map((word, index) => {
      if (capitalizePositionsRef.includes(index)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word
    })
  }

  if (spacePositions === 'all') {
    return processedBlocks.join(' ')
  }

  if (spacePositions && Array.isArray(spacePositions)) {
    const spacePositionsRef = spacePositions
    
    for (let positionIndex = spacePositions.length - 1; positionIndex >= 0; positionIndex--) {
      const currentPosition = spacePositionsRef[positionIndex]
      if (currentPosition >= 0 && currentPosition < processedBlocks.length - 1) {
        processedBlocks.splice(currentPosition + 1, 0, ' ')
      }
    }
    
    return processedBlocks.join('')
  }

  if (capitalizePositions && !spacePositions) {
    return processedBlocks.join(' ')
  }

  return processedBlocks.join('')
}
