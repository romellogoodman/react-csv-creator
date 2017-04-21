react-csv-creator
---
A react component for downloading data into a csv file.

Development utilizes [storybook](https://getstorybook.io/) and based on [react-storybook-boilerplate](https://github.com/romellogood/react-storybook-boilerplate).

### running
```
$ npm i
$ npm start
```

### packaging
```
$ npm run build
$ npm publish
```

### props
| Name      | Type         | Default      | Required | Description                                                   |
|:----------|:-------------|:-------------|:---------|:--------------------------------------------------------------|
| disabled  | bool         | false        | false    | Disable the downloading of the csv                            |
| headers   | array object | null         | false    | Header's names                                                |
| filename  | string       | current time | false    | The filename without extension. Defaults to current date/time |
| noHeader  | bool         | false        | false    | If true, will omit the header from the file                   |
| rows      | array object | null         | true     | The main data for the csv                                     |
| separator | string       | ','          | false    |                                                               |
| text      | string       | null         | false    | The text to use if no children component                      |


### Usage
```
import CsvCreator from 'react-csv-creator';

const headers = [{
  id: 'first',
  display: 'First column'
}, {
  id: 'second',
  display: 'Second column'
}];

const rows = [{
  first: 'foo',
  second: 'bar'
}, {
  first: 'foobar',
  second: 'foobar'
}];

<CsvCreator
  filename='my_cool_csv'
  headers={headers}
  rows={rows}
>
  <p>Download CSV</p>
</CsvCreator>
```
