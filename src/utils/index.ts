import {COLORS} from '../constants/style';
import {TaskType} from '../ts/types';

export const getRandomNum = () => Math.floor(Math.random() * 1000);

export const getPriorityColor = (task: Partial<TaskType>) => {
  switch (task.priority) {
    case 'high':
      return COLORS.danger;
    case 'low':
      return COLORS.success;
    case 'medium':
      return COLORS.warning;
    default:
      return 'transparent';
  }
};

export const getPriorityLabel = (task: Partial<TaskType>) => {
  switch (task.priority) {
    case 'high':
      return 'priority.high';
    case 'low':
      return 'priority.low';
    case 'medium':
      return 'priority.medium';
    default:
      return 'priority.none';
  }
};
