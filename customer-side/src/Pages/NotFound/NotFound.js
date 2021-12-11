import PropType from 'prop-types';
import React from 'react';
import styled from "styled-components";

const Container = styled.div``;

/**
 * 404페이지 컴포넌트
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const NotFound = props => {
  const {className} = props;
  return (
    <Container className={className}>
      NotFound
    </Container>
  )
}

/**
 * props type check
 * @type {{className: (shim|*)}}
 */
React.propTypes = {
  className: PropType.string
}

export default NotFound;
