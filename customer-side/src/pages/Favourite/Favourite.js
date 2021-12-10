import PropTypes from 'prop-types';
import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {AppNames} from "../../common/AppNames";
import {ValueUtils} from "../../common/utils/ValueUtils";
import HomeContext from "../../context/home";
import TopBar from "../../layouts/components/TopBar";
import theme from "../../theme";
import {SaveButton} from "../Coffee/Coffee";
import './Favourite.css';

const Container = styled.div`
  margin: 10px 10px;
`;

const DeleteButton = styled.button`
  background-color: ${theme.red};
`;

const Favourite = props => {
  const {className, location, match, history} = props;
  const {state, actions} = useContext(HomeContext);
  const {myFavouriteList} = state;
  const {setMyFavouriteList} = actions;

  const [favouriteList, setFavouriteList] = useState(myFavouriteList);
  const id = match.params?.id;

  useEffect(() => {
    if (isValidMatchId(id)) {
      const filterList = myFavouriteList.filter(favourite => `${favourite.id}` === id);
      setFavouriteList(filterList);
    }

    if (id === undefined) {
      setFavouriteList(myFavouriteList);
    }
  }, [id]);

  const isValidMatchId = (paramId) => {
    const findIndex = myFavouriteList.findIndex(favourite => `${favourite.id}` === paramId);
    return findIndex > -1;
  }

  const handleDelete = (favouriteId) => {
    const filterList = favouriteList.filter(favourite => favourite.id !== favouriteId);
    setFavouriteList(filterList);
  }

  const handleIncrease = (favouriteId) => {
    const filterList = favouriteList.map(favourite => favourite.id === favouriteId ? {
      ...favourite,
      amount: favourite.amount + 1
    } : favourite);

    setFavouriteList(filterList);
  }

  const handleDecrease = (favouriteId) => {
    const filterList = favouriteList.map(favourite => favourite.id === favouriteId ? {
      ...favourite,
      amount: favourite.amount - 1 > 0 ? favourite.amount - 1 : 0
    } : favourite);

    setFavouriteList(filterList);
  }

  const handleSave = () => {
    if (isValidMatchId(id)) {
      const findFavourite = favouriteList.find(favourite => `${favourite.id}` === id);
      const filterList = myFavouriteList.map(favourite => `${favourite.id}` === id ? findFavourite : favourite)
                                          .filter(favourite => favourite?.amount >= 1);
      setMyFavouriteList(filterList);
    } else {
      const filterList = favouriteList.filter(favourite => favourite.amount >= 1);
      setMyFavouriteList(filterList);
    }

    history.push('/home');
  }

  console.log('favouriteList:', favouriteList);

  const totalAmount = favouriteList.reduce((acc, favourite) => acc + favourite.amount, 0);
  const totalPrice = favouriteList.reduce((acc, favourite) => acc + (favourite.amount *  favourite.price), 0);
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

React.propTypes = {
  className: PropTypes.string
}

export default Favourite;

