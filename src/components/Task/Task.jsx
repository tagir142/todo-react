import { TaskWrapper, TaskText, TaskChecked, TaskDelete } from './Task.styles'

import { useState } from 'react'

export const Task = ({ task }) => {
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)
  const [hidden, setHidden] = useState(false)
  const deleteTask = () => setHidden(!hidden)

  return (
    <TaskWrapper className={hidden ? 'taskToDelete' : ''} id={hidden ? 'none' : 'flex'}>
        <TaskText className={checked ? 'completeTask' : 'nonCompleteTask'}
                  id={checked ? 'line-through' : 'none'}>{task}</TaskText>
        <TaskChecked type="checkbox" checked={checked} onChange={handleClick}/>
        <TaskDelete onClick={deleteTask}><b>Удолить</b></TaskDelete>
    </TaskWrapper>
  )
}
