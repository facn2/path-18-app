import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 690px;
  padding: 0;
  margin: 0;
  background: grey;
  display: flex;
  justify-content: space-around;
`;

const NavBarItem = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/LikedCareers">
        <NavBarItem>
          <i className="material-icons">playlist_add_check</i>
        </NavBarItem>
      </Link>
      <Link to="/Careers">
        <NavBarItem>
          <i className="material-icons">view_carousel</i>
        </NavBarItem>
      </Link>
      <Link to="/Settings">
        <NavBarItem>
          <i className="material-icons">settings</i>
        </NavBarItem>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
