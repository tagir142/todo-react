import { Input } from '../Input/Input'
import { Task } from '../Task/Task'
import { ListWrapper, TaskList } from './List.styles'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

export const List = () => {
  const [tasks, setTasks] = useState([])

  // const [tasksEditing, setTasksEditing] = useState('')

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
  }

  useEffect(() => {
    const json = JSON.stringify(tasks)
    if (tasks.length !== 0) {
      localStorage.setItem('tasks', json)
    }
  }, [tasks])

  useEffect(() => {
    const jsonParse = localStorage.getItem('tasks')
    const savedTasks = JSON.parse(jsonParse)
    if (savedTasks) {
      setTasks(savedTasks)
      console.log(jsonParse)
    }
  }, [])
  /* useEffect(() => {
    const json = JSON.stringify(tasks)
    localStorage.setItem('tasks', json)
    const jsonParse = localStorage.getItem('tasks')
    const savedTasks = JSON.parse(jsonParse)

    // const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks.length !== 0) {
      localStorage.getItem('tasks')
    } else {
      localStorage.setItem('tasks', json)
    }
  }, [tasks])

   const useLocalStorageList = (key, defaultValue) => {
    const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key) || defaultValue))
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(tasks))
    }, [tasks])
    return [state, setState]
  }

  const [resultId, setResultId] = useLocalStorageList('resultId', 'true')
  const toggle = () => setResultId(!resultId)
*/
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
