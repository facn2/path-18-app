import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  width: 100%;
  height: 4rem;
  background: steelblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.09),
    0 0.4rem 0.4rem rgba(0, 0, 0, 0.16);
`;

const NavBarItem = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Icon = styled.i`
  color: white;
  font-size: 2rem;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <StyledLink to="/LikedCareers">
        <NavBarItem>
          <Icon className="material-icons">playlist_add_check</Icon>
        </NavBarItem>
      </StyledLink>
      <StyledLink to="/Careers">
        <NavBarItem>
          <Icon className="material-icons">view_carousel</Icon>
        </NavBarItem>
      </StyledLink>
      <StyledLink to="/Settings">
        <NavBarItem>
          <Icon className="material-icons">settings</Icon>
        </NavBarItem>
      </StyledLink>
    </NavBarContainer>
  );
};

export default NavBar;
