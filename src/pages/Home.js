import React from "react";
import { useAuth } from "../context/AuthContext";
import { Card, Alert, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import CourseCardItem from '../components/Cards'
import {fireDb} from '../FirebaseLogin'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:20, 
  },                  
  paper: {
    height: 300,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
 
  const { currentUser } = useAuth();
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  fireDb.
  child("Courses/")
  .on("value", function(snapshot) {
    snapshot.forEach(function(data) {
      <CourseCardItem/>
    });
  })
  return (
    <>
    <Navbar />
    {/* <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2 , 3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid> */}

    <CourseCardItem/>
    </>
  );
}