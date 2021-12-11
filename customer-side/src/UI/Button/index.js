import styled from "styled-components";
import theme from "../../theme/theme";

export const OrderButton = styled.button`
  width: 150px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  color: ${theme.white};
  background-color: ${theme.darkGray};
`;

export const SaveButton = styled.button`
  width: 100px;
  background-color: ${theme.blue};
`;

export const DeleteButton = styled.button`
  background-color: ${theme.red};
`;

export const SizeTypeButton = styled.button`
  width: 50px;
  height: 50px;
`;
