import PropTypes from 'prop-types';
import React from 'react';

const CsvCreator = props => {
  const {
    children,
    disabled,
    headers,
    filename,
    noHeader,
    rows,
    text
  } = props;
  const display = children || <p>{text}</p>;

  /**
   * Download the csv
   * @param {String} csvData the document's data
   * @param {String} csvFileName the document's file name
   * @return {Void} Returns nothing
   */
  function downloadCsv (csvData, csvFileName) {
    const encodedUri = encodeURI(csvData);
    const formattedFileName = csvFileName || new Date().toISOString();
    const link = document.createElement('a');

    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${formattedFileName}.csv`);

    document.body.appendChild(link);

    link.click();
  }

  /**
   * Format the data for the csv
   * @param {[Object]} csvHeaders the document's headers
   * @param {[Object]} csvRows the document's rows
   * @return {String} Returns the csv data correctly formatted
   */
  function formatData (csvHeaders, csvRows) {
    let csvData = 'data:text/csv;charset=utf-8,';
    let csvDataArray = [];
    const keyList = [];

    // Insert the header ids into the key list
    csvHeaders.forEach(header => {
      keyList.push(header.id);
    });

    // Insert the row keys into the key list
    csvRows.forEach(row => {
      const keys = Object.keys(row);

      keys.forEach(key => {
        if (keyList.indexOf(key) === -1) {
          keyList.push(key);
        }
      });
    });

    // Insert header ids into the csv
    if (csvHeaders.length > 0) {
      csvDataArray.push(
        csvHeaders.reduce((result, header) => {
          result.push(header.display || header.id || ' ');

          return result;
        }, [])
      );
    }

    // Insert row data into the csv
    csvDataArray = csvDataArray.concat(
      csvRows.map(row => {
        return keyList.map(key => {
          return row[key] || ' ';
        });
      })
    );

    csvDataArray.forEach((infoArray, index) => {
      const dataString = infoArray.join(',');

      csvData += index < csvRows.length ? `${dataString}\n` : dataString;
    });

    return csvData;
  }

  /**
   * Handles the click
   * @return {Void} Returns nothing
   */
  function handleClick () {
    downloadCsv(
      formatData(noHeader ? [] : headers, rows),
      filename
    );
  }

  return (
    <div onClick={disabled ? null : handleClick}>
      {display}
    </div>
  );
};

CsvCreator.propTypes = {
  children: PropTypes.object,
  disabled: PropTypes.bool,
  headers: PropTypes.arrayOf(PropTypes.object),
  filename: PropTypes.string,
  noHeader: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string
};

CsvCreator.defaultProps = {
  headers: [],
  text: 'Download CSV'
};

export default CsvCreator;
