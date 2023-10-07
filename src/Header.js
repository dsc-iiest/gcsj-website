import {IconButton, Menu, MenuItem, AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, CssBaseline } from '@mui/material'
import { React, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloudIcon from './GCRFicon.png'
import { NavLink } from "react-router-dom";

const Menubutton = () => {
    const [anchorElm, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false)

    const handleClose = ()=>{
        setAnchorElm(null);
        setOpen(false);
    }
    const handleClick = (e)=>{
        setAnchorElm(e.currentTarget);
        setOpen(true);
    }

  return (
    <Toolbar sx = {{marginLeft: "auto"}}>
        <IconButton color = "inherit" onClick = {handleClick}>
            <MenuIcon />
        </IconButton>
        <Menu 
            anchorEl={anchorElm}
            open = {open}
            onClose={handleClose}			
        >
            <NavLink style = {{textDecoration: "none"}} to = "/"><MenuItem sx = {{ color: "black"}} onClick={handleClose}>Home</MenuItem></NavLink>
            <NavLink style = {{textDecoration: "none"}} to = "/resources"><MenuItem sx = {{ color: "black"}} onClick={handleClose}>Resources</MenuItem></NavLink>
            <NavLink style = {{textDecoration: "none"}} to = "/leaderboard"><MenuItem sx = {{ color: "black"}} onClick={handleClose}>Leaderboard </MenuItem></NavLink>
        </Menu>
    </Toolbar>
  )
}

const HeaderTabs = ()=>{
  return (
    <Tabs textColor="inherit" sx={{ marginLeft: "auto" }} TabIndicatorProps={{ style: { "backgroundColor": "rgb(0, 200, 255)" } }}>
      <NavLink className="navlink" to="/"><Tab sx={{color: "white", fontWeight: 660, fontSize: "0.8rem" }} label="Home" /></NavLink>
      <NavLink className="navlink" to="/resources"><Tab sx={{color: "white", fontWeight: 660, fontSize: "0.8rem" }} label="Resources" /></NavLink>
      <NavLink className="navlink" to="/leaderboard"><Tab sx={{color: "white", fontWeight: 660, fontSize: "0.8rem" }} label="Leaderboard" /></NavLink>
    </Tabs>
  )
}

const HeaderComp = () => {
  const theme = useTheme()
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
    <AppBar sx = {{backdropFilter: "blur(4px)", background: "rgba(0, 0, 0, 0.7)"}}>
      <Toolbar>
        <img src={CloudIcon} alt="appIcon" style = {{"width": "1.8rem", "margin": "0.5rem"}} /><Typography variant="body1">GCSJ</Typography>
        {mobileView?<Menubutton />:<HeaderTabs />}
      </Toolbar>
    </AppBar>
    <CssBaseline />
    </>
  )
}

export default HeaderComp