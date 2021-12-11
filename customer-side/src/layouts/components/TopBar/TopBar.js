import PropTypes from 'prop-types';
import React from 'react';
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${theme.black};
  min-height: 50px;
  max-height: 50px;
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
  color: ${theme.white};
  font-size: 30px;
  font-weight: bold;
`;

const TopBar = props => {
  const {className, title} = props;
  const history = useHistory();

  /**
   * 뒤로가기
   */
  const handleBack = () => {
    history.goBack();
  }

  return (
    <Container className={className}>
      <BackButton onClick={handleBack}>Back</BackButton>
      <Title>{title}</Title>
    </Container>
  )
}

React.propTypes = {
  className:  PropTypes.string,
  title: PropTypes.string
}

export default TopBar;
