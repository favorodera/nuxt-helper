import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'
import type { FetchError } from 'ofetch'

type RequestMethod = 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'

type RequestStatus = 'idle' | 'pending' | 'success' | 'error'

type RequestHooks<DataT = unknown, ErrorT = unknown> = {
  onPending?: () => void | Promise<void>
  onSuccess?: (data: DataT) => void | Promise<void>
  onError?: (error: FetchError<ErrorT>) => void | Promise<void>
}

type RequestOptions<DataT = unknown, ErrorT = unknown> = {
  $fetch?: NitroFetchOptions<NitroFetchRequest, Lowercase<RequestMethod>>
  hooks?: RequestHooks<DataT, ErrorT>
}

/** Reactive $fetch wrapper for data fetching in Nuxt. */
export default function<DataT = unknown, ErrorT = unknown>(
  request: NitroFetchRequest,
  initOptions: RequestOptions<DataT, ErrorT> = {},
  immediate = true,
) {

  const data = ref<DataT>()
  const status = ref<RequestStatus>('idle')
  const requestError = ref<FetchError<ErrorT>>()

  /**  Execute the $fetch request. */
  async function execute(optionsPatch?: RequestOptions<DataT, ErrorT>): Promise<DataT> {
    const options = deepMerge(initOptions, optionsPatch)

    // Reset state
    requestError.value = undefined
    status.value = 'pending'

    // Call pending hook
    await options.hooks?.onPending?.()

    try {
      const response = await $fetch<DataT>(request, options.$fetch)

      data.value = response
      status.value = 'success'

      await options.hooks?.onSuccess?.(response)
      return response

    } catch (err) {
      const error = err as FetchError<ErrorT>
      
      status.value = 'error'
      requestError.value = error

      await options.hooks?.onError?.(error)
      throw error
    }
  }

  // Execute immediately if requested
  if (immediate) {
    execute().catch(() => {
      // Ignore errors on immediate execution since they're handled in the reactive state
    })
  }

  return {
    data,
    status,
    error: requestError,
    execute,
  }
}
