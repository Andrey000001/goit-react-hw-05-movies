import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const CustomNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  font-weight: 600;
  color: black;
  &.active {
    color: tomato;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const Main = styled.main`
  padding-top: 63px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Header = styled.header`
  background: white;
  padding: 20px;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
