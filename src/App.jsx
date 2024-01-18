import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './SmallScreen.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import ExperienceDetails from './components/ExperienceDetails'
import HomePage from './components/HomePage'


function App() {
return (
    <>
    <NavBar />
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/aboutme" element={<AboutMe />}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/education" element={<Education/>}/> */}
        <Route path="/projectdetails/:projectId" element={<ProjectDetails/>}/>
        <Route path="/experiencedetails/:experienceId" element={<ExperienceDetails/>}/>
    </Routes>
    </>
)
}

export default App
