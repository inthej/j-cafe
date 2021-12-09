import React from 'react';
import PropType from 'prop-types';
import styled from "styled-components";
import './Menu.css';
import TopBar from "../../layouts/components/TopBar";

const Container = styled.div`
  background-color: yellow;
  margin: 10px 10px;
`;

const ImageButton = styled.button`
  background-image: url('/public/images/cappucino.png');
  width: 100%;
  height: 100%;
`;

const menuList = [
  {id: 0, title: 'Latte', path: 'images/latte.png'},
  {id: 1, title: 'Matcha', path: 'images/matcha.png'},
  {id: 2, title: 'Iced Latte', path: 'images/icedLatte.png'},
  {id: 3, title: 'Cappuccino', path: 'images/cappucino.png'},
];

const Menu = props => {
  return (
    <Container>
      <TopBar title={'The Menu'}/>

      <div className="menu-box">
        <div className="menu-box-title">
          Coffee
        </div>

        <div className="menu-list">
          {
            menuList.map(menu => (
              <div className="menu-list-item" key={menu.id} onClick={() => console.log('click')}>
                <div className="menu-image">
                  <img src={menu.path} width="200" height="200"/>
                </div>
                <div className="title">{menu.title}</div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
)
}

React.propTypes =
  {
    className: PropType.string
  }

export default Menu;
