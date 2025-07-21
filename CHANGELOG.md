# Changelog

All notable changes to this project will be documented in this file.

## [v1.0.5] - 2025-07-21

### Added
- New shared utility functions:
   - `deepMerge()` - Deeply merges two objects, with arrays from the patch overwriting those in the base.
   - `catchError()` - Throws a standardized H3Error using h3's createError utility.

### Fixed
- Response return type and deep merging issue for `useDollarFetch()` 

### Changed
- Ported layer to nuxt version 4


## [v1.0.4] - 2025-07-14

## Fixed
- Merge issue with `initOptions` and `optionsPatch` on `useDollarFetch()` 

## [v1.0.3] - 2025-07-13

### Added
- Lifecycle hooks (`onPending`, `onSuccess`, `onError`) to `useDollarFetch()` which are available via the `hooks` property in `initOptions`.

### Changed
- `useDollarFetch()` `initOptions` now contains `$fetch` for all `$fetch` options and `hooks` for request lifecycle.

## [v1.0.2] - 2025-07-12

### Fixed
- Type errors as a result of missing gsap imports

### Changed
- Nuxt Compatibility version to 4

## [v1.0.1] - 2025-07-03

### Added
- Added options patching to `useDollarFetch()` to allow for per-execution execution with options patching

## [v1.0.0] - 2025-07-02

Bump to v1.0.0

## [v0.1.0] - 2025-06-30

### Added
- Added immediate option to `useDollarFetch()` to control if the request should be executed immediately

### Changed
- `useDollarFetch()` parent function is now synchronous and core execution function now asynchronous

### Fixed
- Fixed type definition issues for the returned reactive values on `useDollarFetch()`

## [v0.0.1 - v0.0.7] - Previous Releases
