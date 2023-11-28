import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp"
import { Box, Button, Container, TextField} from "@mui/material"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

export const TaskForm = ({addTask}) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleTask = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const newTask = {
      title,
      description,
      id: uuidv4(),
      createAt: new Date().toDateString()
    }
    addTask(newTask)

    closeModal()
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '65vh', height: '70hv'}}>
      <Button
        variant="contained"
        color="primary"
        endIcon={<PlaylistAddSharpIcon />}
        onClick={openModal}
      >
        Nueva tarea
      </Button>

      {isOpen && (
        <Container maxWidth="md" sx={{
          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
          borderRadius: '3px', 
          p: 1,
          width: '60%',
          marginTop: 3,
        }}>
          <h1 style={{textAlign: 'center'}} >
            Ingresa una tarea
          </h1>
          <form
            onSubmit={handleTask}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 2,
              gap: 2,
            }}
          >
            <div>
              <h4>
                Ingrese un titulo
              </h4>
              <TextField label="Título" variant="outlined" margin="normal" name="title"/>

              <h4>
                Ingrese una descripcion
              </h4>
              <TextField
                label="Descripción"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
                name="description"
              />
            </div>
            <div>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="success" type="submit">
                  Aceptar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ ml: 2 }}
                  onClick={closeModal}
                >
                  Cancelar
                </Button>
              </Box>
            </div>
          </form>
        </Container>
      )}
    </div>
  )
}