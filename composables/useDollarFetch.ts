import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'
import type { FetchError } from 'ofetch'


type RequestStatus = 'idle' | 'pending' | 'success' | 'error'
type RequestMethod = 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'

/**
 * A `$fetch` wrapper for data fetching.
 *
 * @param request - The request URL to fetch data from.
 * @param options - The options for the request.
 * @param immediate - If `true`, the request will be executed immediately.
 *
 * @default immediate = true
 *
 * @returns An object containing the refs `data`, `status`, `error`, and the `execute` function.
 *
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/utils/useDollarFetch.md#usedollarfetch useDollarFetch}
 */
export default function<DataT = unknown, ErrorT = unknown>(request: NitroFetchRequest, options?: NitroFetchOptions<NitroFetchRequest, Lowercase<RequestMethod>>, immediate: boolean = true) {

  const data = ref<DataT | null>(null)
  const status = ref<RequestStatus>('idle')
  const requestError = ref<FetchError<ErrorT> | null>(null)

  /**
   * Execute the `$fetch` request.
   *
   * @returns The response from the `$fetch` request.
   */
  async function execute() {

    status.value = 'pending'
    requestError.value = null
    
    try {
      const response = await $fetch<DataT>(request, options)

      data.value = response

      status.value = 'success'
      return response

    } catch (error) {
      status.value = 'error'
      requestError.value = error as FetchError<ErrorT>
      throw error
    }

  }

  if (immediate) {
    execute()
  }

  return {
    data,
    status,
    error: requestError,
    execute,
  }
}


