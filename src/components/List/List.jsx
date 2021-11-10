import { Input } from '../Input/Input'
import { Task } from '../Task/Task'
import { ListWrapper, TaskList } from './List.styles'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export const List = () => {
  const [tasks, setTasks] = useState([])

  const addTodo = (text) => {
    const id = nanoid()
    const date = Date
    const newTask = { id, text, date }
    setTasks((prev) => [...prev, newTask])
  }

  const completeTask = (id) => {
    setTasks((prev) => prev.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item))
  }

  const deleteTask = (id) => {
    setTasks([...tasks.filter((item) => item.id !== id)])
  }

  return (
      <ListWrapper>
        <Input addTodo={addTodo}/>

        <TaskList >
            {tasks.map((item) => {
              return <Task completeTask={ completeTask }
                           deleteTask={deleteTask}
                           task={item}
                           key={item.id}
                           date={item.date}/>
            })}
        </TaskList>
      </ListWrapper>
  )
}
