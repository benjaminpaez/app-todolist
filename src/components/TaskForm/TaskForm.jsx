import PlaylistAddSharpIcon from "@mui/icons-material/PlaylistAddSharp";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { AlertSuccess } from "../Animations";

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
    addTask(newTask);
    <AlertSuccess/>
    closeModal()
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '75%', height: '70%'}}>
      <Button
        variant="contained"
        color="success"
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
          marginTop: 3 
        }}>
          <Typography align="center" variant="h4">
            Nueva tarea
          </Typography>
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
              <Typography align="left" variant="h6">
                Ingrese un titulo
              </Typography>
              <TextField label="Título" variant="outlined" margin="normal" name="title"/>

              <Typography align="left" variant="h6">
                Ingrese una descripcion
              </Typography>
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
  );
};
