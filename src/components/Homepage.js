import Content from './content';
import { CssBaseline, Box, Typography, IconButton} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
function Homepage() {
  const scrollToContent = () => {
    const scrollPosition = (window.innerHeight-(window.innerHeight*0.1));
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", justifyItems: "center", textAlign: "center" }} className="banner">
        <Typography className='bannerText'
          sx={{
            fontFamily: "Poppins",
            fontSize: "4.2em",
            fontWeight: "bold",
            lineHeight: "5rem",
          }}> Cloud Study Jams
        </Typography>
      <IconButton 
      onClick={scrollToContent}
      sx = {{
        color: "white",
        position: "absolute",
        bottom: 0
      }}><KeyboardDoubleArrowDownIcon 
      sx = {{
        fontSize: "2rem", 
        opacity: 0.5,
        transition:"0.5s ease",
        "&:hover":{
          transform: "scale(1.5)"
        }}} /></IconButton>
      </Box>
      <Content />
      <CssBaseline />
    </>
  )
}

export default Homepage;
