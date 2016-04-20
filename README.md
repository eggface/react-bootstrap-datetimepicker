react-bootstrap-datetimepicker
===============================

This project is a port of https://github.com/Eonasdan/bootstrap-datetimepicker for React.js

Usage
===============================

Installation : `npm install --save @myob/react-bootstrap-datetimepicker`

Then

```javascript
//ES5
var DateTimeField = require('react-bootstrap-datetimepicker');

//ES6
import DateTimeField from "react-bootstrap-datetimepicker"

...

render: function() {
  return <DateTimeField />;
}
```
See [Examples](examples/) for more details.

API
===============================

DateTimeField
========

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| **dateTime** | string  | moment().format('x') | Represents the inital dateTime, this string is then parsed by moment.js |
| **format**   | string  | "x"     | Defines the format moment.js should use to parse and output the date to onChange |
| **inputFormat** | string or array | *see default format table below* | Defines the *accepted* date formats in the HTML input. It must be a format understandable by moment.js |
| **inputDisplayFormat** | string |  When there is **_no inputFormat given_**:<br> *see default format table below*. <br><br> When an **_inputFormat_** is given and it is a **string**: it takes the inputFormat. <br><br> When the **_inputFormat_** is an **array**: it takes the first inputFormat.  | Defines the *display* format of the date in the HTML input. It must be a format understandable by moment.js. <br><br> If there is an **_inputFormat_** given, the inputDisplayFormat must be one of the formats listed in the inputFormat|
| **onChange** | function | x => console.log(x) | Callback trigger when the date changes. `x` is the new datetime value. |
| **onBlur** | function | () => {} | Callback trigger when the date field blurs. |
| **showToday** | boolean | true | Highlights today's date |
| **size** | string | "md" | Changes the size of the date picker input field. Sizes: "sm", "md", "lg" |
| **daysOfWeekDisabled** | array of integer | [] | Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday). |
| **viewMode** | string or number | 'days' | The default view to display when the picker is shown. ('years', 'months', 'days') |
| **inputProps** | object | undefined | Defines additional attributes for the input element of the component. |
| **inputRef** | string or function | inputDateTime | Allows a custom reference to be passed to the input field. |
| **minDate** | moment | undefined | The earliest date allowed for entry in the calendar view. |
| **maxDate** | moment | undefined | The latest date allowed for entry in the calendar view. |
| **mode** | string | undefined | Allows to selectively display only the time picker ('time'), date picker ('date'), or month picker ('month') |
| **defaultText** | string | {dateTime} | Sets the initial value. Could be an empty string, or helper text. |
| **name** | string | undefined | Sets the name of the input element. |


**Note**: Hitting the **Enter** key from the input field will produce the same effect as an **onBlur** event.

Default Format Based on Mode
========

| Mode         | Format    |
| ------------ | ------- |
| **time** | "h:mm A"  |
| **date** | "MM/DD/YY" |
| **month** | "MM/YY"  |
| *none given* | "MM/DD/YY h:mm A"  |

Release Process
========
Once your pull request has been merged to master:
1. Make sure you have the latest changes by running `git pull` on the master branch.
2. *(Optional)* Check that your changes are reflected in the lib/react-bootstrap-datetimepicker.js file by running `npm run build-npm` and checking the file manually from the lib folder.
3. When you're happy with your changes, run on your console:

	`npm run` + type of release (`patch-release`,  `minor-release`, `major-release`)

    For example: `npm run patch-release`

Local linking to another project
========
1. Run `npm run build-npm` from the react-bootstrap-datetimepicker console.
2. In your other project's **package.json**,
Use `"@myob/react-bootstrap-datetimepicker": "npm install ../../../../react-bootstrap-datetimepicker"` instead of `"@myob/react-bootstrap-datetimepicker": "0.0.25"` in the dependency list.
*(use npm install + the path to your local react-bootstrap-datetimepicker folder instead of the version number)*
3. Run `npm install @myob/react-bootstrap-datetimepicker` from the same folder level as the package.json.

Update Warning
===============================
Starting from 0.0.6, the 3 github repositories `react-bootstrap-datetimepicker`, `react-bootstrap-datetimepicker-npm` and `react-bootstrap-datetimepicker-bower` are merged in a single one. The build process changed but the API is the same.
However now the package exports DateTimeField directly, no need to do :

```javascript
var DateTimeField = require('react-bootstrap-datetimepicker').DateTimeField;
```
instead use :

```javascript
var DateTimeField = require('react-bootstrap-datetimepicker');
```

Contributions
===============================
There is still plenty of features missing compared to the original date time picker, hence contributions would be highly appreciated.
