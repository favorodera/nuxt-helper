import type { FetchError, FetchOptions } from 'ofetch'

declare global {
  /**
   * The status of the request.
   */
  type RequestStatus = 'idle' | 'pending' | 'success' | 'error'

  /**
   * The error of the request.
   */
  type RequestError<T> = FetchError<T> | null


  type RequestOptions = FetchOptions & {
    /**
     * @default 'GET'
     */
    method?: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'
    /**
     * If `true`, the request will be executed immediately.
     * @default true
     */
    immediate?: boolean
  }

}

export {}
