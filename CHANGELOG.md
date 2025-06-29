# Changelog

All notable changes to this project will be documented in this file.

## [0.0.10] - 2025-06-29

### Fixed
- **formatUnderScore utility**: Fixed a bug where the utility function was not correctly handling the spacePositions option
- **formatUnderScore utility Documentation**: Fixed typos on expected outputs in the documentation

## [0.0.9] - 2025-06-28

### Added
- **README.md**: Added installation and setup instructions

## [0.0.8] - 2025-06-27

### Added
- **formatUnderScore utility**: New utility function for formatting underscore-separated strings
  - Support for selective blocks capitalization at specific positions
  - Configurable space insertion between blocks
  - TypeScript support with comprehensive type definitions
  - JSDoc documentation with examples
  - GitHub documentation link in function comments

### Changed
- **formatUnderScore API improvements**:
  - Renamed option properties for better clarity:
    - `capitalizeBlocksPositions` → `capitalizePositions`
    - `addSpacePositions` → `spacePositions`
  - Made all options optional with sensible defaults
  - Improved variable naming for better readability
  - Enhanced error handling for edge cases
  - Added automatic space insertion when only capitalization is specified

### Fixed
- **TypeScript compatibility**: Fixed type definition issues with optional properties
- **Edge case handling**: Improved behavior when only one option is provided
- **Code quality**: Removed redundant comments and improved code structure

### Documentation
- Added comprehensive JSDoc comments with examples
- Created detailed documentation in `/docs/utils/formatUnderScore.md`
- Added GitHub documentation links for easy reference

## [0.0.7] - Previous Release

### Added
- **useDynamicFetch composable**: Dynamic data fetching with caching and error handling
- **useGSAP composable**: GSAP integration for animations
- **formatNumber utility**: Number formatting utility
- **TypeScript support**: Full type definitions for all utilities and composables

### Documentation
- Comprehensive documentation for all utilities and composables
- TypeScript type definitions
- Usage examples and best practices

---

## Version History

- **0.0.7**: Enhanced formatUnderScore utility with improved API and TypeScript support
- **0.0.6**: Initial release with core utilities and composables
- **0.0.5**: Development version
- **0.0.4**: Development version  
- **0.0.3**: Development version
- **0.0.2**: Development version
- **0.0.1**: Development version
