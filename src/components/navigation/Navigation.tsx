import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {COLORS, flex} from '../../constants/style';
import {SmallText} from '../ui/Elements';
import moment from 'moment';
import {NavButton} from '../ui/Buttons';
import {useTranslation} from 'react-i18next';
import NavigationDropdownSettings from './NavigationDropdownSettings';
import NavigationDropdownFilter from './NavigationDropdownFilter';

const Navigation = () => {
  const [settingsModal, setSettingsModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <h4>Today</h4>
      <SmallText>{moment().format('ddd DD MMM')}</SmallText>
      <Buttons>
        <NavButton onClick={() => setFilterModal(!filterModal)}>
          <img src="/assets/icons/filtering-icon.svg" alt={t('icon')} />
        </NavButton>
        <NavButton onClick={() => setSettingsModal(!settingsModal)}>
          <img src="/assets/icons/settings-icon.svg" alt={t('icon')} />
        </NavButton>
        <NavigationDropdownFilter
          isActive={filterModal}
          closeAction={() => setFilterModal(false)}
        />
        <NavigationDropdownSettings
          isActive={settingsModal}
          closeAction={() => setSettingsModal(false)}
        />
      </Buttons>
    </NavigationContainer>
  );
};

export default Navigation;

export const NavigationContainer = styled.div`
  border-bottom: 1px solid ${COLORS.separator};
  ${flex.start}
  padding-bottom: 10px;
  margin: 28px 16px 26px;

  h4 {
    margin-right: 0.5rem;
  }
`;

const Buttons = styled.div`
  ${flex.start}
  margin-left: auto;
  position: relative;

  button:first-child {
    margin-right: 0.5rem;
  }
`;
