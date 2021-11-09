import { Input } from '../Input/Input'
import { Task } from '../Task/Task'
import { ListWrapper, TaskList } from './List.styles'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export const List = () => {
  const [tasks, setTasks] = useState([])

  const addTodo = (text) => {
    const id = nanoid()
    const newTask = { id, text }
    setTasks((prev) => [...prev, newTask])
  }
  const completeTask = (id) => {
    setTasks((prev) => prev.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item))
  }
  return (
      <ListWrapper>
        <Input addTodo={addTodo}/>

        <TaskList >
            {tasks.map((item) => {
              return <Task completeTask={ completeTask } task={item} key={item.id}/>
            })}
        </TaskList>
      </ListWrapper>
  )
}
