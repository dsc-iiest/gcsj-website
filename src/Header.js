import "./App.css"
import {IconButton, Menu, MenuItem, AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
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
            <MenuItem sx = {{color: "black"}} onClick={handleClose}>Home</MenuItem>
            <MenuItem sx = {{color: "black"}} onClick={handleClose}>Report</MenuItem>
            <MenuItem sx = {{color: "black"}} onClick={handleClose}>Leaderboard </MenuItem>
        </Menu>
    </Toolbar>
  )
}

const HeaderTabs = ()=>{
  const [value, setValue] = useState(0);
  return (
    <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} sx={{ marginLeft: "auto" }} TabIndicatorProps={{ style: { "backgroundColor": "rgb(0, 200, 255)" } }}>
      <NavLink className="navlink" to="/"><Tab sx={{ fontSize: "0.8rem" }} label="Home" /></NavLink>
      <NavLink className="navlink" to="/report"><Tab sx={{ fontSize: "0.8rem" }} label="Report" /></NavLink>
      <NavLink className="navlink" to="/leaderboard"><Tab sx={{ fontSize: "0.8rem" }} label="Leaderboard" /></NavLink>
    </Tabs>
  )
}

const HeaderComp = () => {
  const theme = useTheme()
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <AppBar sx = {{background: "rgba(0, 0, 0, 0.7)"}}>
      <Toolbar>
        <img src={CloudIcon} alt="appIcon" style = {{"width": "1.8rem", "margin": "0.5rem"}} /><Typography variant="body1">GCSJ</Typography>
        {mobileView?<Menubutton />:<HeaderTabs />}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComp