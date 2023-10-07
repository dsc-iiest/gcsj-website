import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GCRFicon from './GCRFicon.png'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link as RouterLink } from 'react-router-dom';


export default function Header() {
	return (
		<Box sx={{
			display: 'flex',
			backgroundColor: "#00000090",
			backdropFilter: "blur(0.3rem)",
			gap: "1rem",
			padding: "1rem",
			position: "fixed",
			top: "0.1px",
			width: "100%",
			zIndex: 1,
		}}>
			<Typography sx={{
				fontSize: '1.5rem',
				fontFamily: 'Poppins',
				fontWeight: 500,
				flexGrow: 1,
				color: "#fff"
			}}
			>
				<img src={GCRFicon} style={{ "width": "2rem", position: "relative", top: "0.2rem" }} /> GCSJ
			</Typography>
			<RouterLink to="/"><Button className='btn' sx={{ color: "#fff" }} startIcon={<HomeIcon />}>Home</Button></RouterLink>
			<RouterLink to="/Report"><Button className='btn' sx={{ color: "#fff" }} startIcon={<FormatListBulletedIcon />}>report</Button></RouterLink>
			<RouterLink to="/LeaderBoard"><Button className='btn' sx={{ color: "#fff" }} startIcon={<LeaderboardIcon />}>leaderboard</Button></RouterLink>

		</Box>
	)
}