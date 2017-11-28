import React from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  color: black;
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

const Settings = () => {
  return (
    <SettingsContainer>
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
          <ListItemIcon className="material-icons">help_outline</ListItemIcon>
          <ListItemText>Help</ListItemText>
        </SettlingsListItem>
        <SettlingsListItem>
          <ListItemIcon className="material-icons">exit_to_app</ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </SettlingsListItem>
      </SettingsList>
    </SettingsContainer>
  );
};

export default Settings;
