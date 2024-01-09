import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import ExperienceDetails from './components/ExperienceDetails'
import EducationDetails from './components/EducationDetails'

function App() {
return (
    <>
    <NavBar />
    <AboutMe />
    <Projects />
    <Skills />
    <Experience />
    <Education />
    <Footer />
    
    
    


    </>
)
}

export default App
