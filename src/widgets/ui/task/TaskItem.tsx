import React, { ChangeEvent, useEffect, useState } from 'react';
import { BtnContained, BtnOutline, CheckBox, Input } from '../../../shared';
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
  const [edit, setEdit] = useState<boolean>(false);
  const [taskText, setTaskText] = useState(task.text);

  useEffect(() => {
    setTaskText(task.text);
  },[task.text]);
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckTask(task.id, e.target.checked);
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value)
  }

  const handleEditTask = () => {
    if (edit) {
      onEditTask(task.id, taskText);
    }
    setEdit(!edit);
  };

  return (
    <Wrapper>
      <TaskNameWrapper>
        {edit ? (
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
        <BtnContained
          size="small"
          startIcon={<EditIcon />}
          BtnText={edit ? "Сохранить" : "Редактировать"}
          onClick={handleEditTask}
        />
        <BtnOutline
          size="small"
          startIcon={<DeleteIcon />}
          BtnText="Удалить"
          onClick={() => onDeleteTask(task.id)}
        />
      </BtnControl>
    </Wrapper>
  );
}