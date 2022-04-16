import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SectionsStateType} from '../ts/types';
import {getRandomNum} from '../utils';
import {SectionFilterEnum} from '../ts/enums';

const initialState: SectionsStateType = {
  allSections: [],
};

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    addSection: (state, action: PayloadAction<{title: string}>) => {
      const {title} = action.payload;
      const newSection = {id: getRandomNum(), title, activeFilter: SectionFilterEnum.All};
      state.allSections = [...state.allSections, newSection];
    },
    changeSectionFilter: (
      state,
      action: PayloadAction<{sectionId: number; newFilter: SectionFilterEnum}>
    ) => {
      const {sectionId, newFilter} = action.payload;
      const sectionIndex = state.allSections.findIndex((section) => section.id === sectionId);
      state.allSections[sectionIndex].activeFilter = newFilter;
    },
    changeGlobalSectionFilter: (state, action: PayloadAction<SectionFilterEnum>) => {
      state.allSections.forEach((section) => (section.activeFilter = action.payload));
    },
    deleteSection: (state, action: PayloadAction<{sectionId: number}>) => {
      const {sectionId} = action.payload;
      const sectionIndex = state.allSections.findIndex((section) => section.id === sectionId);
      state.allSections.splice(sectionIndex, 1);
    },
    updateSection: (state, action: PayloadAction<{sectionId: number; sectionTitle: string}>) => {
      const {sectionId, sectionTitle} = action.payload;
      const sectionIndex = state.allSections.findIndex((section) => section.id === sectionId);
      state.allSections[sectionIndex].title = sectionTitle;
    },
  },
});

export const {
  addSection,
  changeSectionFilter,
  changeGlobalSectionFilter,
  deleteSection,
  updateSection,
} = sectionsSlice.actions;

const tasksReducer = sectionsSlice.reducer;

export default tasksReducer;
