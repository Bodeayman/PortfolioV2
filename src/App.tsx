import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, ExternalLink, Calendar, Award, BookOpen, Terminal, Coffee, Heart, Send, MapPin, Phone } from 'lucide-react';
// Inside your component

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const stats = [
    { icon: <Calendar size={20} />, label: 'Years Experience', value: '1+' },
    { icon: <Terminal size={20} />, label: 'Projects Completed', value: '10+' },
    { icon: <Coffee size={20} />, label: 'Coffee Consumed', value: '∞' },
    { icon: <Heart size={20} />, label: 'Happy Clients', value: '100+' },
  ];

  const experiences = [
    {
      company: 'Personal Projects',
      role: 'Flutter Developer',
      period: '2024-Present',
      description: 'Building Mobile Applications using Flutter and Dart',
      achievements: ['Created some Applications', 'Implemented responsive design and optimized performance']
    },
    {
      company: 'Personal Projects',
      role: 'Web Developer',
      period: '2024 - 2025',
      description: 'Building personal web applications using Different technologies',
      achievements: ['Created a portfolio website showcasing my projects', 'Built a simple e-commerce site']
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950 text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg shadow-dark-900/50' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-blue-400">AA</span>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : 'text-gray-300'
                    }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative bg-gradient-to-r from-dark-900 to-dark-950 pt-20">
        <div className="absolute inset-0 bg-blue-600/10"></div>
        <div className="container mx-auto px-6 py-32 relative">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
            <div className="animate-fadeIn text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Abdullah Ayman</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-300">
                Full Stack Mobile Developer crafting exceptional digital experiences with cutting-edge technologies
              </p>
              <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
                <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  View My Work
                </a>
                <a href="/resume.pdf" download="Abdullah_Ayman_Resume.pdf" className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400/10 transition-colors">
                  Download Resume
                </a>

              </div>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a href="https://github.com/Bodeayman" className="p-3 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors">
                  <Github size={24} className="text-blue-400" />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-ayman-96b37b2ba/" className="p-3 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors">
                  <Linkedin size={24} className="text-blue-400" />
                </a>
                <a href="abdulluhayman@gmail.com" className="p-3 bg-dark-800 rounded-full hover:bg-dark-700 transition-colors">
                  <Mail size={24} className="text-blue-400" />
                </a>
              </div>
            </div>

            <img
              src="/images/image.jpg"
              alt="Abdullah Ayman"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl ring-4 ring-blue-400/30"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-dark-900" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C480,74 960,74 1440,0 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </header>


      {/* Stats Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-dark-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-100 mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-950">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <User className="text-blue-400" size={32} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hello, I'm Abdullah, a full-stack developer and a Computer Science student at UST-ZC. With hands-on experience in web development, I specialize in building responsive, user-friendly applications. My journey in coding has led me to master key technologies like HTML, CSS, JavaScript, and PHP.
                In addition to my web development skills, I have a strong focus on mobile app development with Flutter, where I’ve been able to create efficient and beautiful cross-platform apps. I'm passionate about exploring new tools and frameworks to enhance my skills in both frontend and backend development.
                When I'm not coding, I enjoy contributing to open-source projects, writing technical blogs, and mentoring fellow developers. My goal is to either work with a leading tech company or start my own venture in the tech industry.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <BookOpen size={20} />
                  <span>Read My Blog</span>
                </a>
                <a href="#" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                  <Award size={20} />
                  <span>View Certifications</span>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="text-xl font-semibold text-gray-100">{exp.role}</h4>
                  <p className="text-blue-400 mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-gray-300 mb-3">{exp.description}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <Code className="text-blue-400" size={32} />
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          </div>
          <div className="grid gap-8">
            <div className="bg-dark-800 p-8 rounded-xl shadow-lg shadow-dark-900/50">
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Flutter', level: 90 },
                  { name: 'Node.js', level: 80 },
                  { name: 'Express.js', level: 80 },
                  { name: 'Mongodb', level: 80 },
                  { name: 'Dart', level: 85 },
                  { name: 'PHP', level: 88 },
                  { name: 'Laravel', level: 70 },
                  { name: 'HTML', level: 80 },
                  { name: 'CSS', level: 78 },
                  { name: 'JavaScript', level: 82 },
                  { name: 'MySql', level: 90 },
                  { name: 'Python', level: 85 },
                  { name: 'C#', level: 90 },
                  { name: 'C++', level: 85 },

                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-950">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <Briefcase className="text-blue-400" size={32} />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'The first full stack project for E-Commerce have a lot of features using PHP and MySql',
                image: '/images/proj1.png',
                tags: ['HTML', 'CSS', 'JS', 'Mysql', 'PHP'],
                link: 'https://github.com/Bodeayman/SimpleE-Com'
              },
              {
                title: 'ReadSphere',
                description: 'Personal Library with admin dashboard that users can save books',
                image: '/images/proj2.png',

                tags: ['ASP.NET', 'Sql Server', 'HTML', 'CSS'],
                link: 'https://github.com/Bodeayman/ReadSphere-V2-'
              },
              {
                title: 'Khair-ZC',
                description: 'A website for our club in ZC , You can Join any charity or organize it!',
                image: '/images/proj3.png',

                tags: ['React', 'Flask', 'Mysql', 'Postman'],
                link: 'https://github.com/0x3mr/Khair-ZC'
              },
              {
                title: 'Bookly App',
                description: 'Book app to show books related to programming using Google API',
                image: '/images/proj5.jpg',

                tags: ['Flutter', 'Google Api', 'Cubit', 'Dart'],
                link: 'https://github.com/Bodeayman/BookStore'
              },
              {
                title: 'Notes App',
                description: 'This project is a Notes app developed with Flutter and Hive for local storage, allowing users to create, edit, and delete ',
                image: '/images/proj4.jpg',

                tags: ['Cubit', 'Dart', 'Flutter', 'Hive'],
                link: 'https://github.com/Bodeayman/NotesApp'
              },
              {
                title: 'Google Classroom Clone',
                description: 'A Clone Demonstartion for Google Classroom using Flutter as UI.',
                image: '/images/proj6.jpg',

                tags: ['Cubit', 'Dart', 'Flutter'],
                link: 'https://github.com/Bodeayman/GC_Clone'
              },

            ].map((project) => (
              <div key={project.title} className="group bg-dark-800 rounded-xl overflow-hidden shadow-lg shadow-dark-900/50 hover:shadow-xl hover:shadow-dark-900/50 transition-all">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-contain" />
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                    <a href={project.link} className="text-white flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Project</span>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-4 mb-12">
            <Mail className="text-blue-400" size={32} />
            <h2 className="text-4xl font-bold">Get in Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center">
                      <MapPin className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Location</h3>
                      <p className="text-gray-400">Cairo , Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Email</h3>
                      <a href="mailto:john@example.com" className="text-blue-400 hover:text-blue-300">abdulluhayman@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center">
                      <Phone className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Phone</h3>
                      <p className="text-gray-400">+201143512531 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-dark-800 p-8 rounded-xl shadow-lg shadow-dark-900/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-dark-700 border border-dark-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-950 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Abdullah Ayman</h3>
              <p className="text-gray-400 mb-4">Building digital experiences that make a difference.</p>
              <div className="flex space-x-4">
                <a href="https://github.com/Bodeayman" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-ayman-96b37b2ba/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="abdulluhayman@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Get in Touch</h3>
              <p className="text-gray-400 mb-2">Feel free to reach out for collaborations or just a friendly hello</p>
              <a href="mailto:john@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                abdulluhayman@example.com
              </a>
            </div>
          </div>
          <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-400">
            <p>©2025 Abdullah Ayman. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;