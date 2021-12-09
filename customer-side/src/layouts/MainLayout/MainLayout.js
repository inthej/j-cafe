import PropType from 'prop-types';
import React from 'react';
import styled from "styled-components";
import ButtonBar from "../components/ButtonBar";
import Content from "../components/Content";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 500px;
  max-width: 500px;
  min-height: 750px;
  max-height: 750px;
  
  background: yellow;
  
  border-style: solid;
  border-width: 1px;
  border-color: black;
`;

const MainLayout = props => {
  const {children} = props;
  return (
    <Container>
      <Content className="content">
        {children}
      </Content>
      <ButtonBar className="button-bar" />
    </Container>
  )
}

React.propType = {
  children: PropType.node
}

export default MainLayout;
