import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Send, ChevronRight, Globe, Trophy, GraduationCap, Github as GithubIcon } from 'lucide-react';
import SkillsSection from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
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

      clearTimeout((window as any).scrollTimeout);
      (window as any).scrollTimeout = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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

  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] selection:bg-white/10">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolling ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            AA<span className="text-zinc-500">.</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Skills', 'Projects', 'Achievements', 'Certifications'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase() ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="text-sm font-medium px-5 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.02] blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.02] blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fadeIn">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-400">Available for new opportunities</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 animate-fadeIn">
              Abdullah Ayman
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12 max-w-2xl animate-fadeIn [animation-delay:0.1s]">
              Founding Engineer <span className="text-zinc-600">/</span> OSS Contributor <span className="text-zinc-600">/</span> ECPC Finalist <span className="text-zinc-600">/</span> Full Stack Developer
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeIn [animation-delay:0.2s]">
              <a href="#projects" className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center space-x-2 hover:bg-zinc-200 transition-all">
                <span>View Projects</span>
                <ChevronRight size={18} />
              </a>
              <a href="/resume.pdf" download="Abdullah_Ayman_Resume.pdf" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                Download Resume
              </a>
              <div className="flex items-center space-x-4 ml-2">
                <a href="https://github.com/Bodeayman" aria-label="GitHub Profile" className="p-3 text-zinc-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-ayman-96b37b2ba/" aria-label="LinkedIn Profile" className="p-3 text-zinc-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-8">About</h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                I am a Computer Science student at <span className="text-white font-medium">Zewail City</span> specializing in building scalable,
                high-performance systems. With a strong foundation in <span className="text-white font-medium">Software Architecture</span> and
                <span className="text-white font-medium"> Distributed Systems</span>, I bridge the gap between complex backend logic and seamless user experiences.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Education</h4>
                  <p className="text-white font-medium">B.Sc. Computer Science</p>
                  <p className="text-zinc-500 text-sm">Zewail City of Science & Tech</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">GPA</h4>
                  <p className="text-white font-medium">3.92 / 4.0</p>
                  <p className="text-zinc-500 text-sm">Expected July 2027</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Relevant Coursework</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Operating Systems, Software Architecture, Databases, Data Structures, Algorithms, OOP,
                    Machine Learning, Object-Oriented Analysis and Design.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl group-hover:bg-white/10 transition-all"></div>
                <img
                  src="/images/image.jpg"
                  alt="Abdullah Ayman"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                role: "Founding Engineer (Full-Stack)",
                company: "Moka",
                period: "Sep. 2025 – Present",
                impact: "Led full-stack development of Ma3ak construction marketplace, reaching 50 active users in 6 weeks. Implemented mobile-side caching, Redis-backed services, and WebSocket-based real-time chat. Built GitHub Actions CI/CD pipeline reducing deployment time from 3 hours to <2 minutes.",
                tech: ["Flutter", "React", ".NET Core", "PostgreSQL", "Redis", "Docker", "FCM"]
              },
              {
                role: "Open Source Contributor",
                company: "istSOS4 · OSGeo",
                period: "Mar. 2026 – Present",
                impact: "Merged 3 security-critical patches eliminating SQL injection and schema leakage vulnerabilities across 14+ API endpoints. Built Time-Travel History & Commit Explorer for historical sensor data queries.",
                tech: ["Next.js", "Python", "API Security", "SQL", "OSGeo"]
              }
            ].map((exp, i) => (
              <div key={i} className="glass-card p-8 flex flex-col md:flex-row md:items-start gap-8">
                <div className="md:w-1/4">
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">{exp.period}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-zinc-400 mb-4 font-medium">{exp.company}</p>
                  <p className="text-zinc-400 leading-relaxed mb-6">{exp.impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Technical Skills</h2>
            <SkillsSection />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">Featured Projects</h2>
            <p className="text-zinc-500 text-center max-w-2xl mx-auto">
              Core engineering projects from my professional and open-source work, focusing on distributed systems and high-performance architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "ClipSphere",
                desc: "Full-stack social media platform featuring JWT authentication, role-based access, and optimized backend APIs. Integrated MinIO-based object storage for scalable media handling and WebSocket-based real-time messaging.",
                tech: ["Next.js", "Node.js", "MongoDB", "MinIO", "WebSockets"],
                link: "https://github.com/Bodeayman/ClipSphere"
              },
              {
                title: "FloosFlow",
                desc: "P2P payment platform with ACID-compliant PostgreSQL transactions. Integrated Google OAuth 2.0 and persistent WebSocket subscriptions, eliminating polling and cutting notification latency by ~60% (<100ms).",
                tech: ["Express.js", "React", "PostgreSQL", "Socket.io", "OAuth 2.0"],
                link: "https://github.com/Bodeayman/FloosFlow"
              },
              {
                title: "Lazeez",
                desc: "3-microservice recipe discovery API communicating asynchronously via RabbitMQ. Implemented compound MongoDB indexing, reducing query time by ~40% and achieving sub-200ms average response time under concurrent load.",
                tech: ["Node.js", "RabbitMQ", "MongoDB", "Microservices"],
                link: "https://github.com/Bodeayman/Lazeez"
              }
            ].map((proj) => (
              <div key={proj.title} className="glass-card group overflow-hidden flex flex-col border-white/10 hover:border-white/20">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                      <Terminal size={24} className="text-white" />
                    </div>
                    <a href={proj.link} aria-label={`View ${proj.title} on GitHub`} className="p-2 text-zinc-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed text-sm">{proj.desc}</p>
                </div>
                <div className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold mb-2">Other Projects</h3>
            <p className="text-zinc-500 text-sm">Complementary work in web and mobile development.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Vendor E-commerce",
                desc: "A platform allowing multiple users to showcase and purchase products using PHP and MySQL.",
                tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
                link: "https://github.com/Bodeayman/SimpleE-Com"
              },
              {
                title: "JimTan Store",
                desc: "Ecommerce mobile application with real payment gateway integration and persistent cart management.",
                tech: ["Flutter", "Supabase", "Paymob", "Hive"],
                link: "https://github.com/Bodeayman/EcomFlutter"
              },
              {
                title: "ReadSphere",
                desc: "Personal Library with admin dashboard that users can save books and Join Clubs.",
                tech: ["ASP.NET MVC", "SQL Server", "EF Core"],
                link: "https://github.com/Bodeayman/ReadSphere-V2-"
              },
              {
                title: "Khair-ZC",
                desc: "A website for our club in Zewail City. You can Join any charity or organize events.",
                tech: ["React", "Flask", "MySQL", "SQLAlchemy"],
                link: "https://github.com/0x3mr/Khair-ZC"
              },
              {
                title: "Bookly App",
                desc: "Book app to show books related to programming using Google Books API.",
                tech: ["Flutter", "Google API", "Cubit", "Dart"],
                link: "https://github.com/Bodeayman/BookStore"
              },
              {
                title: "Tasky",
                desc: "Advanced To-Do app with Priority/Progress Management and QR Reader.",
                tech: ["Cubit", "Dart", "Flutter", "Hive"],
                link: "https://github.com/Bodeayman/Tasky"
              }
            ].map((proj) => (
              <a key={proj.title} href={proj.link} className="glass-card p-6 group hover:translate-y-[-4px] border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold group-hover:text-white transition-colors">{proj.title}</h4>
                    <ExternalLink size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm text-zinc-500 mb-6">{proj.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Trophy />, title: "ECPC Finalist", desc: "Ranked 21st in 2025 Qualifiers - Advanced to the finals of the Egyptian Collegiate Programming Contest." },
              { icon: <Globe />, title: "OSS Contributor", desc: "Merged security-critical patches into OSGeo production, hardening APIs across 14+ endpoints." },
              { icon: <GraduationCap />, title: "3.92 GPA", desc: "Maintaining high academic excellence at Zewail City of Science and Technology." },
              { icon: <Trophy />, title: "FinYology Finalist", desc: "Central Bank of Egypt Hackathon Finalist 2025 - Nutrition-tracking fintech app." }
            ].map((ach, i) => (
              <div key={i} className="glass-card p-6 text-center group">
                <div className="inline-flex p-3 bg-white/5 rounded-xl border border-white/10 mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(ach.icon as React.ReactElement, { size: 24, className: "text-white" })}
                </div>
                <h4 className="font-bold mb-2">{ach.title}</h4>
                <p className="text-sm text-zinc-500">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-16 text-center">Certifications</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                title: "ECPC Qualifier Certificate",
                issuer: "Egyptian Collegiate Programming Contest",
                date: "Aug. 2025",
                link: "https://drive.google.com/file/d/1452AIl6N5cx3B1JIdsVvAeHSt3rD0qO9/view?usp=sharing"
              },
              {
                title: "ECPC Honorable Mention",
                issuer: "Egyptian Collegiate Programming Contest",
                date: "Jul. 2024",
                link: "https://drive.google.com/file/d/18Y0ZYudqplfCdBop-Uq51iKcpFaoMnKa/view?usp=drive_link"
              },
              {
                title: "FinYology Hackathon Finalist Certificate",
                issuer: "Central Bank of Egypt",
                date: "May 2025",
                link: "https://drive.google.com/file/d/1B5k48CszcO-1ZjOAHSt3rD0qO9/view?usp=drive_link"
              }
            ].map((cert, i) => (
              <div key={i} className="flex items-center justify-between p-6 glass-card group hover:border-white/20 transition-all">
                <div className="flex items-center space-x-6">
                  <div>
                    <h4 className="font-bold group-hover:text-white transition-colors">{cert.title}</h4>
                    <p className="text-sm text-zinc-500">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="hidden md:block text-sm font-medium text-zinc-500">{cert.date}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white/10 hover:text-white transition-all"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}

      <section id="contact" className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-8">Get in touch</h2>
                <p className="text-zinc-500 mb-12">
                  I'm always open to discussing technical projects, open-source collaborations, or research opportunities.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <Mail size={20} className="text-zinc-400" />
                    </div>
                    <a href="mailto:abdulluhayman@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                      abdulluhayman@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <GithubIcon size={20} className="text-zinc-400" />
                    </div>
                    <a href="https://github.com/Bodeayman" className="text-zinc-400 hover:text-white transition-colors">
                      github.com/Bodeayman
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2 block">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/20 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/20 transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2 block">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/20 transition-colors resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-zinc-200 transition-all disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                  {submitStatus === 'success' && <p className="text-sm text-green-500 text-center">Message sent successfully.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-sm">
            © 2025 Abdullah Ayman. Built with precision.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://github.com/Bodeayman" aria-label="GitHub Profile" className="text-zinc-600 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/abdullah-ayman-96b37b2ba/" aria-label="LinkedIn Profile" className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;