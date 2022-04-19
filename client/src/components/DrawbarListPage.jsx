import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  
  function callApi(acc_id){
    const id = acc_id;
    fetch(`http://localhost:3000/getdrawbar/${id}`, {method: 'GET'})
    .then(response => response.json())
    .then(data => alert(data.drawbar.vehicle_id))
  
    // how to redirect to another page in react from a function
  
    //use this reference : https://mocki.io/call-a-rest-api-in-react
  
  }
  
  export default function Drawbar() {
  
    const classes = useStyles();
  
    return (
      
      <>
        <Grid
          container
          spacing={2}
          className={classes.gridContainer}
          justify="center"
        >
  
          <Grid item xs={12}>
            <h1>Instrumented Drawbar</h1>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1112')}
            >
              Instrumented Drawbar S1112
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('1113')}
            >
              Instrumented Drawbar S1113
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1114')}
            >
              Instrumented Drawbar S1114
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1115')}
            >
              Instrumented Drawbar S1115
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1116')}
            >
              Instrumented Drawbar S1116
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              onClick={() => callApi('S1117')}
            >
              Instrumented Drawbar S1117
            </Button>
          </Grid>
  
        </Grid>
      </>
    );
  }
  
  // constants
  const useStyles = makeStyles((theme) => ({
    gridContainer: {
      padding: '5%',
      alignItems: 'center',
      '& .MuiGrid-item': {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    button: {
      borderRadius: 10,
      backgroundColor: "#5E8ACF",
      padding: "18px 36px",
      fontSize: "18px"
    },
  }));