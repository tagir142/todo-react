import { Input } from '../Input/Input'
import { Task } from '../Task/Task'
import { ListWrapper, TaskList } from './List.styles'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export const List = () => {
  const [tasks, setTasks] = useState([])
  const addTodo = (task) => {
    setTasks((prev) => [...prev, task])
  }
  return (
      <ListWrapper>
        <Input addTodo={addTodo}/>

        <TaskList>
            {tasks.map((item) => {
              const id = nanoid()
              return <Task task={item} key={id}/>
            })}
        </TaskList>
      </ListWrapper>
  )
}
