import { Button } from "@mui/material"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export const TaskItem = ({task, deleteTask}) => {
  const {title, description, createAt, id} = task
  return (
    <div>
      
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{createAt}</span>
      <Button color='error' variant='contained' onClick={() => deleteTask(id)} sx={{marginLeft: '2rem'}}><DeleteForeverOutlinedIcon/></Button>
      <hr />
    </div>
  )
}

