import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './components/Homepage'
import LeaderBoard from './components/LeaderB';
import Resources from './components/Resources';
import Footer from './components/footer';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Homepage/>} />
                <Route exact path="/leaderboard" element={<LeaderBoard />} />
                <Route exact path="/resources" element={<Resources />} />
            </Routes>
            <Footer />
        </Router>
    )
}