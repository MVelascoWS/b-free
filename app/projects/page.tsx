import React from 'react'
import ProjectCard from '../components/ProjectCard'
import NavBar from '../components/NavBar'

const Proyectos = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-5  bg-custom-radial">
    <NavBar/>
        <ProjectCard/>
        
    </div>
  )
}

export default Proyectos