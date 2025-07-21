import { createError, H3Error } from 'h3'

/**
 * Throws a standardized H3Error using h3's createError utility.
 *
 * @param {unknown} error - The error to handle. Can be an H3Error, Error, or any value.
 * @throws {H3Error} Throws a formatted H3Error with appropriate status and message.
 * @see {@link https://github.com/favorodera/nuxtHelper/blob/main/app/docs/utils/catchError.md#catcherror catchError}
 */
export default function (error: unknown) {
  
  if (error instanceof H3Error) {
    throw createError({
      statusCode: error.statusCode,
      statusMessage: error.statusMessage,
      message: error.message,
    })
  }
      
  if (error instanceof Error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'INTERNAL_SERVER_ERROR',
      message: error.message,
    })
  }
      
  throw createError({
    statusCode: 500,
    statusMessage: 'UNKNOWN_ERROR',
    message: 'An unexpected error occurred',
  })
}
