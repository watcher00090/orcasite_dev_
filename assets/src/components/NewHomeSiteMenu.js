import React, { useState } from "react"
import { Link as RouterLink } from "react-router-dom"

import FeedList from "./FeedList"

import SimpleMap from "./SimpleMap.js"

import About from "./About.js"


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
  CardContent,
  Grid,
} from "@material-ui/core"
import NotificationIcon from "@material-ui/icons/Notifications"

import OrcasoundLogo from "../../static/orcasound-logo.png"
import OrcaImage from  "../../static/spyhops_ship_updated.jpg"

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
      height: "100px;",
      width: "100px;"
  },
  navBarIconButton: {
    color: "white",
  },
  frontPageOrcaImageBox: {
    height: '25%'
  }
}))

const NewHomeSiteMenu = () => {
  const classes = useStyles()
  const [value, setValue] = useState("about")
 
  /*
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } 
  */

  const notificationDoc = `https://docs.google.com/forms/d/1oYSTa3QeAAG-G_eTxjabrXd264zVARId9tp2iBRWpFs/edit`

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <>
    <Paper elevation={0} square>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Box flexGrow={1}>

          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" flexDirection="row">

              <CardMedia
                component="img"
                alt="Orcasound Logo"
                className={classes.logoImage}
                image={OrcasoundLogo}
              />

              <Box display="flex" flexDirection="column" justifyContent="center">
                <Typography component="h1" variant="h1">
                  <Link
                    component={RouterLink}
                    to="/"
                    color="inherit"
                    underline="none"
                    variant="inherit"
                    className={classes.link}
                  >
                    <Box ml={1} pt={0} >
                      <h1>Orcasound</h1>
                    </Box>
                  </Link>
                </Typography>
              </Box>

            </Box>
          </Box>


          </Box>

          <Box display="flex" flexDirection="column" justifyContent="center">
            <div className={classes.rightToolBar}>
              <IconButton className={classes.navBarIconButton} color="inherit">Listen</IconButton>
              <IconButton className={classes.navBarIconButton} color="inherit">Learn</IconButton>
              <IconButton className={classes.navBarIconButton} color="inherit">Projects</IconButton>
              <IconButton className={classes.navBarIconButton} color="inherit">Blogs</IconButton>
              <IconButton className={classes.navBarIconButton} color="inherit">About</IconButton>
              <IconButton className={classes.navBarIconButton} color="inherit">Support</IconButton>
              <IconButton className={classes.navBarIconButton} color="inherit">SUBSCRIBE</IconButton>
            </div>
        </Box>

        </Toolbar>
      </AppBar>
    </Paper>
    <Grid container spacing={1}>
      <Grid item xs={6}>
          <About />
           <Box className={classes.frontPageOrcaImageBox}>
            <CardMedia
              component="img"
              alt="Orca Image"
              image={OrcaImage}
            />
          </Box>

      </Grid>
      <Grid item xs={6}>
        <SimpleMap />
      </Grid>
    </Grid>
    </>
  )
}

export default NewHomeSiteMenu
