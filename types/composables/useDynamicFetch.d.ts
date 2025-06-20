import type { FetchError, FetchOptions } from 'ofetch'

export type RequestStatus = 'idle' | 'pending' | 'success' | 'error'

export type RequestError<T> = FetchError<T> | null

export type RequestOptions = FetchOptions & {
  method?: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'
  immediate?: boolean
}
