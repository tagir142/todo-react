import { Input } from '../Input/Input'
import { Task } from '../Task/Task'
import { ListWrapper, TaskList } from './List.styles'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

export const List = () => {
  const [tasks, setTasks] = useState([])

  const addTodo = (text) => {
    const id = nanoid()
    const date = new Date().toLocaleString()
    const newTask = { id, text, date }
    setTasks((prev) => [...prev, newTask])
  }

  const completeTask = (id) => {
    setTasks((prev) => prev.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item))
  }
  const deleteTask = (id) => {
    setTasks([...tasks.filter((item) => item.id !== id)])
    localStorage.clear()
  }

  useEffect(() => {
    const json = JSON.stringify(tasks)
    if (tasks.length > 0) {
      localStorage.setItem('tasks', json)
    }
  }, [tasks])

  useEffect(() => {
    const jsonParse = localStorage.getItem('tasks')
    const savedTasks = JSON.parse(jsonParse)
    if (savedTasks) {
      setTasks(savedTasks)
    }
  }, [])

  return (

      <ListWrapper>
        <Input addTodo={addTodo}
        />

        <TaskList >
            {tasks.map((item) => {
              return <Task completeTask={ completeTask }
                           deleteTask={deleteTask}
                           task={item}
                           key={item.id}
                           date={item.date}
                            />
            })}
        </TaskList>
      </ListWrapper>
  )
}
