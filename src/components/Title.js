import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const RedTitle = styled.p`
  color: red;
`;

const Title = props => {
  const {text} = props;

  return (
    <RedTitle>{text.toUpperCase()}</RedTitle>
  );
};

Title.propTypes = {
  text: PropTypes.string
};

export default Title;
