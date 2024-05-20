import React, { useCallback, useEffect, useState } from 'react';
import {
  Header,
  FilteredButton,
} from '../../shared';
import { TaskItem, NewTask } from '../../widgets';
import { Wrapper, TodoControl, ControlBtn, TodoList, TodoHeader } from './todopages.styles';

interface Task {
  id: string;
  text: string;
  checked: boolean;
}

enum FilterItem {
  ALL = 'Все',
  ACTIVE = 'Активные',
  CLOSED = 'Завершенные'
}
export function TodosPage() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState<FilterItem>(FilterItem.ALL);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCheck = useCallback((id: string, checked: boolean) => {
    setTasks(prevTasks =>
        prevTasks.map(task => task.id === id ? { ...task, checked } : task)
    );
  }, []);

  const handleEditTask = useCallback((id: string, newText: string) => {
    setTasks(prevTasks =>
        prevTasks.map(task => task.id === id ? { ...task, text: newText } : task)
    );
  }, []);

  const handleDeleteTask = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case FilterItem.ACTIVE:
        return !task.checked;
      case FilterItem.CLOSED:
        return task.checked;
      default:
        return true;
    }
  });

  return (
    <div>
      <Header />
      <Wrapper>
        <NewTask tasks={tasks} setTasks={setTasks} />
        <TodoControl>
          <ControlBtn>
            <FilteredButton
              BtnText="все"
              currentFilter={filter}
              filter="Все"
              onClick={() => setFilter(FilterItem.ALL)}
            />
            <FilteredButton
              BtnText="Активные"
              currentFilter={filter}
              filter="Активные"
              onClick={() => setFilter(FilterItem.ACTIVE)}
            />
            <FilteredButton
              BtnText="Завершенные"
              currentFilter={filter}
              filter="Завершенные"
              onClick={() => setFilter(FilterItem.CLOSED)}
            />
          </ControlBtn>
        </TodoControl>
        <TodoList>
          <TodoHeader>{filter} задачи: {filteredTasks.length}</TodoHeader>
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onCheckTask={handleCheck}
                onEditTask={handleEditTask}
              />
            ))}
        </TodoList>
      </Wrapper>
    </div>
  );
}