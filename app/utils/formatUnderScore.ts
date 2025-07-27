export type FormatUnderScoreOptions = {
  capitalizePositions?: number[] | 'all'
  spacePositions?: number[] | 'all'
}

/**
 * Formats an underscore-separated string with capitalization and spacing options.
 */
export default function (
  text: string,
  options: FormatUnderScoreOptions = {},
) {
  const { capitalizePositions = 'all', spacePositions = 'all' } = options

  const blocks = text.split('_')

  // Apply capitalization
  const processedBlocks = blocks.map((block, index) => {
    const shouldCapitalize = capitalizePositions === 'all'
      || (Array.isArray(capitalizePositions) && capitalizePositions.includes(index))

    return shouldCapitalize
      ? block.charAt(0).toUpperCase() + block.slice(1).toLowerCase()
      : block.toLowerCase()
  })

  // Apply spacing
  if (spacePositions === 'all') {
    return processedBlocks.join(' ')
  }

  if (Array.isArray(spacePositions)) {
    return processedBlocks.reduce((result, block, index) => {
      const shouldAddSpace = index > 0 && spacePositions.includes(index - 1)
      return result + (shouldAddSpace ? ' ' : '') + block
    }, '')
  }

  return processedBlocks.join('')
}
