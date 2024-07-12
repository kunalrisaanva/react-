import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonGroup, IconButton ,Fab  } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3> buttons in Mui </h3>

      <h2> Text buton </h2>

      <Button color="success" variant="text">
        click me{" "}
      </Button>
      <Button color="secondary" variant="text">
        secondary
      </Button>
      <Button color="error" variant="text" disabled>
        DISABLED
      </Button>

      <h3> Contained button </h3>

      <Button
        color="error"
        variant="contained"
        size="small"
        disableElevation
        href="https://goole.com"
      >
        Click ME
      </Button>

      <Button color="secondary" size="large" variant="contained">
        Click me
      </Button>

      <Button variant="contained" href="https://google.com">
        Link
      </Button>
      <Button
        color="error"
        variant="contained"
        disabled
        href="https://google.com"
      >
        Link
      </Button>

      <h3>Outline button</h3>
      <Button color="success" variant="outlined">
        Outlined
      </Button>
      <Button color="secondary" size="small" variant="outlined">
        Outlined
      </Button>
      <Button
        color="secondary"
        size="small"
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        DELETE
      </Button>

      <h3>Icon button </h3>

      <IconButton color="error">
        <DeleteIcon />
      </IconButton>

      <h3> cutom buttom </h3>
      <Button
        style={{ backgroundColor: "green" }}
        size="large"
        variant="contained"
      >
        Custom 1
      </Button>
      <Button
        sx={{ backgroundColor: "green" }}
        size="large"
        variant="contained"
      >
        Custom 2
      </Button>

      <h2>button with click </h2>

      <Button
        style={{ backgroundColor: "green" }}
        size="large"
        variant="contained"
        onClick={() => console.log("hii")}
      >
        click me
      </Button>

      <h2> button group </h2>

      <ButtonGroup variant="outlined" color="secondary">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <h2> vertical button group </h2>
      <ButtonGroup variant="outlined" color="secondary" orientation="vertical">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>



      <h2> Floating action button  </h2>

      <Fab color="secondary">R</Fab>
      <Fab color="primary"> <AddIcon/> </Fab>
      <Fab color="secondary"><EditIcon/></Fab>
      <Fab variant="extended"><NavigationIcon/>Navigation</Fab>
      <Fab color="e" disabled><FavoriteIcon/></Fab>
      {/* <Fab color="secondary">R</Fab> */}


































    </>
  );
}

export default App;
