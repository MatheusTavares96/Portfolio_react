import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'



const Projects = () => {
    const projects = [
      {
        id: 1,
        title: 'Fashion Store',
        desc: 'Modern e-commerce platform with shopping cart, authentication, and payment integration.',
        tech: ["React", "Firebase", "Tailwind CSS"],
        image: proj1,
    },{
        id: 2,
        title: 'Invoice AI',
        desc: 'AI-powered invoice generator with authentication and cloud storage.',
        tech: ["React", "Node.js", "OpenAI API"],
        image: proj2,
    },{
        id: 3,
        title: 'Admin Dashboard',
        desc: 'Interactive dashboard with analytics, charts, and user management.',
        tech: ["React", "Chart.js", "Tailwind CSS"],
        image: proj3,
    },
    {
        id: 4,
        title: 'Personal Portfolio',
        desc: 'Responsive portfolio showcasing projects, skills, and professional experience.',
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        image: proj4,
    },{
        id: 5,
        title: 'Task Manager',
        desc: 'Task management application with drag-and-drop and user authentication.',
        tech: ["React", "Firebase", "CSS"],
        image: proj5,
    },{
        id: 6,
        title: 'Light Mode/Dark Mode',
        desc: 'Interactive dark and light mode for any websites.',
        tech: ["JavaScript", "API", "CSS"],
        image: proj6,
    },
  ]

  return (
    <section className='py-16 bg-gray-900' id='projects'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
              Projects.
            </h2>
            <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'>
            </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects.map((project) => (
                  <div key={project.id} className='bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <img src={project.image} alt={project.title} className='w-full h-44 object-cover hover:opacity-90 transition-opacity duration-300'/>
                    <div className='p-4'>
                      <h3 className='text-lg font-semibold text-white group-hover:text-primary transition-colors'>
                        {project.title}
                      </h3>
                      <p className='text-gray-400 text-sm mt-1'>
                        {project.desc}
                      </p>
                      <div className='flex flex-wrap gap-1.5 mt-3'>
                        {project.tech.map((tec, idx) => (
                          <span key={idx} className='text-xs px-2 py-0.5 bg-gray-700  text-gray-300 rounded hover:bg-primary hover:text-white transition-colors duration-300'>
                            {tec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                ))}

              </div>
          </div>

        </div>
    </section>
  )
}

export default Projects