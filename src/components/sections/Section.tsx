import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {SectionProps} from '../../ts/interfaces';
import {useSelector} from 'react-redux';
import {TasksReducerType, TasksStateType} from '../../ts/types';
import SectionNavigation from './SectionNavigation';
import {COLORS, NUM_BREAKPOINTS, RADIUSES} from '../../constants/style';
import Task from '../tasks/Task';
import {SectionFilterEnum} from '../../ts/enums';
import AddTask from '../tasks/AddTask';
import {breakpoint} from '../../utils/style';

const Section = ({section}: SectionProps) => {
  const [filteredTasks, setFilteredTasks] = useState<TasksStateType['allTasks']>([]);

  const {allTasks} = useSelector((state: TasksReducerType) => state.tasks);

  const filteredTasksHandler = () => {
    switch (section.activeFilter) {
      case SectionFilterEnum.All:
        return allTasks.filter((task) => task.sectionId === section.id);
      case SectionFilterEnum.Done:
        return allTasks.filter((task) => task.sectionId === section.id && task.completed);
      case SectionFilterEnum.ToDo:
        return allTasks.filter((task) => task.sectionId === section.id && !task.completed);
      default:
        return allTasks.filter((task) => task.sectionId === section.id);
    }
  };

  useEffect(() => {
    setFilteredTasks(filteredTasksHandler());
  }, [section, allTasks]);

  return (
    <Wrapper>
      <SectionNavigation section={section} />
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <AddTask sectionId={section.id} />
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  width: 100%;
  background: ${COLORS.white};
  padding: 1rem;
  border: 1px solid ${COLORS.separator};
  border-radius: ${RADIUSES.small};
  flex-shrink: 0;
  margin-right: 1rem;

  ${breakpoint(NUM_BREAKPOINTS.tablet)} {
    width: 344px;
  }
`;
