import Reportcontent from './reportContent'
import Header from './Header';
import Footer from './footer';
import { CssBaseline } from '@mui/material';
const Report = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Reportcontent />
            <CssBaseline />
            <Footer />
        </>
    )
}

export default Report