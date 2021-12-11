import PropTypes from 'prop-types';
import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {AppNames} from "../../common/AppNames";
import {ValueUtils} from "../../common/utils/ValueUtils";
import HomeContext from "../../context/home";
import TopBar from "../../layouts/components/TopBar";
import {DeleteButton, SaveButton} from "../../UI/Button";
import './Favourite.css';

const Container = styled.div`
  margin: 10px 10px;
`;

/**
 * 즐겨찾기 페이지 컴포넌트
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Favourite = props => {
  const {className, history, match} = props;
  const {state, actions} = useContext(HomeContext);
  const {myFavouriteList} = state;
  const {setMyFavouriteList} = actions;

  const [favouriteList, setFavouriteList] = useState(myFavouriteList);
  const id = match.params?.id;

  useEffect(() => {
    if (isValidId(id)) {
      const filterList = myFavouriteList.filter(favourite => `${favourite.id}` === id);
      setFavouriteList(filterList);
    }

    if (id === undefined) {
      setFavouriteList(myFavouriteList);
    }
  }, [id]);

  /**
   * 전달된 param.id 값이 유효한 id 값인지 확인합니다.
   * DB dummy data에서 확인하는 방법으로 임시처리
   * @param paramId
   * @returns {boolean}
   */
  const isValidId = (paramId) => {
    const findIndex = myFavouriteList.findIndex(favourite => `${favourite.id}` === paramId);
    return findIndex > -1;
  }

  /**
   * 즐겨찾기 삭제
   * @param favouriteId
   */
  const handleDelete = (favouriteId) => {
    const filterList = favouriteList.filter(favourite => favourite.id !== favouriteId);
    setFavouriteList(filterList);
  }

  /**
   * 수량 증가
   * @param favouriteId
   */
  const handleIncrease = (favouriteId) => {
    const filterList = favouriteList.map(favourite => favourite.id === favouriteId ? {
      ...favourite,
      amount: favourite.amount + 1
    } : favourite);

    setFavouriteList(filterList);
  }

  /**
   * 수량 감소
   * @param favouriteId
   */
  const handleDecrease = (favouriteId) => {
    const filterList = favouriteList.map(favourite => favourite.id === favouriteId ? {
      ...favourite,
      amount: favourite.amount - 1 > 0 ? favourite.amount - 1 : 0
    } : favourite);

    setFavouriteList(filterList);
  }

  /**
   * 입력한
   */
  const handleSave = () => {
    if (isValidId(id)) {
      // id 값이 전달된경우 (Home 에서 edit 버튼으로 유입된경우 이에 해당)
      // MyFavouriteList 에서 해당건만 수량/가격을 조정합니다.
      const findFavourite = favouriteList.find(favourite => `${favourite.id}` === id);
      const filterList = myFavouriteList.map(favourite => `${favourite.id}` === id ? findFavourite : favourite)
                                        .filter(favourite => favourite?.amount >= 1);
      setMyFavouriteList(filterList);
    } else {
      // id 값이 전달되지 않은경우 (하단 버튼바에서 Favourite 버튼으로 유입된 경우 이에 해당)
      // 수량이 1이상 입력된 전체데이터를 등록합니다.
      const filterList = favouriteList.filter(favourite => favourite.amount >= 1);
      setMyFavouriteList(filterList);
    }

    history.push('/home');
  }

  const totalAmount = favouriteList.reduce((acc, favourite) => acc + favourite.amount, 0); // 총수량
  const totalPrice = favouriteList.reduce((acc, favourite) => acc + (favourite.amount * favourite.price), 0); // 총가격
  return (
    <Container className={className}>
      <TopBar title="My Favourite"/>

      <div className="favourite-info-box">
        <div className="favourite-list">
          <ul>
            {
              favouriteList.map((favourite, favouriteIndex) => (
                <li className="favourite-list-item" key={favouriteIndex}>
                  <span>{AppNames.SizeType(favourite.sizeType)} {ValueUtils.nvl(favourite.title)}</span>
                  <button onClick={() => handleIncrease(favourite.id)}>+</button>
                  <span>{ValueUtils.nvl(favourite.amount, 0)}</span>
                  <button onClick={() => handleDecrease(favourite.id)}>-</button>
                  <span>${ValueUtils.nvl(favourite.price)}</span>
                  <DeleteButton onClick={() => handleDelete(favourite.id)}>X</DeleteButton>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="favourite-list-item-line">

        </div>
        <div className="favourite-list-total">
          <span>Total</span>
          <span>{totalAmount}</span>
          <span>${totalPrice}</span>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </div>
      </div>

    </Container>
  );
}

/**
 * prop type check
 * @type {{match: (shim|*), className: (shim|*), history: (shim|*)}}
 */
React.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object
}

export default Favourite;

