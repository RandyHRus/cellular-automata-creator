import "./App.css";
import { NeighbourCheckBoxes } from "./Neighbours/NeighbourCheckboxes";
import {
  Button,
  Grid,
  Card,
  AppBar,
  Typography,
  Toolbar,
} from "@material-ui/core";
import CellNameInput from "./CellNameInput/CellNameInput";
import ColorSelect from "./ColorSelect/ColorSelect";
import "@fontsource/roboto";

function App() {
  return (
    <div className="App">
      <Card className="bg-rectangle">
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Cell Creator
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="Rectangle-content">
          <Grid container justify="center" spacing={5} alignContent="center">
            <Grid container item xs={12} spacing={1} justify="center">
              <CellNameInput />
            </Grid>
            <Grid container item xs={12} spacing={1} justify="center">
              <div>
                <Typography variant="h6" color="primary" align="left">
                  Neighbours
                </Typography>
                <NeighbourCheckBoxes />
              </div>
            </Grid>
            <Grid
              container
              item
              xs={12}
              spacing={1}
              justify="center"
              direction="column"
            >
              <Typography variant="h6" color="primary">
                Color
              </Typography>
              <ColorSelect />
            </Grid>
            <Grid container item xs={12} spacing={1} justify="center">
              <Button color="primary" variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </div>
      </Card>
    </div>
  );
}

export default App;
