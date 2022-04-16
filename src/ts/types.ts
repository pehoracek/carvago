import {ReactNode} from 'react';
import {SectionFilterEnum} from './enums';

export type ChildrenType = ReactNode;

export type PriorityType = 'high' | 'medium' | 'low' | 'none';

export type TaskType = {
  id: number;
  sectionId: number;
  completed: boolean;
  title: string;
  description: string;
  priority: PriorityType;
  createdAt: string;
  author: string;
};

export type SectionType = {
  id: number;
  title: string;
  activeFilter: SectionFilterEnum;
};

export type TasksStateType = {
  allTasks: [] | TaskType[];
  editingTask: null | TaskType;
};

export type SectionsStateType = {
  allSections: [] | SectionType[];
};

export type TasksReducerType = {
  tasks: TasksStateType;
};

export type SectionsReducerType = {
  sections: SectionsStateType;
};

export type AuthorReducerType = {
  author: AuthorStateType;
};

export type AddTaskPayloadType = Omit<TaskType, 'id' | 'completed' | 'createdAt'>;

export type DropdownItemType = 'check' | 'edit' | 'delete' | 'calendar' | 'clearAll' | 'color';

export type DeleteTasksType = 'all' | 'completed';

export type GlobalFilterStateType = {sectionsFilter: SectionFilterEnum};

export type AuthorNameType = string;

export type AuthorStateType = {
  authorName: AuthorNameType;
};
