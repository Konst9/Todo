import React, { ChangeEvent, useState } from 'react';
import { NewTodo } from '../../../pages/todo/todopages.styles';
import { BtnTeal, Input } from '../../../shared';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';

interface tasksProps {
  tasks: { id: string, text: string, checked: boolean }[];
  setTasks: React.Dispatch<React.SetStateAction<{ id: string, text: string, checked: boolean }[]>>
}
export function NewTask( { tasks, setTasks }: tasksProps) {
  const [taskText, setTaskText] = useState('');

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
    <NewTodo>
      <Input value={taskText} onChange={handleInputChange}/>
      <BtnTeal variant="contained" size='medium' BtnText="добавить" startIcon={<AddIcon />} onClick={handleAddTask} />
    </NewTodo>
  );
}