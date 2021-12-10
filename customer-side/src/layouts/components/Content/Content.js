import React from 'react';
import styled from "styled-components";
import PropType from 'prop-types';
import theme from "../../../theme";

const Container = styled.div`
   background-color: ${theme.background.black};
  //background-color: blueviolet;
  min-height: 700px;
`;

const Content = props => {
  const {className, height, children} = props;
  return (
    <Container className={className} height={height}>
      {children}
    </Container>
  )
}

React.propType = {
  className: PropType.string,
  children: PropType.node
}

export default Content;
