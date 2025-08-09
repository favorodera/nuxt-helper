import { createError, H3Error } from 'h3'

/**
 * Throws a standardized H3Error using h3's createError utility.
 */
export default function (error: unknown) {
  
  // H3Error - re-throw with same properties
  if (error instanceof H3Error) {
    throw createError(error)
  }
      
  // Standard Error - convert to 500
  if (error instanceof Error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'INTERNAL_SERVER_ERROR',
      message: error.message,
    })
  }
      
  // Unknown error type
  throw createError({
    statusCode: 500,
    statusMessage: 'INTERNAL_SERVER_ERROR',
    message: typeof error === 'string' ? error : 'An unexpected error occurred',
  })
}
