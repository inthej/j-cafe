import PropType from 'prop-types';
import React, {useContext} from 'react';
import styled from "styled-components";
import DbContext from "../../context/db";
import TopBar from "../../layouts/components/TopBar";
import './Menu.css';

const Container = styled.div`
  background-color: yellow;
  margin: 10px 10px;
`;

const Menu = props => {
  const {history} = props;
  const {dbMenuList} = useContext(DbContext);

  const handleMenuHistory = (id) => {
    history.push(`/coffee/${id}`);
  }

  return (
    <Container>
      <TopBar title={'The Menu'}/>

      <div className="menu-box">
        <div className="menu-box-title">
          Coffee
        </div>

        <div className="menu-list">
          {
            dbMenuList.map(menu => (
              <div className="menu-list-item" key={menu.id} onClick={() => handleMenuHistory(menu.id)}>
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
