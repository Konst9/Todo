import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Header,
  BtnContained,
  BtnOutline,
  Input
} from '../../shared';
import { TaskItem } from '../../widgets';
import { Wrapper, TodoControl, NewTodo, ControlBtn, TodoList, TodoHeader } from './todopages.styles';

interface Task {
  id: string;
  text: string;
  checked: boolean;
}
export function TodoPages() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

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
      case 'active':
        return !task.checked;
      case 'completed':
        return task.checked;
      default:
        return true;
    }
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value)
  }

  const handleAddTask = () => {
    if(taskText.trim() !== '') {
      setTasks([...tasks, { id: uuidv4(), text: taskText, checked: false }]);
      setTaskText('');
    }
  }
  return (
    <div>
      <Header />
      <Wrapper>
        <TodoControl>
          <NewTodo>
            <Input value={taskText} onChange={handleInputChange}/>
            <BtnContained BtnText="добавить" onClick={handleAddTask} />
          </NewTodo>
          <ControlBtn>
            <BtnOutline BtnText="все" onClick={() => setFilter('all')} />
            <BtnOutline BtnText="активные" onClick={() => setFilter('active')} />
            <BtnOutline BtnText="завершенные" onClick={() => setFilter('completed')} />
          </ControlBtn>
        </TodoControl>
        <TodoList>
          <TodoHeader>Задачи</TodoHeader>
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