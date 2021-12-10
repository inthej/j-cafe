import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {AppNames} from "../../common/AppNames";
import {SizeType} from "../../common/AppTypes";
import {ValueUtils} from "../../common/utils/ValueUtils";
import DbContext from "../../context/db";
import HomeContext from "../../context/home";
import TopBar from "../../layouts/components/TopBar";
import theme from "../../theme";
import './Coffee.css';

const Container = styled.div`
  background-color: yellow;
  margin: 10px 10px;
`;

const SizeButton = styled.button`
  width: 50px;
  height: 50px;
`;

export const SaveButton = styled.button`
  width: 100px;
  background-color: ${theme.blue};
`;

const Coffee = props => {
  const {match, history} = props;
  const {dbMenuList} = useContext(DbContext);
  const {state, actions} = useContext(HomeContext);
  const {myFavouriteList} = state;
  const {setMyFavouriteList, getNewMyFavouriteId} = actions;
  const id = match.params?.id;

  const [selectMenuList, setSelectMenuList] = useState([]);

  const findMenu = dbMenuList.find(menu => `${menu.id}` === id);

  useEffect(() => {
    if (isInvalidId(id)) {
      alert('DB에 없는 메뉴입니다.');
      history.push('/');
    }
  }, [id]);

  const isInvalidId = (menuId) => {
    const findIndex = dbMenuList.findIndex(menu => `${menu.id}` === menuId);
    return findIndex === -1;
  }

  const handleSelectMenu = (sizeType) => {
    const hasMenu = selectMenuList.findIndex(selectMenu => selectMenu.sizeType === sizeType) > -1;
    if (hasMenu) {
      const newSelectMenuList = selectMenuList.map(menu => menu.sizeType === sizeType ? {
        ...menu,
        amount: menu.amount + 1,
        price: (menu.price + findMenu.price[sizeType])
      } : menu);

      setSelectMenuList(newSelectMenuList);
    } else {
      const selectMenu = {
        sizeType: sizeType,
        title: findMenu.title,
        amount: 1,
        price: ValueUtils.nvl(findMenu.price[sizeType], 0)
      }

      const newSelectMenuList = selectMenuList.concat(selectMenu);
      setSelectMenuList(newSelectMenuList);
    }
  }

  const handleSave = () => {
    let saveFavouriteList = myFavouriteList;
    selectMenuList.forEach(selectMenu => {
      const findMyFavourite = myFavouriteList.find(myFavourite => (myFavourite.sizeType === selectMenu.sizeType && myFavourite.title === selectMenu.title));
      // 즐겨찾기에 메뉴가 이미 있는경우 (수량, 가격 올려주기)
      if (findMyFavourite) {
        console.log('이미존재함');
        const amount = findMyFavourite.amount + selectMenu.amount;
        const price = findMyFavourite.price + selectMenu.price;

        // 수량 가격 올려주기
        const newFavouriteList = saveFavouriteList.map(myFavourite => myFavourite.sizeType === selectMenu.sizeType && myFavourite.title === selectMenu.title ? {
          ...myFavourite,
          amount: amount,
          price: price
        } : myFavourite);
        //
        // // 갱신
        saveFavouriteList = newFavouriteList;

      } else {
        console.log('신규추가');
        console.log('saveFavouriteList:', saveFavouriteList);
        // 즐겨찾기에 메뉴가 없는경우 (id 생성, 선택메뉴 즐겨찾기에 추가)
        const lastMyFavourite = saveFavouriteList[saveFavouriteList.length - 1];
        const lastMyFavouriteId = !ValueUtils.isEmpty(lastMyFavourite?.id) ? lastMyFavourite.id + 1 : 0; // undefined || number;
        const newFavourite = {
          id: lastMyFavouriteId,
          sizeType: selectMenu.sizeType,
          title: selectMenu.title,
          amount: selectMenu.amount,
          price: selectMenu.price
        }
        saveFavouriteList = saveFavouriteList.concat(newFavourite);
      }
    });

    console.log('saveList:', saveFavouriteList)

    setMyFavouriteList(saveFavouriteList);

    history.push('/home');
  }

  console.log('myFavouriteList:', myFavouriteList);

  const totalAmount = selectMenuList.reduce((acc, selectMenu) => acc + selectMenu.amount, 0);
  const totalPrice = selectMenuList.reduce((acc, selectMenu) => acc + selectMenu.price, 0);
  return (
    <Container>
      <TopBar title="Coffee"/>

      <div className="coffee-info-box">
        <div className="coffee-image">
          <img id='coffee-image' src={ValueUtils.nvl(findMenu.path, '/images/default.png')}/>
        </div>
        <div className="coffee-size-info-box">
          <div className="coffee-size-title">
            Latte
          </div>
          <div className="coffee-size-item-box">

            <div className="coffee-size-item">
              <div className="coffee-size-item-button">
                <SizeButton onClick={() => handleSelectMenu(SizeType.small)}>{AppNames.SizeTypePrefix(SizeType.small)}</SizeButton>
              </div>
              <div className="coffee-size-item-price">
                ${ValueUtils.nvl(findMenu.price.small, 0)}
              </div>
            </div>

            <div className="coffee-size-item">
              <div className="coffee-size-item-button">
                <SizeButton onClick={() => handleSelectMenu(SizeType.medium)}>{AppNames.SizeTypePrefix(SizeType.medium)}</SizeButton>
              </div>
              <div className="coffee-size-item-price">
                ${ValueUtils.nvl(findMenu.price.medium, 0)}
              </div>
            </div>

            <div className="coffee-size-item">
              <div className="coffee-size-checkbox">
                <SizeButton onClick={() => handleSelectMenu(SizeType.large)}>{AppNames.SizeTypePrefix(SizeType.large)}</SizeButton>
              </div>
              <div className="coffee-size-item-price">
                ${ValueUtils.nvl(findMenu.price.large, 0)}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="coffee-select-info-box">
        <div className="coffee-select-info-title">
          Select List
        </div>
        <div className="coffee-select-list">
          <ul>
            {
              selectMenuList.map((selectMenu, selectIndex) => (
                <li className="coffee-select-list-item" key={selectIndex}>
                  <span>{AppNames.SizeType(selectMenu.sizeType)} {ValueUtils.nvl(selectMenu.title)}</span>
                  <span>{ValueUtils.nvl(selectMenu.amount, 0)}</span>
                  <span>${ValueUtils.nvl(selectMenu.price, 0)}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="coffee-select-list-item-line">&nbsp;</div>
        <div className="coffee-select-list-total">
          <span>Total</span>
          <span>{totalAmount}</span>
          <span>${totalPrice}</span>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </div>
      </div>
    </Container>
  )
}

export default Coffee;
