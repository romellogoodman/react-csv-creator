import React from 'react';
import {storiesOf} from '@kadira/storybook';

import CsvCreator from '../src';

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

storiesOf('CsvCreator', module)
  .add('custom filename', () => {
    return (
      <CsvCreator
        filename='my_cool_csv'
        headers={headers}
        rows={rows}
        text='Download Stuff'
      />
    );
  })
  .add('disable downloading', () => {
    return (
      <CsvCreator
        disabled
        headers={headers}
        rows={rows}
        text='Download Stuff'
      />
    );
  })
  .add('remove the header', () => {
    return (
      <CsvCreator
        headers={headers}
        noHeader
        rows={rows}
        text='Download Stuff'
      />
    );
  })
  .add('with children', () => {
    return (
      <CsvCreator
        headers={headers}
        rows={rows}
      >
        <p>Download CSV</p>
      </CsvCreator>
    );
  })
  .add('with text', () => {
    return (
      <CsvCreator
        headers={headers}
        rows={rows}
        text='Download Stuff'
      />
    );
  });
