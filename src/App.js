import Homepage from './Homepage'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaderBoard from './LeaderB';
import Report from './Resources';
import Footer from './footer';
import Header from './Header';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Homepage/>} />
                <Route exact path="/leaderboard" element={<LeaderBoard />} />
                <Route exact path="/resources" element={<Report />} />
            </Routes>
            <Footer />
        </Router>
    )
}