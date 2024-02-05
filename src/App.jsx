import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ProjectDetails from './components/ProjectDetails'
import ExperienceDetails from './components/ExperienceDetails'
import HomePage from './components/HomePage'


function App() {
return (
    <>
    <NavBar />
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectdetails/:projectId" element={<ProjectDetails/>}/>
        <Route path="/experiencedetails/:experienceId" element={<ExperienceDetails/>}/>
    </Routes>
    </>
)
}

export default App
