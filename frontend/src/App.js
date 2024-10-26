import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProjectList from './components/ProjectList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contribute" element={<ProjectList />} />
            </Routes>
        </Router>
    );
}

export default App;
