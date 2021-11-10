import { TaskWrapper, TaskText, TaskChecked, TaskDelete } from './Task.styles'

import { useState } from 'react'

export const Task = ({ task, date, completeTask, deleteTask }) => {
  const [checked, setChecked] = useState(false)

  const handleSubmit = () => {
    setChecked(!checked)
    if (checked) {
      completeTask()
    }
  }

  return (
    <TaskWrapper className={checked ? 'completeTask' : ''}>
        <TaskText id={checked ? 'line-through' : 'flex'}>{task.text + date}</TaskText>
        <TaskChecked type='checkbox' onChange={() => handleSubmit(task.id)}/>
        <TaskDelete onClick={() => deleteTask(task.id)}><b>Удолить</b></TaskDelete>
    </TaskWrapper>
  )
}
