import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {AppNames} from "../../common/AppNames";
import {ArrayUtils} from "../../common/utils/ArrayUtils";
import HomeContext from "../../context/home";
import theme from "../../theme";
import './Home.css';

const Container = styled.div`
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

const Home = props => {
  const {history} = props;
  const {state} = useContext(HomeContext);
  const {myFavouriteList} = state;

  const handleOrder = () => {
    if (ArrayUtils.isEmpty(myFavouriteList)) {
      alert('선택된 즐겨찾기가 없습니다.');
      return;
    }

    alert('주문 고고');
  }

  console.log('Home myFavouriteList:', myFavouriteList);

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
            {
              myFavouriteList.map((myFavourite, myFavouriteIndex) => (
                <li className="home-favourite-list-item" key={myFavouriteIndex}>
                  <span style={{width: '150px'}}>{AppNames.SizeType(myFavourite.sizeType)} {myFavourite.title}</span>
                  <span>{myFavourite.amount}</span>
                  <span>${myFavourite.price}</span>
                  <Link to={`/favourite/${myFavourite.id}`}>Edit</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="home-order-button-box">
        <OrderButton onClick={handleOrder}>Order</OrderButton>
      </div>
    </Container>
  );
}

React.propTypes = {
  className: PropTypes.string
}

export default Home;

