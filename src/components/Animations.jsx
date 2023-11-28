import { Alert, AlertTitle } from "@mui/material";

export const AlertError = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  );
};

export const AlertSuccess = () => {
  return (
    <>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
        </Alert>
        console.log('succes')
    </>
  );
};
