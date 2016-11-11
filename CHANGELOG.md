# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## [0.4.2] - 2016-11-11
### Fixed
* Initialise the DateTimeField's inputValue to dateTime, even if defaultText is set

[0.4.2]: https://github.com/MYOB-Technology/react-bootstrap-datetimepicker/compare/v0.4.0...v0.4.2

## [0.2.3] - 2016-06-07
### Changed
* Removed the assumption that dates typed in the input field will be separated by either a ‘/’ for date mode and a space for month mode.

[0.2.3]: https://github.com/MYOB-Technology/react-bootstrap-datetimepicker/compare/v0.2.2...v0.2.3

## [0.2.0] - 2016-04-22
### Added
* 'onBlur', 'onEnterKeyDown', 'name', and 'tabIndex' props to DateTimeField

### Fixed
* When selecting a month, it does not reset the error styles of the input
* Auto-evaluates year at 2 digits when both YY and YYYY formats are accepted

### Changed
* The DateTimeField now assumes that dates typed in the input field will be separated by either a ‘/’ or a space.

[0.2.0]: https://github.com/MYOB-Technology/react-bootstrap-datetimepicker/compare/v0.1.0...v0.2.0
