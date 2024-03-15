import { CustomNavLink, List, Main, Header } from './Loyout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <CustomNavLink to="/">Home</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/movies">Movies</CustomNavLink>
            </li>
          </List>
        </nav>
      </Header>
      <Main>
        <Suspense feedback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
