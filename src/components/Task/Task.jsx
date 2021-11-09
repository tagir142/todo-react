import { TaskWrapper, TaskText, TaskChecked, TaskDelete } from './Task.styles'

import { useState } from 'react'

export const Task = ({ task, completeTask }) => {
  const [checked, setChecked] = useState(false)
  // const handleClick = () => setChecked(!checked)
  const handleSubmit = () => {
    setChecked(!checked)
    if (checked) {
      completeTask()
    }
  }
  return (
    <TaskWrapper className={checked ? 'completeTask' : ''}>
        <TaskText >{task.text}</TaskText>
        <TaskChecked type='checkbox' onChange={() => handleSubmit()}/>
        <TaskDelete ><b>Удолить</b></TaskDelete>
    </TaskWrapper>
  )
}
