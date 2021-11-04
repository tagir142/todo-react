import { TaskWrapper, TaskText, TaskChecked } from './Task.styles'

import { useState } from 'react'

export const Task = ({ task }) => {
  const [checked, setChecked] = useState(false)
  const handleClick = () => setChecked(!checked)

  return (
    <TaskWrapper>
        <TaskText className={checked ? 'completeTask' : 'nonCompleteTask'}
                  id={checked ? 'line-through' : 'none'}>{task}</TaskText>
        <TaskChecked type="checkbox" checked={checked} onChange={handleClick}/>
    </TaskWrapper>
  )
}
