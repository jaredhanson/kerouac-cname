# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2024-03-22
### Added
- Exported `createMapper()` function, which returns a new instance of `Mapper`.
This is used with changes to `generate()` introduced in `kerouac@0.2.0`.

### Changed
- Module now exports a function which constructs a `kerouac.Router` instance
which generates a file at the required `/CNAME` location.  This eliminates
boilerplate necessitated by the previously exported middleware.  Previously
exported middleware is exported at `cname()`.
- Read 'base url' setting from `page.app` rather than `page.site`, in accordance
with latest changes to `keraouc`.

## [0.2.1] - 2017-10-18

## [0.2.0] - 2017-10-07

## [0.1.0] - 2017-10-05

- Initial release.

[Unreleased]: https://github.com/jaredhanson/kerouac-cname/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/jaredhanson/kerouac-cname/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/jaredhanson/kerouac-cname/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/jaredhanson/kerouac-cname/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/jaredhanson/kerouac-cname/releases/tag/v0.1.0
