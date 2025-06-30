declare global {
  export type FormatUnderScoreOptions = {
    /** Zero index of positions of the blocks (if they are words) to be capitalized. If `all`, all words will be capitalized.
     * @example ```ts
     * formatUnderScore('test_test_test', { capitalizePositions: [1] }) // 'test Test test'
     * ```
     * @default `all`
     */
    capitalizePositions?: number[] | 'all'
    /** Zero index of positions to add space between blocks. If `all`, all blocks will have a space between them.
     * @example ```ts
     * formatUnderScore('test_test_test', { spacePositions: [1] }) // 'test test test'
     * ```
     * @default `all`
     */
    spacePositions?: number[] | 'all'
  }
}

export {}
