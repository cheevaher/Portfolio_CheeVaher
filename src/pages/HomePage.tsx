import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectList from '../components/ProjectList'
import {
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function HomePage({ darkMode }: { darkMode: boolean }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const skills = [
    { name: 'React', icon: <FaReact size={28} />, color: 'from-blue-700 to-cyan-700' },
    { name: 'Bootstrap', icon: <FaBootstrap size={28} />, color: 'from-purple-700 to-indigo-800' },
    { name: 'JavaScript', icon: <SiJavascript size={28} />, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Node.js', icon: <FaNodeJs size={28} />, color: 'from-green-700 to-emerald-600' },
    { name: 'Tailwind', icon: <SiTailwindcss size={28} />, color: 'from-teal-600 to-cyan-600' },
    { name: 'MySQL', icon: <SiMysql size={28} />, color: 'from-pink-700 to-purple-700' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={28} />, color: 'from-blue-800 to-blue-600' },
  ]

  const [text] = useTypewriter({
    words: ['Front-End Developer', 'UI/UX Designer'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  })

  return (
    <main className={`pt-12 font-sans transition-colors duration-300 ${darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={`uppercase text-sm tracking-widest mb-7 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Welcome To My Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Hi, I'm <span className="text-indigo-700 dark:text-indigo-400">Chee Vaher</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              I’m a{' '}
              <span className="text-blue-500">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h2>
            <p className={`text-base md:text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              While I may be at the beginning of my professional journey, I have built a solid foundation in front-end development.
              I’m highly motivated, eager to learn, and committed to creating clean, accessible, and user-friendly web interfaces using tools like React.js and Tailwind CSS.
            </p>
            <a
              href="/CheeVaher_CV.pdf"
              download
              className="inline-block mt-4 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg font-semibold shadow-md transition"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="md:w-1/3 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Profile"
              className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-gradient-to-r from-indigo-700 to-cyan-700 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Here are some of my proudest creations. Each project was built with care and attention to detail. (Demo Project)
          </p>
        </div>
        <ProjectList />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className={`py-16 max-w-7xl mx-auto px-4 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-gradient-to-r from-blue-700 to-blue-900 text-transparent bg-clip-text">
              Technical Skills
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white text-center font-medium shadow-md hover:scale-105 transition-transform`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex flex-col items-center gap-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 max-w-7xl mx-auto px-4 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block bg-gradient-to-r from-indigo-700 to-blue-700 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-xl overflow-hidden border-4 border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src={`${import.meta.env.BASE_URL}image3.jpeg`}
                alt="About Me"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            className={`md:w-2/3 space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-justify">
              I graduated with a degree in Computer Engineering and had the opportunity to work at a company where I was responsible for designing and developing front-end websites. This hands-on experience strengthened my understanding of modern web technologies and improved my problem-solving and collaboration skills in real-world environments.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              My technical toolbox includes <span className="font-medium text-indigo-500">React.js</span>, <span className="font-medium text-indigo-500">Tailwind CSS</span>, <span className="font-medium text-indigo-500">Bootstrap</span>, <span className="font-medium text-indigo-500">JavaScript</span>, <span className="font-medium text-indigo-500">TypeScript</span>, <span className="font-medium text-indigo-500">MySQL</span>, and <span className="font-medium text-indigo-500">PostgreSQL</span>. I take pride in writing clean, maintainable code and continuously strive to improve.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              I'm seeking an opportunity to grow alongside a supportive team, contribute meaningfully, and continue learning in real-world projects. My goal is to combine my technical expertise with creative problem-solving to build exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}
