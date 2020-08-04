import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"

import FeedList from "./FeedList"

import {
  Paper,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typography,
  Box,
  Link,
  IconButton,
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core"
import NotificationIcon from "@material-ui/icons/Notifications"

import OrcasoundLogo from "../../static/orcasound-logo.png"

import { sizing } from '@material-ui/system'


const useStyles = makeStyles(theme => ({
  button: {
    minWidth: "180px",
    borderRadius: 0,
    "&:hover": {
      textDecoration: "none",
      color: "#000000"
    },
    "&:active": {
      color: "#15766b"
    },
    "&:visited": {
      color: "#000000"
    }
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: "#ffffff"
    },
    "&:active": {
      color: "#15766b"
    },
    "&:visited": {
      color: "#ffffff"
    }
  },
  rightToolBar: {
      marginLeft: "auto"
  },
  logoImage: {
      height: "200px;",
      width: "200px;"
  },
}))

const NewHomeSiteMenu = () => {
  const classes = useStyles()
  const [value, setValue] = useState("about")

  const notificationDoc = `https://docs.google.com/forms/d/1oYSTa3QeAAG-G_eTxjabrXd264zVARId9tp2iBRWpFs/edit`

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <Paper elevation={0} square>
      <AppBar position="static" color="inherit">
        <Toolbar>
          
          
          <CardMedia
            component="img"
            alt="Orcasound Logo"
            className={classes.logoImage}
            image={OrcasoundLogo}
          />
     

          <Typography component="h1" variant="h1">
            <Link
              component={RouterLink}
              to="/"
              color="inherit"
              underline="none"
              variant="inherit"
              className={classes.link}
            >
              <Box ml={1} pt={3}>
                Orcasound
              </Box>
            </Link>
          </Typography>
          <div className={classes.rightToolBar}>
            <IconButton color="inherit">Listen</IconButton>
            <IconButton color="inherit">Learn</IconButton>
            <IconButton color="inherit">Projects</IconButton>
            <IconButton color="inherit">Blogs</IconButton>
            <IconButton color="inherit">About</IconButton>
            <IconButton color="inherit">Support</IconButton>
            <IconButton color="inherit">SUBSCRIBE</IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export default NewHomeSiteMenu
