import React, { useEffect, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import profileImage from './profile.jpeg';

import { Toaster, toast } from 'react-hot-toast';
import { 
  Github, 
  Linkedin, 
  Terminal, 
  Cloud, 
  Database, 
  Monitor, 
  Server,
  Pocket as Docker,
  Code2,
  Cpu,
  LineChart,
  Boxes,
  Network,
  Settings,
  Lock,
  User,
  Briefcase,
  Award,
  BookOpen,
  Coffee,
  Rocket,
  GitBranch,
  TestTube,
  Workflow
} from 'lucide-react';

// Initialize EmailJS
emailjs.init("cA1VSomT1TRDBhsq9");

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_innfiqk',
        'template_lvdew67',
        {
          to_email: 'gassen.kalfallah@enis.tn',
          from_email: formData.email,
          message: formData.message,
        }
      );

      toast.success('Message sent successfully!');
      setFormData({ email: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold gradient-text hover-lift">
            <User className="inline-block mr-2" />
            Ghassen.DevOps
          </a>
          <div className="flex gap-6">
            {navItems.map(item => (
              <a 
                key={item.href}
                href={item.href}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.href.slice(1) ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header id="home" className="min-h-screen flex items-center justify-center relative matrix-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-10"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.1
              }}
            >
              <Settings className="w-8 h-8 icon-spin" />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-float">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <img 
                  src={profileImage}
                  alt="Profile" 
                  className="w-40 h-40 rounded-full border-4 border-blue-400/30 object-cover relative z-10"
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-tilt">
              Ghassen Khalfallah
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-8 font-light">
              Software Engineer | DevOps & Automation Specialist
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['AWS', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Terraform'].map((tech, i) => (
                <span 
                  key={i}
                  className="tech-stack-item px-4 py-2 bg-blue-500/10 rounded-full text-blue-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-6">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-blue-600 rounded-lg overflow-hidden animate-pulse-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">Let's Connect</span>
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 border border-blue-400/30 rounded-lg hover:border-blue-400 transition-colors hover-lift"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
            The Journey So Far
          </h2>
          <div className="max-w-4xl mx-auto glass-effect p-8 rounded-xl">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <Rocket className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-glow">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I am a results-driven Software Engineer with a strong passion for DevOps, Cloud infrastructure, and automation. 
                    Currently at Telnet, working with Worldline, I specialize in building robust and efficient systems that underpin 
                    the development and testing of critical Electronic Payment Terminal (TPE) software.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Coffee className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-glow">Philosophy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I thrive on solving complex challenges, streamlining workflows, and delivering tangible impact through 
                    advanced CI/CD pipelines, Dockerization, and automated testing frameworks. My focus is on enhancing 
                    developer productivity and ensuring high-quality, resilient software delivery.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Award className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-glow">Key Achievements</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Developed Terminal Packager tool reducing packaging time from hours to under one minute</li>
                    <li>• Implemented Docker-based simulation environment for uninterrupted development</li>
                    <li>• Architected automated TPE testing infrastructure with GitLab CI/CD</li>
                    <li>• Led successful infrastructure migration projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 relative overflow-hidden bg-gray-900/50">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Cloud className="w-12 h-12 skill-icon" />, 
                title: 'Cloud Platforms', 
                desc: 'Experience with major cloud providers and infrastructure automation',
                tools: ['AWS', 'Azure', 'Terraform', 'EKS']
              },
              { 
                icon: <GitBranch className="w-12 h-12 skill-icon" />, 
                title: 'DevOps & CI/CD', 
                desc: 'Expertise in automation, containerization, and continuous delivery',
                tools: ['GitLab CI/CD', 'Docker', 'Kubernetes', 'Jenkins']
              },
              { 
                icon: <Boxes className="w-12 h-12 skill-icon" />, 
                title: 'Artifact Management', 
                desc: 'Proficient in managing and distributing software artifacts',
                tools: ['Nexus', 'Artifactory', 'Docker Hub', 'SharePoint']
              },
              { 
                icon: <TestTube className="w-12 h-12 skill-icon" />, 
                title: 'Testing & Quality', 
                desc: 'Automated testing and quality assurance infrastructure',
                tools: ['X-Ray', 'Test Automation', 'Integration Testing', 'CI Testing']
              },
              { 
                icon: <Terminal className="w-12 h-12 skill-icon" />, 
                title: 'Scripting & OS', 
                desc: 'Strong command of system administration and automation',
                tools: ['Shell Scripting', 'Linux', 'Bash', 'Python']
              },
              { 
                icon: <Workflow className="w-12 h-12 skill-icon" />, 
                title: 'Methodologies & Tools', 
                desc: 'Experience with modern development practices and tools',
                tools: ['Agile', 'Scrum', 'Jira', 'Git']
              },
            ].map((skill, index) => (
              <div 
                key={index} 
                className="skill-card glass-effect p-8 rounded-xl"
              >
                <div className="text-blue-400 mb-6">{skill.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-gray-300 mb-6">{skill.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm hover-lift"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
            Professional Journey
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                role: 'Software Engineer | DevOps & Automation Specialist',
                company: 'Telnet',
                period: 'September 2023 - Present',
                description: (
                  <>
                    <span>
                      Software Engineer at Telnet, contributing to critical projects for Worldline, a global leader in online payment solutions. My role focuses on enabling, optimizing, and automating the development and testing infrastructure for Electronic Payment Terminal (TPE) software, ensuring efficiency, resilience, and quality.
                    </span>
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-blue-400 mb-2">Key Projects & Achievements</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>
                          <b>Infrastructure Resilience & Business Continuity:</b> Developed and deployed a local Docker-based solution to simulate core payment servers (acquirer, treatment), ensuring uninterrupted development and testing during a major infrastructure migration. Actively participated in the successful migration to the new infrastructure.
                        </li>
                        <li>
                          <b>Terminal Packager Development & Automation:</b> Led the development of the "Terminal Packager" tool, automating the complex process of consolidating and packaging TPE software components. This solution generates optimized, all-in-one TPE packages in under one minute, reducing manual effort and errors.
                          <ul className="list-disc ml-6 space-y-1">
                            <li>Designed and implemented highly optimized, minimalist Docker images for the tool.</li>
                            <li>Developed comprehensive GitLab CI/CD pipelines for automated package delivery, including syntax validation, merge request difference reporting, and automated release builds.</li>
                            <li>Successfully deployed the Terminal Packager to production servers.</li>
                          </ul>
                        </li>
                        <li>
                          <b>Automated TPE Software Testing & CI:</b> Architected and implemented an automated TPE software testing infrastructure, integrating nightly automated test runs into CI/CD pipelines, orchestrating parallel test execution across multiple TPEs, and integrating results with X-Ray for centralized reporting.
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-blue-400 mb-2">Technical Stack</h4>
                      <div className="flex flex-wrap gap-3 text-blue-300 text-sm">
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">Docker</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">GitLab CI/CD</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">Nexus</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">Artifactory</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">X-Ray</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">Shell Scripting</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">Linux</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">DevOps Practices</span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full">CI/CD Runners</span>
                      </div>
                    </div>
                  </>
                ),
                achievements: []
              },
              {
                role: 'DevOps & Cloud Engineer Intern',
                company: 'Spark-it',
                period: 'February 2023 - June 2023',
                description: 'Led the migration of a DevSecOps solution to AWS Cloud, focusing on infrastructure automation and container orchestration.',
                achievements: [
                  'Automated AWS infrastructure provisioning using Terraform',
                  'Containerized applications and developed Kubernetes deployment manifests',
                  'Implemented GitLab-CI pipeline for automated deployments',
                  'Set up cloud-native backup solution using Velero'
                ],
                technicalStack: [
                  'AWS', 'Terraform', 'Kubernetes', 'Docker', 'Velero', 'GitLab CI', 'Azure'
                ]
              },
              {
                role: 'Software Development Intern',
                company: 'LUNAR-TC',
                period: 'July 2022 - August 2022',
                description: 'Developed a Product Management Microservice, gaining hands-on experience with modern development practices.',
                achievements: [
                  'Designed and developed microservice for product management using Spring Boot',
                  'Implemented containerization using Docker for consistent deployment',
                  'Utilized Git for version control and collaborative development',
                  'Gained practical experience with microservices architecture'
                ]
              },
              {
                role: 'Technical Intern',
                company: 'Tunisie Telecom',
                period: 'July 2021 - August 2021',
                description: 'Gained exposure to telecom infrastructure and operations.',
                achievements: [
                  'Studied company operations and telecom infrastructure',
                  'Participated in technical maintenance procedures',
                  'Observed service delivery processes',
                  'Learned about telecommunications industry standards'
                ]
              }
            ].map((exp, index) => (
              <div key={index} className="glass-effect p-8 rounded-xl experience-line">
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <h3 className="text-2xl font-semibold gradient-text">{exp.role}</h3>
                  <span className="text-blue-300">@{exp.company}</span>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                {exp.technicalStack && (
                  <div className="mt-4 flex flex-wrap gap-3 text-blue-300 text-sm">
                    {exp.technicalStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-gray-900/50 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Azure Infrastructure Automation',
                desc: 'Developed an automated solution for deploying Azure cloud infrastructure using Infrastructure as Code (IaC) principles and GitLab CI.',
                icon: <Cloud className="w-8 h-8" />,
                tags: ['Azure', 'Terraform', 'GitLab CI', 'IaC'],
                metrics: ['Automated Deployment', 'Infrastructure as Code', 'CI/CD Integration']
              },
              {
                title: 'Jenkins CI/CD Pipeline',
                desc: 'Designed and implemented a comprehensive CI/CD pipeline for Java applications using Jenkins, including build automation and containerization.',
                icon: <Workflow className="w-8 h-8" />,
                tags: ['Jenkins', 'Docker', 'Maven', 'Java'],
                metrics: ['Automated Builds', 'Container Integration', 'Continuous Delivery']
              },
            ].map((project, index) => (
              <div key={index} className="project-card glass-effect p-8 rounded-xl">
                <div className="project-content">
                  <div className="text-blue-400 mb-6">{project.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.desc}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm hover-lift">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-2 bg-blue-500/10 rounded-lg">
                          <span className="text-sm text-blue-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-32 relative">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                degree: 'Engineering Cycle in Computer Engineering',
                institution: "National Engineering School of Sfax (ENIS)",
                icon: <BookOpen className="w-8 h-8" />
              },
              {
                degree: 'Preparatory Cycle (Physics / Technology)',
                institution: "Preparatory Institute for Engineering Studies of Monastir (IPEIM)",
                icon: <Award className="w-8 h-8" />
              },
              {
                degree: 'Technical Baccalaureate',
                institution: "Eljem High School",
                icon: <BookOpen className="w-8 h-8" />
              }
            ].map((edu, index) => (
              <div key={index} className="glass-effect p-8 rounded-xl">
                <div className="flex items-start gap-6">
                  <div className="text-blue-400">{edu.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 relative">
        <Toaster position="top-right" />
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
            Let's Connect
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center space-x-8 mb-12">
              <a 
                href="https://github.com/gassenkalfallah" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Github className="w-10 h-10" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ghassenkhalfallah/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Linkedin className="w-10 h-10" />
              </a>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="glass-effect p-1 rounded-lg">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-transparent outline-none text-white placeholder-gray-400"
                />
              </div>
              <div className="glass-effect p-1 rounded-lg">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-transparent outline-none text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-500 hover:to-blue-300'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-800/50">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="text-sm">© 2025 Ghassen Khalfallah • Software Engineer & DevOps Specialist • Building the Future of Cloud Infrastructure</p>
        </div>
      </footer>
    </div>
  );
}

export default App;