import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, User, Code, Briefcase, ExternalLink, Calendar, Award, BookOpen, Terminal, Coffee, Heart, Send, MapPin, Phone, Star, Quote, ChevronRight, Sparkles, TrendingUp, Lightbulb, Code2 } from 'lucide-react';
import SkillsSection from './components/Skills';
// Inside your component

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

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
    { icon: <Calendar size={20} />, label: 'Years Experience', value: '2+' },
    { icon: <Terminal size={20} />, label: 'Projects Completed', value: '10+' },
    { icon: <Coffee size={20} />, label: 'Coffee Consumed', value: '∞' },
    { icon: <Heart size={20} />, label: 'Happy Clients', value: '100+' },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      content: 'Working with Abdullah was an absolute pleasure. His technical expertise and attention to detail transformed our vision into reality. The mobile app he developed exceeded all our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      content: 'Exceptional developer with remarkable problem-solving skills. Abdullah delivered a complex e-commerce platform on time and within budget. His code quality is outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthHub',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      content: 'Abdullah brought our startup\'s ideas to life with incredible precision. His Flutter expertise and dedication to excellence made him an invaluable partner in our journey.',
      rating: 5
    }
  ];

  const experiences = [
    {
      company: 'Personal Projects',
      role: 'Backend Developer',
      period: '2024-2025',
      description: 'Building Backend Projects and APIs using .NET MVC and Web API',
      achievements: ['Created some Applications', 'Implemented Business logic and optimized performance']
    },
    {
      company: 'Personal Projects',
      role: 'Flutter Developer',
      period: '2024-2025',
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
    <div className="min-h-screen bg-black text-gray-100">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black z-[60]">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolling ? 'bg-black/90 backdrop-blur-xl shadow-2xl border-b border-amber-500/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg blur-md group-hover:blur-lg transition-all"></div>
                <a className="relative text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent px-4 py-2 border border-amber-500/30 rounded-lg backdrop-blur-sm" href="#">AA</a>
              </div>
              <Sparkles className="text-black animate-pulse " size={20} />
            </div>
            <div className="hidden md:flex items-center space-x-1 bg-zinc-900/50 backdrop-blur-sm rounded-full px-2 py-2 border border-amber-500/10">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-6 py-2 rounded-full transition-all duration-300 group ${activeSection === item.toLowerCase() ? 'text-black' : 'text-gray-300 hover:text-amber-400'
                    }`}
                >
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></span>
                  )}
                  <span className="relative font-medium">{item}</span>
                  {activeSection === item.toLowerCase() && (
                    <span className=""></span>
                  )}
                </a>
              ))}
            </div>
            <a href="#contact" className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 group">
              <span>Hire Me</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative bg-black pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
        <div className="container mx-auto px-2 py-32 relative">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
            <div className="animate-fadeIn text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="text-amber-400" size={16} />
                <span className="text-amber-400 text-sm font-medium">Available for Premium Projects</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">Abdullah Ayman</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-300">
                Elite Full Stack Developer crafting <span className="text-amber-400 font-semibold">exceptional</span> digital experiences with cutting-edge technologies
              </p>
              <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
                <a href="#projects" className="relative group bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>View My Work</span>
                    <Sparkles size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
                <a href="/resume.pdf" download="Abdullah_Ayman_Resume.pdf" className="border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-full font-bold hover:bg-amber-500/10 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                  Download Resume
                </a>
              </div>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a href="https://github.com/Bodeayman" className="p-4 bg-zinc-900 border border-amber-500/20 rounded-full hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 group">
                  <Github size={24} className="text-amber-400 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-ayman-96b37b2ba/" className="p-4 bg-zinc-900 border border-amber-500/20 rounded-full hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 group">
                  <Linkedin size={24} className="text-amber-400 group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:abdulluhayman@gmail.com" className="p-4 bg-zinc-900 border border-amber-500/20 rounded-full hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 group">
                  <Mail size={24} className="text-amber-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full blur-lg group-hover:blur-xl transition-all opacity-75"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-amber-500/50">
                <img
                  src="/images/image.jpg"
                  alt="Abdullah Ayman"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-zinc-950" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C480,74 960,74 1440,0 L1440,74 L0,74 Z" />
          </svg>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl blur-md group-hover:blur-lg transition-all opacity-50"></div>
                  <div className="relative bg-zinc-900 border border-amber-500/30 rounded-xl w-full h-full flex items-center justify-center text-amber-400 group-hover:border-amber-500 transition-all">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-2">{stat.value}</h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl">
              <User className="text-black" size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* About Section */}
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hello, I'm Abdullah — a Computer Science student at Zewail City and a passionate full-stack developer with over two years of experience in software development, including one year in mobile app development. I specialize in building scalable, maintainable systems using technologies like Flutter, Express.js, and .NET.
                My journey in coding has allowed me to design and implement cross-platform mobile apps and efficient web backends with a strong focus on clean architecture and performance. I enjoy blending functionality with user-friendly design, whether through Flutter’s UI capabilities or structured backend systems.
                Beyond development, I’m deeply interested in open-source contributions, writing technical content, and collaborating with other developers. My goal is to keep growing technically while contributing to meaningful, real-world projects that make a positive impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 group">
                  <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Read My Blog</span>
                </a>
                <a href="#" className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 group">
                  <Award size={20} className="group-hover:scale-110 transition-transform" />
                  <span>View Certifications</span>
                </a>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-amber-500 pl-6 py-3 hover:border-amber-400 transition-all group"
                >
                  <h4 className="text-xl font-semibold text-gray-100 group-hover:text-amber-400 transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-amber-400 mb-2 font-medium">
                    {exp.company} | {exp.period}
                  </p>
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
      <section id="skills" className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl">
              <Code className="text-black" size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Skills & Expertise</h2>
          </div>
          <div className="grid gap-8">
            <SkillsSection></SkillsSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl">
              <Briefcase className="text-black" size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-Vendor E-commerce Platform',
                description: 'A platform allows multiple users to showcase their products and purchase it using PHP and MySQL',
                image: '/images/proj1.png',
                tags: ['HTML', 'CSS', 'JS', 'Mysql', 'PHP'],
                link: 'https://github.com/Bodeayman/SimpleE-Com'
              },
              {
                title: 'ReadSphere',
                description: 'Personal Library with admin dashboard that users can save books and Join Clubs',
                image: '/images/proj2.png',

                tags: ['ASP.NET MVC', 'Sql Server', 'HTML', 'CSS', 'EF Core'],
                link: 'https://github.com/Bodeayman/ReadSphere-V2-'
              },
              {
                title: 'Khair-ZC',
                description: 'A website for our club in ZC , You can Join any charity or organize it!',
                image: '/images/proj3.png',

                tags: ['React', 'Flask', 'Mysql', 'Postman', 'SQLAlchemy'],
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
                title: 'Tasky ',
                description: 'Advanced To-Do app with the Priority and Progress Management and QR Reader ',
                image: '/images/proj8.jpg',

                tags: ['Cubit', 'Dart', 'Flutter', 'Hive', 'API Integration'],
                link: 'https://github.com/Bodeayman/Tasky'
              },
              {
                title: 'JimTan Store',
                description: 'An Ecommerce App that showcases the products and Purchase it with real payment gateway',
                image: '/images/proj7.jpg',

                tags: ['Cubit', 'Dart', 'Flutter', 'Supabase', 'Paymob', 'Hive'],
                link: 'https://github.com/Bodeayman/EcomFlutter'
              },

            ].map((project) => (
              <div key={project.title} className="group bg-zinc-900 border border-amber-500/20 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500 via-yellow-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={project.link} className="text-black flex items-center space-x-2 bg-white px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <span>View Project</span>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black border border-amber-500/30 text-amber-400 rounded-full text-sm font-medium">
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

      {/* Testimonials Section */}
      <section id="achievements" className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="text-amber-400" size={16} />
              <span className="text-amber-400 text-sm font-medium">Career Highlights</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              My Achievements & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A snapshot of my journey, technical strengths, and professional milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Technical Expertise */}
            <div className="bg-zinc-900 border border-amber-500/20 p-8 rounded-2xl hover:border-amber-500/50 transition-all relative group">
              <div className="absolute top-6 right-6 text-amber-400/20 group-hover:text-amber-400/40 transition-colors">
                <Code2 size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">Full-Stack Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Building scalable, maintainable web apps using modern technologies like
                <span className="text-amber-400"> ASP.NET Core</span>, <span className="text-amber-400"> Node.js</span>, and
                <span className="text-amber-400"> Flutter</span>.
              </p>
            </div>

            {/* Card 2 - Project Impact */}
            <div className="bg-zinc-900 border border-amber-500/20 p-8 rounded-2xl hover:border-amber-500/50 transition-all relative group">
              <div className="absolute top-6 right-6 text-amber-400/20 group-hover:text-amber-400/40 transition-colors">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">Real-World Projects</h3>
              <p className="text-gray-300 leading-relaxed">
                Created production-ready apps including <span className="text-amber-400">ReadSphere</span>, a book tracking platform, and
                <span className="text-amber-400"> JimTan Store</span>, a E-commerce app .
              </p>
            </div>

            {/* Card 3 - Learning & Growth */}
            <div className="bg-zinc-900 border border-amber-500/20 p-8 rounded-2xl hover:border-amber-500/50 transition-all relative group">
              <div className="absolute top-6 right-6 text-amber-400/20 group-hover:text-amber-400/40 transition-colors">
                <Lightbulb size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                Passionate about mastering <span className="text-amber-400">software architecture</span>,
                <span className="text-amber-400"> system design</span>, and new technologies to build better digital products.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl">
              <Mail className="text-black" size={32} />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Get in Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-zinc-900 border border-amber-500/30 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-all">
                      <MapPin className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Location</h3>
                      <p className="text-gray-400">Cairo , Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-zinc-900 border border-amber-500/30 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-all">
                      <Mail className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Email</h3>
                      <a href="mailto:abdulluhayman@gmail.com" className="text-amber-400 hover:text-amber-300">abdulluhayman@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-zinc-900 border border-amber-500/30 rounded-full flex items-center justify-center group-hover:border-amber-500 transition-all">
                      <Phone className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200">Phone</h3>
                      <p className="text-gray-400">+201143512531 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-amber-500/20 p-8 rounded-2xl shadow-2xl hover:border-amber-500/40 transition-all">
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
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-amber-500/20 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-amber-500/20 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-amber-500/20 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-amber-500/20 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-amber-500/50 transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
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
                  <p className="text-amber-400 text-center font-medium">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center font-medium">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-amber-500/20 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Abdullah Ayman</h3>
              <p className="text-gray-400 mb-4">Building digital experiences that make a difference.</p>
              <div className="flex space-x-4">
                <a href="https://github.com/Bodeayman" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-ayman-96b37b2ba/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:abdulluhayman@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-amber-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-amber-400 transition-colors">Projects</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-amber-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-100">Get in Touch</h3>
              <p className="text-gray-400 mb-2">Feel free to reach out for collaborations or just a friendly hello</p>
              <a href="mailto:abdulluhayman@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                abdulluhayman@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-amber-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>©2025 <span className="text-amber-400 font-semibold">Abdullah Ayman</span>. All rights reserved. Crafted with excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;