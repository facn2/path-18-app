import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  background: blue;
  display: flex;
  justify-content: space-around;
`;

const NavBarItem = styled.div`
  padding: 0 0.1rem;
  width: 2.5rem;
  color: #fff;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/LikedCareers">
        <NavBarItem>Liked</NavBarItem>
      </Link>
      <Link to="/Careers">
        <NavBarItem>Careers</NavBarItem>
      </Link>
      <Link to="/Settings">
        <NavBarItem>Settings</NavBarItem>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
