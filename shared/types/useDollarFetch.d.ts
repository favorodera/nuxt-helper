import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'
import type { FetchError } from 'ofetch'


export type RequestMethod = 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'

export type RequestStatus = 'idle' | 'pending' | 'success' | 'error'

export type RequestHooks<DataT = unknown, ErrorT = unknown> = {
  onPending?: () => void | Promise<void>
  onSuccess?: (data: DataT) => void | Promise<void>
  onError?: (error: FetchError<ErrorT>) => void | Promise<void>
}

export type RequestOptions<DataT = unknown, ErrorT = unknown> = {
  $fetch?: NitroFetchOptions<NitroFetchRequest, Lowercase<RequestMethod>>
  hooks?: RequestHooks<DataT, ErrorT>
}
