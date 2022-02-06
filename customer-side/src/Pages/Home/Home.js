import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {AppNames} from "../../common/AppNames";
import {ArrayUtils} from "../../common/utils/ArrayUtils";
import {ValueUtils} from "../../common/utils/ValueUtils";
import HomeContext from "../../context/home";
import theme from "../../theme";
import {OrderButton} from "../../UI/Button";
import './Home.css';

const Container = styled.div`
  background-color: ${theme.gold};
  margin: 10px 10px;
`;

const LogoText = styled.div`
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
const Home = props => {
  const { className, state } = useContext(HomeContext);
  const { myFavouriteList } = state;

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
      <LogoText className="dear-text">
        J Cafe
      </LogoText>

      <div className="home-favourite-box">
        <div className="home-favourite-box-title">
          My favourite
        </div>

        <div className="home-favourite-list">
          <ul>
            {
              myFavouriteList.map((myFavourite, myFavouriteIndex) => {
                const favouritePrice = myFavourite.price * myFavourite.amount;
                return (
                  <li className="home-favourite-list-item" key={myFavouriteIndex}>
                    <span
                      style={{width: '150px'}}>{AppNames.SizeType(myFavourite.sizeType)} {ValueUtils.nvl(myFavourite.title)}</span>
                    <span>{ValueUtils.nvl(myFavourite.amount, 0)}</span>
                    <span>${ValueUtils.floatFixed(favouritePrice, 1)}</span>
                    <Link to={`/favourite/${myFavourite.id}`}>Edit</Link>
                  </li>
                )
              })
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

