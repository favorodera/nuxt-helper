import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'
import type { FetchError } from 'ofetch'

/**
 * Reactive $fetch wrapper for data fetching in Nuxt.
 * @template DataT, ErrorT
 * @param {NitroFetchRequest} request - The request URL or endpoint.
 * @param {NitroFetchOptions} [initOptions] - Initial fetch options.
 * @param {boolean} [immediate=true] - If true, executes immediately.
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/docs/composables/useDollarFetch.md#usedollarfetch useDollarFetch}
 */
export default function<DataT = unknown, ErrorT = unknown>(request: NitroFetchRequest, initOptions?: NitroFetchOptions<NitroFetchRequest, Lowercase<RequestMethod>>, immediate: boolean = true) {

  const data = ref<DataT | null>(null)
  const status = ref<RequestStatus>('idle')
  const requestError = ref<FetchError<ErrorT> | null>(null)

  /**
   * Execute the `$fetch` request.
   *
   * @param optionsPatch - Patch the initial options for the request.
   *
   * @returns The response from the `$fetch` request.
   */
  async function execute(optionsPatch?: NitroFetchOptions<NitroFetchRequest, Lowercase<RequestMethod>>) {

    const options = { ...initOptions, ...optionsPatch }

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


