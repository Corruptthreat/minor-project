import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Container from 'react-bootstrap/Container'
import {fireDb} from '../FirebaseLogin'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";

import { Favorite, Share, ExpandMore } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    marginTop:40
  },
  title: {
    height: 70,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const CourseCard = ({ course }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  fireDb.
  child("Courses/")
  .on("value", function(snapshot) {
    snapshot.forEach(function(data) {
        localStorage.setItem("key", data.key);
        console.log(data.key)
  console.log("values are")
    
       console.log(snapshot.val()[localStorage.getItem("key")].cdetails)
        
        }); })
  return (
      <Container>
    <Card className={classes.root}>
      <CardActionArea > 
          {/* component={Link} to={`/courses/${course.maKhoaHoc}`} */}
        <CardMedia
          className={classes.media}
          image={""}
          title={""}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="subtitle2"
            component="h5"
          >
            {/* {course.tenKhoaHoc} */}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
      </CardActions>
    </Card></Container>
  );
};

export default CourseCard;