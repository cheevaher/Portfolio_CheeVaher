// import { useEffect, useState } from "react"
// import { fetchProjects } from "../api"
// import { Github, ExternalLink } from 'lucide-react'
// import { motion } from "framer-motion"

// type Project = {
//   id: number
//   title: string
//   description: string
//   imageUrl?: string
//   githubUrl?: string
//   liveUrl?: string
//   tags?: string[]
// }

// export default function ProjectList() {
//   const [projects, setProjects] = useState<Project[]>([])

//   useEffect(() => {
//     // Simulate API fetch with mock data
//     setProjects([
//       {
//         id: 1,
//         title: "E-Commerce Platform",
//         description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
//         githubUrl: "#",
//         liveUrl: "#",
//         tags: ["React", "Node.js", "PostgreSQL"]
//       },
//       {
//         id: 2,
//         title: "Task Management App",
//         description: "Productivity application for teams to collaborate on projects with real-time updates.",
//         githubUrl: "#",
//         liveUrl: "#",
//         tags: ["TypeScript", "Firebase", "Tailwind"]
//       },
//       {
//         id: 3,
//         title: "Weather Dashboard",
//         description: "Interactive weather application with 5-day forecasts and location search.",
//         githubUrl: "#",
//         liveUrl: "#",
//         tags: ["React", "API Integration", "Chart.js"]
//       }
//     ])
//   }, [])

//   return (
//     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//       {projects.map((project, index) => (
//         <motion.div
//           key={project.id}
//           className="group overflow-hidden rounded-xl shadow-lg dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-1 hover:shadow-xl"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: index * 0.2 }}
//           viewport={{ once: true }}
//         >
//           {/* Thumbnail / Title Icon */}
//           <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl font-extrabold opacity-90">
//             {project.title.split(' ').map(word => word[0]).join('')}
//           </div>

//           {/* Content */}
//           <div className="p-6">
//             <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
//               {project.title}
//             </h3>
//             <p className="mb-4 text-sm leading-relaxed dark:text-gray-300 text-gray-600">
//               {project.description}
//             </p>

//             {/* Tags */}
//             {project.tags && (
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tags.map(tag => (
//                   <span
//                     key={tag}
//                     className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Links */}
//             <div className="flex flex-wrap gap-3">
//               {project.githubUrl && (
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
//                 >
//                   <Github size={16} />
//                   Code
//                 </a>
//               )}
//               {project.liveUrl && (
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all"
//                 >
//                   <ExternalLink size={16} />
//                   Live Demo
//                 </a>
//               )}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

import { useEffect, useState } from "react"
import { Github, ExternalLink } from 'lucide-react'
import { motion } from "framer-motion"

type Project = {
  id: number
  title: string
  description: string
  imageUrl?: string
  githubUrl?: string
  liveUrl?: string
  tags?: string[]
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // Example placeholder projects (for showcasing design & frontend logic)
    setProjects([
      {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive personal portfolio built with React, TypeScript, and Tailwind CSS. Includes dark mode and animated sections.",
        githubUrl: "#",
        liveUrl: "#",
        tags: ["React", "Tailwind", "TypeScript"]
      },
      {
        id: 2,
        title: "Online Learning Platform UI",
        description: "A front-end design for an e-learning platform. Features course listings, categories, and a clean dashboard interface.",
        githubUrl: "#",
        liveUrl: "#",
        tags: ["React", "Vite", "Responsive Design"]
      },
      {
        id: 3,
        title: "Dashboard Mockup",
        description: "An interactive admin dashboard template with charts and stats, made to practice data display with real-time UI design.",
        githubUrl: "#",
        liveUrl: "#",
        tags: ["React", "Tailwind", "Chart.js"]
      }
    ])
  }, [])

  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="group overflow-hidden rounded-xl shadow-lg dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700 transition-transform hover:-translate-y-1 hover:shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Project Image Placeholder */}
          <div className="h-48 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl font-extrabold opacity-90">
            {project.title.split(' ').map(word => word[0]).join('')}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
              {project.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed dark:text-gray-300 text-gray-600">
              {project.description}
            </p>

            {/* Tags */}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

