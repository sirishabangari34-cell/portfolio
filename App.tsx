import { useState, useEffect } from 'react'
import { Moon, Sun, Download, Mail, Phone, MapPin, Github, Linkedin, Award, Code, Trophy, Briefcase } from 'lucide-react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Bangari Shireesha</h1>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#hero" className="hover:text-purple-600 transition">Home</a>
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#education" className="hover:text-purple-600 transition">Education</a>
            <a href="#internships" className="hover:text-purple-600 transition">Internships</a>
            <a href="#skills" className="hover:text-purple-600 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
            <a href="#certifications" className="hover:text-purple-600 transition">Certifications</a>
            <a href="#achievements" className="hover:text-purple-600 transition">Achievements</a>
            <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bangari Shireesha</h1>
          <p className="text-lg md:text-xl mb-2">B.Tech Student | Aspiring Software Developer</p>
          <p className="text-base md:text-lg mb-4 flex items-center justify-center"><MapPin className="inline mr-2" />Hyderabad, Telangana, India</p>
          <p className="text-base md:text-lg mb-4 flex items-center justify-center"><Phone className="inline mr-2" />+91 8639140722</p>
          <p className="text-base md:text-lg mb-6 flex items-center justify-center"><Mail className="inline mr-2" />sirishabangari34@gmail.com</p>
          <p className="max-w-2xl mx-auto mb-8 text-sm md:text-base">Motivated and dedicated upcoming graduate passionate about the IT industry, eager to apply academic knowledge in real-world projects and contribute to innovative companies.</p>
          <div className="space-x-4 flex flex-col sm:flex-row justify-center">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition transform hover:scale-105 mb-4 sm:mb-0"><Download className="inline mr-2" />Download Resume</button>
            <a href="#contact" className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition transform hover:scale-105 text-center">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-center">I am currently pursuing B.Tech at AVN Institute of Engineering and Technology with a CGPA of 9.23. I am passionate about software development, web technologies, and building practical projects that solve real-world problems.</p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold">AVN Institute Of Engineering And Technology</h3>
              <p className="text-purple-600">B.Tech (2023–2027)</p>
              <p>GPA: 9.23/10</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold">MJPTBCWRJIC College</h3>
              <p className="text-purple-600">Intermediate (2021–2023)</p>
              <p>Score: 97%</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold">MJPTBCWRIE School</h3>
              <p className="text-purple-600">SSC (2021)</p>
              <p>Grade: 10 GPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Internships</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Briefcase className="mr-3 text-purple-600" size={24} />
                <h3 className="text-xl font-semibold">BSNL (Bharat Sanchar Nigam Limited)</h3>
              </div>
              <p className="text-purple-600 mb-2">Telecommunications Internship</p>
              <p>Gained hands-on experience in telecommunications systems, network infrastructure, and customer service operations. Worked on troubleshooting network issues and understanding telecom protocols.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Briefcase className="mr-3 text-purple-600" size={24} />
                <h3 className="text-xl font-semibold">Neev AI Cloud</h3>
              </div>
              <p className="text-purple-600 mb-2">AI and Cloud Computing Internship</p>
              <p>Explored artificial intelligence technologies and cloud computing platforms. Assisted in developing AI-powered applications and gained experience with cloud services, machine learning models, and data processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:scale-105">
              <Code className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold">Python</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:scale-105">
              <Code className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold">HTML</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:scale-105">
              <Code className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold">CSS</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:scale-105">
              <Code className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:scale-105">
              <Code className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold">SQL</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Digital Thermometer Using DHT11</h3>
            <p className="mb-4">Built a digital thermometer using DHT11 sensor to measure real-time temperature and humidity. Integrated with microcontroller using C/C++ or Python. Displayed output through LCD/web interface.</p>
            <div className="bg-gray-200 dark:bg-gray-600 h-48 rounded-lg flex items-center justify-center">
              <span>Project Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <Award className="inline mr-2 text-purple-600" />
              IBM SkillsBuild – Artificial Intelligence Fundamentals
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <Award className="inline mr-2 text-purple-600" />
              IBM SkillsBuild – Customer Engagement: Problem Solving and Process Control
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <Award className="inline mr-2 text-purple-600" />
              IBM SkillsBuild – Customer Engagement: Communication and Personality Dynamic
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <Trophy className="inline mr-2 text-purple-600" />
              Secured 2nd place in Interdepartmental Project Expo (2024–2025)
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <Award className="inline mr-2 text-purple-600" />
              Campus Ambassador certificate for representing and promoting events on campus
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4 flex items-center"><Mail className="inline mr-2" />sirishabangari34@gmail.com</p>
              <p className="mb-4 flex items-center"><Phone className="inline mr-2" />+91 8639140722</p>
              <div className="flex space-x-4">
                <a href="#" className="text-purple-600 hover:text-purple-800"><Linkedin size={24} /></a>
                <a href="#" className="text-purple-600 hover:text-purple-800"><Github size={24} /></a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600" />
                <textarea placeholder="Message" rows={4} className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"></textarea>
                <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Bangari Shireesha. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-purple-400"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-purple-400"><Github size={24} /></a>
            <a href="#" className="hover:text-purple-400"><Mail size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App