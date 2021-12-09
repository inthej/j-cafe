import PropType from 'prop-types';
import React from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  height: 100px;
  background-color: ${theme.background.white};
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${theme.background.gold};
  font-weight: bold;
`;

const ButtonBar = props => {
  const {className} = props;
  const history = useHistory();

  const handleHistory = (path) => {
    history.push(path)
  }

  return (
    <Container className={className}>
      <Button onClick={() => handleHistory('/home')}>Home</Button>
      <Button onClick={() => handleHistory('/favourite')}>Favourite</Button>
      <Button onClick={() => handleHistory('/menu')}>Menu</Button>
    </Container>
  )
}

React.propType = {
  className: PropType.string
}

export default ButtonBar;
