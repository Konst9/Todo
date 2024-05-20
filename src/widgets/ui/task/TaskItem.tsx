import React, { ChangeEvent, useState } from 'react';
import { BtnTeal, CheckBox, Input } from '../../../shared';
import { Wrapper, TaskNameWrapper, BtnControl, TodoText } from "./taskitem.styles";
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface taskItemProps {
  task: { id: string, text: string, checked: boolean };
  onDeleteTask: (id: string) => void;
  onCheckTask: (id: string, checked: boolean) => void;
  onEditTask: (id: string, newText: string) => void;
}
export function TaskItem( { task, onDeleteTask, onCheckTask, onEditTask }: taskItemProps ) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [taskText, setTaskText] = useState(task.text);

  // setTaskText(task.text);
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckTask(task.id, e.target.checked);
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value)
  }

  const handleEditTask = () => {
    if (isEditing) {
      onEditTask(task.id, taskText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <Wrapper>
      <TaskNameWrapper>
        {isEditing ? (
          <Input value={taskText} onChange={handleInputChange}/>
          ) : (
          <>
            <FormControlLabel
              control={<CheckBox checked={task.checked} onChange={handleCheck} />}
              label=""
            />
            <TodoText>{task.text}</TodoText>
          </>
      )}
      </TaskNameWrapper>
      <BtnControl>
        <BtnTeal
          variant='contained'
          size="small"
          startIcon={<EditIcon />}
          BtnText={isEditing ? "Сохранить" : "Редактировать"}
          onClick={handleEditTask}
        />
        <BtnTeal
          variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          BtnText="Удалить"
          onClick={() => onDeleteTask(task.id)}
        />
      </BtnControl>
    </Wrapper>
  );
}