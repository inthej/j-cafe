import {createContext} from "react";
import {SizeType} from "../common/AppTypes";

/**
 * db dummy data
 * @type {React.Context<{
 * dbMyFavouriteList: [
 *   {sizeType: string, amount: number, price: number, id: number, title: string}
 * ],
 * dbMenuList: [
 *   {path: string, price: {small: number, large: number, medium: number}, id: number, title: string},
 *   {path: string, price: {small: number, large: number, medium: number}, id: number, title: string},
 *   {path: string, price: {small: number, large: number, medium: number}, id: number, title: string},
 *   {path: string, price: {small: number, large: number, medium: number}, id: number, title: string}
 * ]
 * }>}
 */
const DbContext = createContext({
  /*
   * DB 즐겨찾기 데이터 샘플:
   * [
      {id: 0, sizeType: SizeType.small, title: 'Latte', amount: 1, price: 4},
      {id: 1, sizeType: SizeType.medium, title: 'Matcha', amount: 1, price: 4.5},
      {id: 2, sizeType: SizeType.large, title: 'Iced Latte', amount: 1, price: 5.5},
      {id: 3, sizeType: SizeType.small, title: 'Cappuccino', amount: 1, price: 4}
   * ]
   *
   */
  dbMyFavouriteList: [
    {id: 0, sizeType: SizeType.small, title: 'Latte', amount: 1, price: 4} // 임시
  ],

  /*
   * DB 메뉴 데이터 샘플
   */
  dbMenuList: [
    {id: 0, title: 'Latte', path: '/images/latte.png', price: {small: 4, medium: 4.5, large: 5.5}},
    {id: 1, title: 'Matcha', path: '/images/matcha.png', price: {small: 5, medium: 5.5, large: 6.5}},
    {id: 2, title: 'Iced Latte', path: '/images/icedLatte.png', price: {small: 3, medium: 3.5, large: 4.5}},
    {id: 3, title: 'Cappuccino', path: '/images/cappucino.png', price: {small: 2, medium: 2.5, large: 3.5}},
  ]
});

export default DbContext;
