import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const SettingsContainer = styled.div`
  color: palevioletred;
`;

const SettingsTitle = styled.h1``;

const Settings = () => {
  return (
    <SettingsContainer>
      <NavBar />
      <SettingsTitle>Hi you're here to change some settings</SettingsTitle>
    </SettingsContainer>
  );
};

export default Settings;
