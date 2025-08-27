/**
 * Deeply merges two objects. Arrays from patch overwrite base arrays.
 */
export default function deepMerge<T extends object>(
  base: T = {} as T,
  patch: T = {} as T,
) {
  const output = { ...base }
  
  for (const key in patch) {
    const baseVal = output[key]
    const patchVal = patch[key]

    if (Array.isArray(patchVal)) {
      output[key] = patchVal
    } else if (
      baseVal
      && typeof baseVal === 'object'
      && patchVal
      && typeof patchVal === 'object'
      && !Array.isArray(baseVal)
    ) {
      // Deep merge objects (but not arrays)
      output[key] = deepMerge(baseVal, patchVal)
    } else {
      // Primitive values overwrite
      output[key] = patchVal
    }
  }
  
  return output
}
