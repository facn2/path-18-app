import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  width: 100%;
  height: 4rem;
  background: #26a69a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  max-width: 25rem;
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
  cursor: pointer;
  user-select: none;
`;

const SettingsContainer = styled.div`
  color: black;
  background-color: white;
  width: 100%;
  transform: ${props =>
    props.settings ? 'translateY(0)' : 'translateY(-100%)'};
  transition: all cubic-bezier(0.47, 0, 0.75, 0.72) 0.12s;
  position: absolute;
  top: 4rem;
  right: 0;
  z-index: 1;
  box-shadow: 0 0.22rem 0.44rem rgba(0, 0, 0, 0.09),
    0 0.22rem 0.44rem rgba(0, 0, 0, 0.13);
`;

const Wrapper = styled.div`
  position: relative;
`;

const SettingsList = styled.ul``;

const SettlingsListItem = styled.a`
  height: 3.8rem;
  border-bottom: 0.1rem solid gainsboro;
  border-width: thin;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.2rem;
  color: #455a64;
  text-decoration: none;
  &:active {
    background-color: gainsboro;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ListItemText = styled.p`
  text-align: right;
  padding-right: 5%;
`;

const ListItemIcon = styled.i`
  padding-right: 0.9rem;
  font-size: 1.5rem;
  color: #00796b;
  cursor: pointer;
  user-select: none;
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  toggleSettings = () => {
    this.setState({ settings: !this.state.settings });
  };

  render() {
    return (
      <Wrapper>
        <NavBarContainer settings={this.state.settings}>
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
          <NavBarItem onClick={this.toggleSettings}>
            <Icon className="material-icons">settings</Icon>
          </NavBarItem>
        </NavBarContainer>
        <SettingsContainer settings={this.state.settings}>
          <SettingsList>
            <SettlingsListItem>
              <ListItemText>Edit grades</ListItemText>
              <ListItemIcon className="material-icons">edit</ListItemIcon>
            </SettlingsListItem>
            <SettlingsListItem>
              <ListItemText>Edit personal data</ListItemText>
              <ListItemIcon className="material-icons">person</ListItemIcon>
            </SettlingsListItem>
            <SettlingsListItem>
              <ListItemText>Help</ListItemText>
              <ListItemIcon className="material-icons">
                help_outline
              </ListItemIcon>
            </SettlingsListItem>
            <SettlingsListItem href="
                /__/logout">
              <ListItemText>Logout</ListItemText>
              <ListItemIcon className="material-icons">
                exit_to_app
              </ListItemIcon>
            </SettlingsListItem>
          </SettingsList>
        </SettingsContainer>
      </Wrapper>
    );
  }
}

export default NavBar;
