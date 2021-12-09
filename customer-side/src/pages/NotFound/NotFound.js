import React from 'react';
import styled from "styled-components";
import PropType from 'prop-types';

const Container = styled.div``;

const NotFound = props => {
  const {className} = props;
  return (
    <Container className={className}>
      NotFound
    </Container>
  )
}

React.propTypes = {
  className: PropType.string
}

export default NotFound;
