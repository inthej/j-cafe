import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import theme from "../../theme";
import './Home.css';

const Container = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  background-color: ${theme.background.gold};
  margin: 10px 10px;
`;

const DearName = styled.div`
  height: 150px;
  background-color: ${theme.background.black};
  color: ${theme.text.gold};
  font-size: 40px;
  font-weight: bold;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderButton = styled.button`
  width: 150px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.white};
  background-color: ${theme.darkGray};
`;

// Home Container 컴포넌트 만들기 (리덕스 연동 필요함) (나의 즐겨찾기 리스트)

const Home = props => {
  return (
    <Container>
      <DearName className="home-dear-box">
        Dear Tony
      </DearName>

      <div className="home-favourite-box">
        <div className="home-favourite-box-title">
          My favourite
        </div>

        <div className="home-favourite-list">
          <ul>
            <li className="home-favourite-list-item">
              <span>Medium Latte</span>
              <span>1</span>
              <span>$5.00</span>
              <button>Edit</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="home-order-button-box">
        <OrderButton>Order</OrderButton>
      </div>
    </Container>
  );
}

React.propTypes = {
  className: PropTypes.string
}

export default Home;

