import PropTypes from 'prop-types';
import React from 'react';
import styled from "styled-components";
import TopBar from "../../layouts/components/TopBar";
import './Favourite.css';
import theme from "../../theme";
import {SaveButton} from "../Coffee/Coffee";

const Container = styled.div`
  margin: 10px 10px;
`;

const DeleteButton = styled.button`
  background-color: ${theme.red};
`;

const Favourite = props => {
  const {className} = props;
  return (
    <Container className={className}>
      <TopBar title="My Favourite"/>

      <div className="favourite-info-box">
        <div className="favourite-list">
          <ul>
            <li className="favourite-list-item">
              <span>Medium Latte</span>
              <span>1</span>
              <span>$ 5.00</span>
              <DeleteButton>X</DeleteButton>
            </li>
          </ul>
        </div>
        <div className="favourite-list-item-line">

        </div>
        <div className="favourite-list-total">
          <span>Total</span>
          <span>1</span>
          <span>$ 5.00</span>
          <SaveButton>Save</SaveButton>
        </div>
      </div>

    </Container>
  );
}

React.propTypes = {
  className: PropTypes.string
}

export default Favourite;

