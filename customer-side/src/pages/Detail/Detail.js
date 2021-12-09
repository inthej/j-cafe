import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";

const Container = styled.div``;

const Detail = props => {
  const {className} = props;
  return (
    <Container className={className}>
      Detail
    </Container>
  );
}

React.propTypes = {
  className: PropTypes.string
}

export default Detail;

