import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {flex, FONT_WEIGHTS} from '../../constants/style';
import {TransparentButton} from '../ui/Buttons';
import {useTranslation} from 'react-i18next';
import {SectionFilterEnum} from '../../ts/enums';
import {FilterButton} from '../ui/Elements';
import SectionDropdown from './SectionDropdown';
import {SectionType} from '../../ts/types';
import {useDispatch} from 'react-redux';
import {changeSectionFilter, updateSection} from '../../app/sectionsReducer';
import {Formik} from 'formik';

interface Props {
  section: SectionType;
}

const SectionNavigation = ({section}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();
  const [editingTitle, setEditingTitle] = useState(false);

  const dispatch = useDispatch();

  const updateTitleHandler = (values: {title: string}) => {
    const {title} = values;
    dispatch(updateSection({sectionId: section.id, sectionTitle: title}));
    setEditingTitle(false);
  };

  return (
    <Nav>
      <SectionDropdown
        isActive={modalVisible}
        sectionId={section.id}
        closeAction={() => setModalVisible(false)}
        onEdit={() => setEditingTitle(true)}
      />
      {editingTitle ? (
        <Formik
          initialValues={{
            title: section.title,
          }}
          onSubmit={(values) => updateTitleHandler(values)}
        >
          {(props) => (
            <EditTitleForm onSubmit={props.handleSubmit}>
              <input
                type="text"
                name="title"
                value={props.values.title}
                onChange={props.handleChange}
              />
              <TransparentButton type="submit">
                <img src="/assets/icons/check-icon.svg" alt={t('icon')} />
              </TransparentButton>
            </EditTitleForm>
          )}
        </Formik>
      ) : (
        <>
          <p>{section.title}</p>
          <TransparentButton isActive={modalVisible} onClick={() => setModalVisible(!modalVisible)}>
            <img src="/assets/icons/three-dots-icon.svg" alt={t('section.more')} />
          </TransparentButton>
        </>
      )}
      <FilterContainer>
        <FilterButton
          isActive={section.activeFilter === SectionFilterEnum.All}
          onClick={() =>
            dispatch(changeSectionFilter({sectionId: section.id, newFilter: SectionFilterEnum.All}))
          }
        >
          {t('section.navigation.all')}
        </FilterButton>
        <FilterButton
          isActive={section.activeFilter === SectionFilterEnum.ToDo}
          onClick={() =>
            dispatch(
              changeSectionFilter({sectionId: section.id, newFilter: SectionFilterEnum.ToDo})
            )
          }
        >
          {t('section.navigation.to_do')}
        </FilterButton>
        <FilterButton
          isActive={section.activeFilter === SectionFilterEnum.Done}
          onClick={() =>
            dispatch(
              changeSectionFilter({sectionId: section.id, newFilter: SectionFilterEnum.Done})
            )
          }
        >
          {t('section.navigation.done')}
        </FilterButton>
      </FilterContainer>
    </Nav>
  );
};

export default SectionNavigation;

const Nav = styled.div`
  ${flex.between}
  flex-wrap: wrap;
  margin-bottom: 1rem;
  position: relative;

  > p {
    font-weight: ${FONT_WEIGHTS.medium};
  }
`;

const FilterContainer = styled.div`
  width: 100%;
  margin-top: 1rem;

  button {
    margin-right: 24px;
  }
`;

const EditTitleForm = styled.form`
  ${flex.between}
  width: 100%;

  input {
    width: 100%;
  }

  button {
    width: 32px;
    height: 32px;
    ${flex.center}
    margin-left: 0.5rem;
  }
`;
