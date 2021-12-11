import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {AppNames} from "../../common/AppNames";
import {ArrayUtils} from "../../common/utils/ArrayUtils";
import HomeContext from "../../context/home";
import theme from "../../theme";
import './Home.css';
import {OrderButton} from "../../UI/Button";

const Container = styled.div`
  background-color: ${theme.gold};
  margin: 10px 10px;
`;

const DearText = styled.div`
  height: 150px;
  background-color: ${theme.black};
  color: ${theme.gold};
  font-size: 40px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;
/**
 * 홈 페이지 컴포넌트
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
  const {className, state} = useContext(HomeContext);
  const {myFavouriteList} = state;

  /**
   * 주문하기
   */
  const handleOrder = () => {
    if (ArrayUtils.isEmpty(myFavouriteList)) {
      alert('선택된 메뉴가 없습니다.');
      return;
    }
    alert('주문 고고');
  }

  return (
    <Container className={className}>
      <DearText className="dear-text">
        Dear Tony
      </DearText>

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

