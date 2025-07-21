/**
 * Deeply merges two objects. Arrays from the patch overwrite those in the base.
 *
 * @template T - The type of the objects to merge.
 * @param {T} [base={}] - The base object.
 * @param {T} [patch={}] - The patch object whose properties will overwrite or merge into the base.
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/app/docs/utils/deepMerge.md#deepmerge deepMerge}
 */
export default function deepMerge<T extends object>(base: T = {} as T, patch: T = {} as T) {
  const output = { ...base }
  
  for (const key in patch) {
    if (Object.prototype.hasOwnProperty.call(patch, key)) {

      const baseVal = output[key]
      const patchVal = patch[key]

      if (Array.isArray(baseVal) && Array.isArray(patchVal)) {
        output[key] = patchVal
      } else if (baseVal && typeof baseVal === 'object' && patchVal && typeof patchVal === 'object') {
        output[key] = deepMerge(baseVal as object, patchVal as object) as T[typeof key]
      } else {
        output[key] = patchVal
      }
    }
  }
  return output
}
