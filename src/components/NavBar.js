import React, { Component } from 'react';
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

const SettingsContainer = styled.div`
  color: black;
  background-color: white;
  width: 100%;
  display: ${props => (props.settings ? 'block' : 'none')};
  position: absolute;
  top: 4rem;
  right: 0;
  box-shadow: 0 0.7rem 1.2rem rgba(0, 0, 0, 0.09),
    0 0.4rem 0.4rem rgba(0, 0, 0, 0.16);
`;

const Wrapper = styled.div`
  position: relative;
`;

const SettingsList = styled.ul``;

const SettlingsListItem = styled.li`
  height: 4rem;
  border-bottom: 0.1rem solid black;
  border-width: thin;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  &:active {
    background-color: gainsboro;
  }
`;

const ListItemText = styled.p`
  padding-right: 10%;
  text-align: right;
`;

const ListItemIcon = styled.p`
  padding-left: 10%;
  font-size: 1.5rem;
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
          <NavBarItem onClick={this.toggleSettings}>
            <Icon className="material-icons">settings</Icon>
          </NavBarItem>
        </NavBarContainer>
        <SettingsContainer settings={this.state.settings}>
          <SettingsList>
            <SettlingsListItem>
              <ListItemIcon className="material-icons">edit</ListItemIcon>
              <ListItemText>Edit grades</ListItemText>
            </SettlingsListItem>
            <SettlingsListItem>
              <ListItemIcon className="material-icons">edit</ListItemIcon>
              <ListItemText>Edit personal data</ListItemText>
            </SettlingsListItem>
            <SettlingsListItem>
              <ListItemIcon className="material-icons">
                help_outline
              </ListItemIcon>
              <ListItemText>Help</ListItemText>
            </SettlingsListItem>
            <SettlingsListItem>
              <ListItemIcon className="material-icons">
                exit_to_app
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </SettlingsListItem>
          </SettingsList>
        </SettingsContainer>
      </Wrapper>
    );
  }
}

export default NavBar;
