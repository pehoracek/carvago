import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {COLORS, flex} from '../../constants/style';
import Navigation from '../navigation/Navigation';
import {Formik} from 'formik';
import {TransparentButton} from '../ui/Buttons';
import {useDispatch, useSelector} from 'react-redux';
import {AuthorNameType, AuthorReducerType} from '../../ts/types';
import {useTranslation} from 'react-i18next';
import {changeAuthorName} from '../../app/authorReducer';

const Header = () => {
  const [editingAuthor, setEditingAuthor] = useState(false);
  const {authorName} = useSelector((state: AuthorReducerType) => state.author);
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const editNameHandler = (values: {authorName: AuthorNameType}) => {
    const {authorName} = values;
    dispatch(changeAuthorName(authorName));
    setEditingAuthor(false);
  };

  return (
    <header>
      {editingAuthor ? (
        <Formik
          initialValues={{
            authorName,
          }}
          onSubmit={(values) => editNameHandler(values)}
        >
          {(props) => (
            <EditAuthorForm onSubmit={props.handleSubmit} data-test-id="edit-author-form">
              <input
                type="text"
                name="authorName"
                value={props.values.authorName}
                onChange={props.handleChange}
              />
              <TransparentButton type="submit">
                <img src="/assets/icons/check-icon.svg" alt={t('icon')} />
              </TransparentButton>
            </EditAuthorForm>
          )}
        </Formik>
      ) : (
        <Name>
          <h4 onClick={() => setEditingAuthor(true)} data-test-id="edit-author">
            {authorName}
          </h4>
        </Name>
      )}
      <Navigation />
    </header>
  );
};

export default Header;

const Name = styled.div`
  background: ${COLORS.white};
  padding: 12px 16px;
  border-bottom: 1px solid ${COLORS.separator};
`;

const EditAuthorForm = styled.form`
  ${flex.between}
  padding: 12px 16px;
  width: 100%;
  height: 49px;
  border-bottom: 1px solid ${COLORS.separator};

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
