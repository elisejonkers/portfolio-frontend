import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import ExperienceDetails from './components/ExperienceDetails'
import EducationDetails from './components/EducationDetails'
import HomePage from './components/HomePage'


function App() {
return (
    <>
    <Header />
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
        <Route path="/educationdetails/:educationId" element={<EducationDetails/>}/>
    </Routes>
    </>
)
}

export default App
