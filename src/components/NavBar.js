import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  width: 100%;
  height: 3.25rem;
  padding: 0;
  margin: 0;
  background: palevioletred;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavBarItem = styled.div`
  color: #fff;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Icon = styled.i`
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
