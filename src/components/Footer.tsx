import { Github, Linkedin, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer
      id="contact"
      className={`pt-16 pb-10 px-4 transition-colors duration-300 ${
        darkMode ? 'bg-[#0f172a] text-gray-300' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 - Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-700">Chee Vaher</h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Front-end developer creating beautiful and functional web applications using modern tools and frameworks.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-400 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="#"
              className={`hover:text-blue-400 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://wa.me/8562077668374"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-400 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="space-y-4 md:pl-8"> {/* ✅ ขยับไปทางขวา */}
          <h3 className="text-xl font-semibold text-blue-500">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors font-medium ${
                    darkMode
                      ? 'text-gray-300 hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-500">Get In Touch</h3>
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <a
              href="mailto:cheevaher0101@gmail.com?subject=Hello%20Chee&body=I%20want%20to%20connect%20with%20you!"
              className={`underline underline-offset-2 hover:text-blue-500 transition-colors ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              cheevaher0101@gmail.com
            </a>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Let’s connect and build something great together.
          </p>
          <a
            href="https://wa.me/8562077668374"
            className={`inline-block px-6 py-2 rounded-full font-medium transition-colors shadow-md ${
              darkMode
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`mt-12 pt-6 text-center border-t ${
          darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-500'
        }`}
      >
        <p>© {new Date().getFullYear()} Chee Vaher. All rights reserved.</p>
      </div>
    </footer>
  )
}
