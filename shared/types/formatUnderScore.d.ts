export type FormatUnderScoreOptions = {
  /** Zero index of positions of the blocks (if alphabets) to be capitalized.
      * @default `all`
      */
  capitalizePositions?: number[] | 'all'
  /** Zero index of positions to add space between blocks.
      * @default `all`
      */
  spacePositions?: number[] | 'all'
}
 
