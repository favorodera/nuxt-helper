# Changelog

All notable changes to this project will be documented in this file.

## [v1.0.4] - 2025-07-14

## Fixed
- `useDollarFetch`
  - Merge issue with `initOptions` and `optionsPatch`

## [v1.0.3] - 2025-07-13

### Added
- `useDollarFetch`
  - Lifecycle hooks (`onPending`, `onSuccess`, `onError`) are now available via the `hooks` property in `initOptions`.
  - `onSuccess` and `onError` are called with the response data and error (as `FetchError<ErrorT>`) respectively.

### Changed
- `useDollarFetch`
  - `initOptions` now contains `$fetch` for all `$fetch` options and `hooks` for request lifecycle.
  - Updated documentation to reflect changes.

## [v1.0.2] - 2025-07-12

### Fixed
- Type errors as a result of missing gsap imports

### Changed
- Nuxt Compatibility version to 4


## [v1.0.1] - 2025-07-03

### Added
- `useDollarFetch`: 
  - Added options patching to the composable to allow for per-execution execution with options patching

## [v1.0.0] - 2025-07-02

Bump to v1.0.0

## [v0.1.0] - 2025-06-30

### Added
- `useDollarFetch`: 
  - Added immediate option to the composable to control if the request should be executed immediately

### Changed
- `useDollarFetch`: 
  - Parent function is now synchronous
  - Core execution function is now asynchronous

### Fixed
- `useDollarFetch`: 
  - Fixed type definition issues for the returned reactive values

## [v0.0.1 - v0.0.7] - Previous Releases
