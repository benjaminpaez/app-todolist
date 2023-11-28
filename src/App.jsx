import { useEffect, useState } from "react"
import { TaskForm } from "./components/TaskForm/TaskForm"
import { TaskList } from "./components/TaskList/TaskList"
import { Box, TextField } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function App() {
  const [tasks, setTasks] = useState([])
  const [searchString, setSearchString] = useState('')
  const [currentTask, setCurrentTask] = useState([])

  const addTask = (task) => (
    setTasks([...tasks, task])
  )
  
  const deleteTask = (taskId) => (
    setTasks(tasks.filter(task => task.id != taskId))
  )

  const handleFilter = (e) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    setCurrentTask(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString, tasks])
  return (
    <>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1>Todo List App</h1>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField variant="standard" label="Buscar tarea" value={searchString} sx={{width: '30rem'}} onChange={handleFilter} />
        </Box>

        <TaskForm addTask={addTask}/>
        <TaskList currentTasks={currentTask} tasks={tasks} searchString={searchString} deleteTask={deleteTask} />
      </div>
    </>
  )
}

export default App