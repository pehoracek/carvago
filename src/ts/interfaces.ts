import {ChildrenType, DropdownItemType, SectionType, TaskType} from './types';
import {ButtonHTMLAttributes} from 'react';

export interface SectionProps {
  section: SectionType;
}

export interface FilterButtonProps extends ButtonHTMLAttributes<any> {
  isActive?: boolean;
}

export interface TaskProps {
  task: TaskType;
}

export interface DropdownProps {
  children?: ChildrenType;
  top?: number;
  right?: number;
  isActive: boolean;
}

export interface IndividualDropdownProps extends DropdownProps {
  closeAction: () => void;
}

export interface DropdownItemProps {
  label: string;
  dropdownItemType: DropdownItemType;
  onClick?: () => void;
  color?: string;
  arrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
