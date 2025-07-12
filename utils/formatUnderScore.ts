 type FormatUnderScoreOptions = {
   /** Zero index of positions of the blocks (if alphabets) to be capitalized.
     * @default `all`
     */
   capitalizePositions?: number[] | 'all'
   /** Zero index of positions to add space between blocks.
     * @default `all`
     */
   spacePositions?: number[] | 'all'
 }


/**
 * Format a string with underscores to a readable string
 * @param text - The string to format
 * @param options - The options to format the string
 * @returns The formatted string
 *
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/utils/formatUnderScore.md#formatunderscore formatUnderScore}
 */
export default function (text: string, options?: FormatUnderScoreOptions) {
  const { capitalizePositions = 'all', spacePositions = 'all' } = options || {}

  const blocks = text.split('_')

  let processedBlocks = [...blocks]

  if (capitalizePositions === 'all') {

    processedBlocks = processedBlocks.map(block => block.charAt(0).toUpperCase() + block.slice(1))

  } else if (Array.isArray(capitalizePositions)) {

    processedBlocks = processedBlocks.map((block, index) => {

      if (capitalizePositions.includes(index)) {
        return block.charAt(0).toUpperCase() + block.slice(1)
      }

      return block
    })
  }

  if (spacePositions === 'all') {

    return processedBlocks.join(' ')

  } else if (Array.isArray(spacePositions)) {
    const result: (string | string)[] = [...processedBlocks]
    
    for (let positionIndex = spacePositions.length - 1; positionIndex >= 0; positionIndex--) {

      const currentPosition = spacePositions[positionIndex]

      if (currentPosition && currentPosition >= 0 && currentPosition < result.length - 1) {
        result.splice(currentPosition + 1, 0, ' ')
      }
    }
    
    return result.join('')
  }

  return processedBlocks.join('')
}
