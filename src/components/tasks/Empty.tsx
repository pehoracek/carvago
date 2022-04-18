import React from 'react';
import {SmallText} from '../ui/Elements';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/macro';
import {PrimaryButton, SecondaryButton} from '../ui/Buttons';
import {flex, NUM_BREAKPOINTS} from '../../constants/style';
import {useDispatch} from 'react-redux';
import {addSection} from '../../app/sectionsReducer';
import {Formik} from 'formik';
import {breakpoint} from '../../utils/style';

const Empty = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const addSectionHandler = (text: string) => {
    if (text.length > 0) {
      dispatch(addSection({title: text}));
    }
  };

  return (
    <EmptySectionContainer>
      <SmallText color={'#42526E'} style={{marginBottom: 4}}>
        {t('section.title')}
      </SmallText>
      <Formik
        initialValues={{input: ''}}
        onSubmit={(values) => addSectionHandler(values.input)}
        enableReinitialize
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="input"
              onChange={props.handleChange}
              value={props.values.input}
              placeholder="Add new section"
              data-test-id="empty-new-section-input"
              autoFocus
            />
            <Buttons>
              <SecondaryButton
                onClick={() => props.setFieldValue('input', '')}
                type="button"
                data-test-id="empty-new-section-cancel"
              >
                {t('buttons.cancel')}
              </SecondaryButton>
              <PrimaryButton
                type="submit"
                data-test-id="empty-new-section-submit"
                disabled={props.values.input.length === 0}
              >
                {t('buttons.save')}
              </PrimaryButton>
            </Buttons>
          </form>
        )}
      </Formik>
    </EmptySectionContainer>
  );
};

export default Empty;

const EmptySectionContainer = styled.div`
  width: 100%;

  ${breakpoint(NUM_BREAKPOINTS.tablet)} {
    width: 344px;
  }
`;

const Buttons = styled.div`
  margin-top: 0.5rem;
  ${flex.end}
  button:first-child {
    margin-right: 0.5rem;
  }
`;
