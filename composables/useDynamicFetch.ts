import type { FetchError } from 'ofetch'
import type { RequestError, RequestOptions, RequestStatus } from '~/types/composables/useDynamicFetch'

/**
 * A `$fetch` wrapper composable for dynamic data fetching on the client side.
 *
 * @param initUrl - Initial URL to fetch data from (optional but required if `initOptions.immediate` is `true`).
 * @param initOptions - Initial options for `$fetch` (optional).
 *
 * @default initOptions.immediate = true
 *
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/composables/useDynamicFetch.md#usedynamicfetch useDynamicFetch}
 */
export default async function<DataT = unknown, ErrorT = unknown>(initUrl?: string, initOptions?: RequestOptions) {
  const { immediate = true, ...oFetchOptions } = initOptions || {}

  const data = ref<DataT | null>(null)
  const requestStatus = ref<RequestStatus>('idle')
  const requestError = ref<RequestError<ErrorT>>(null)

  /**
   * Execute the `$fetch` request
   *
   * @param executeUrl - Per-execution URL to fetch data from (optional if `initUrl` is provided).
   * @param executeOptions - Per-execution options for `$fetch` (optional).
   *
   * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/composables/useDynamicFetch.md#usedynamicfetch useDynamicFetch}
   */
  async function execute(executeUrl?: string, executeOptions?: Omit<RequestOptions, 'immediate'>) {

    const url = executeUrl ?? initUrl

    if (!url) {
      throw new Error('Request URL is required either in initialization or execution')
    }

    const options = { ...oFetchOptions, ...(executeOptions || {}) }

    requestStatus.value = 'pending'
    requestError.value = null

    try {
      const response = await $fetch<DataT>(url, options)
      data.value = response
      requestStatus.value = 'success'
      return response
    }
    catch (error) {
      requestStatus.value = 'error'
      requestError.value = error as FetchError<ErrorT>
      throw error
    }
  }

  if (immediate) {

    if (!initUrl) {
      throw new Error('Initial URL is required when immediate=true')
    }

    await execute()
  }

  return {
    data,
    status: requestStatus,
    error: requestError,
    execute,
  }
}
