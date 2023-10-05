import Homepage from './Homepage'
import './App.css';
import './headerDesign.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaderBoard from './LeaderB';
import Report from './Report';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Homepage/>} />
                <Route exact path="/LeaderBoard" element={<LeaderBoard />} />
                <Route exact path="/Report" element={<Report />} />
            </Routes>
        </Router>
    )
}