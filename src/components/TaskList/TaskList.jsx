import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({tasks, deleteTask, searchString, currentTasks}) => {
  return (
    <div>
      {
        tasks.length == 0 && <h2>No ingresaste tareas</h2>
      }
      {
        tasks.length != 0 && searchString != '' && currentTasks.length == 0 && <h2>No hay tareas que coincidan</h2>
      }
      {currentTasks.map( task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
};
