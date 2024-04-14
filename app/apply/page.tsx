import React from 'react'
import ProjectForm from '../components/ProjectForm'
import NavBar from '../components/NavBar'

function NewProject() {
  return (    
    <div className="flex min-h-screen flex-col items-center justify-between p-5  bg-custom-radial">
      <NavBar/>
      <ProjectForm/>
    </div>
  )
}

export default NewProject