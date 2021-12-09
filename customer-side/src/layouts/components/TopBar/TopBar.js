import React from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${theme.background.black};
  min-height: 50px;
  max-height: 50px;
  
  //display: flex;
  //justify-content: center;
  //align-items: center;
`;

const BackButton = styled.button`
  height: 50px;
  width: 50px;
`;

const Title = styled.div`
  // 글자센터
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  //
  color: ${theme.text.white};
  font-size: 30px;
  font-weight: bold;
`;

const TopBar = props => {
  const {className, title, children, ...rest} = props;
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return (
    <Container className={className}>
      <BackButton onClick={handleBack}>Back</BackButton>
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default TopBar;
