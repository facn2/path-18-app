import React, { Component } from 'react';
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

const SettingsContainer = styled.div`
  color: black;
  display: ${props => (props.settings ? 'block' : 'none')};
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
      <div>
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
      </div>
    );
  }
}

export default NavBar;
