import React from 'react';
import styled from "styled-components";
import TopBar from "../../layouts/components/TopBar";
import './Coffee.css';
import theme from "../../theme";

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
  const {coffee} = props;
  return (
    <Container>
      <TopBar title="Coffee"/>

      <div className="coffee-info-box">
        <div className="coffee-image">
          <img src="images/latte.png"/>
        </div>
        <div className="coffee-size-info-box">
          <div className="coffee-size-title">
            Latte
          </div>
          <div className="coffee-size-item-box">

            <div className="coffee-size-item">
              <div className="coffee-size-item-button">
                <SizeButton>S</SizeButton>
              </div>
              <div className="coffee-size-item-price">
                $4
              </div>
            </div>

            <div className="coffee-size-item">
              <div className="coffee-size-item-button">
                <SizeButton>M</SizeButton>
              </div>
              <div className="coffee-size-item-price">
                $4.5
              </div>
            </div>

            <div className="coffee-size-item">
              <div className="coffee-size-checkbox">
                <SizeButton>L</SizeButton>
              </div>
              <div className="coffee-size-item-price">
                $5.5
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
            <li className="coffee-select-list-item">
              <span>Medium Latte</span>
              <span>1</span>
              <span>$ 5.00</span>
            </li>
          </ul>
        </div>
        <div className="coffee-select-list-item-line">&nbsp;</div>
        <div className="coffee-select-list-total">
          <span>Total</span>
          <span>1</span>
          <span>$ 5.00</span>
          <SaveButton>Save</SaveButton>
        </div>
      </div>
    </Container>
  )
}

export default Coffee;
