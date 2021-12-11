import PropType from "prop-types";
import React, {useContext} from 'react';
import styled from "styled-components";
import {ValueUtils} from "../../common/utils/ValueUtils";
import DbContext from "../../context/db";
import TopBar from "../../layouts/components/TopBar";
import './Menu.css';

const Container = styled.div`
  background-color: yellow;
  margin: 10px 10px;
`;

/**
 * 메뉴 페이지 컴포넌트
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = props => {
  const { className, history } = props;
  const { dbMenuList } = useContext(DbContext);

  /**
   * 커피상세페이지
   * @param id
   */
  const handleMenuHistory = (id) => {
    history.push(`/coffee/${id}`);
  }

  return (
    <Container className={className}>
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
                  <img src={menu.path} width="200" height="200" alt='image'/>
                </div>
                <div className="title">{ValueUtils.nvl(menu.title)}</div>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  )
}

/**
 * prop type check
 * @type {{className: (shim|*), history: (shim|*)}}
 */
React.propTypes = {
  className: PropType.string,
  history: PropType.object
}

export default Menu;
