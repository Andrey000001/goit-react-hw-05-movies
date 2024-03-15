import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const CustomNavLink = styled(NavLink)`
  padding: 5px 3px;
  background: #ccc;
  border-radius: 5px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`;

export const Section = styled.section`
  margin-top: 20px;
`;
export const Img = styled.img`
  margin-top: 10px;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  margin-top: 5px;
`;

export const DescriptionOverview = styled.p`
  margin-top: 7px;
`;

export const Additional = styled.p`
  margin-top: 20px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const UnderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

