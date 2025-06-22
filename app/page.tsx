"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react"
import { useState, useEffect } from "react"

// Update the main Home component to include the ScrollToTopButton
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

// Fix the navigation to properly scroll to sections
// Update the Header component to ensure smooth scrolling

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span>Nadeesh Malaka</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

// Add a mobile menu component for better navigation on small screens
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        )}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="#home" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Connect With Me</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm Nadeesh Malaka,
              <span className="text-primary block mt-2">Back-End Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              I specialize in building robust backend systems, crafting seamless user experiences, creating engaging
              content, and ensuring quality through testing, all while exploring new technologies to deliver impactful
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Let's Connect
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                My Resume
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image src="/images/profile.png" alt="Nadeesh Malaka Profile" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
            <Image
              src="/images/profile.png?height=500&width=400"
              alt="Nadeesh Malaka Profile"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 mb-6">
              <Button variant="outline" className="flex-1">
                About
              </Button>
              <Button variant="outline" className="flex-1">
                Skills
              </Button>
              <Button variant="outline" className="flex-1">
                Education
              </Button>
            </div>

            <p className="text-muted-foreground">
              I'm Nadeesh Malaka, an undergraduate pursuing a Bachelor of Information and Communication Technology
              (Hons), specializing in Software Technology.
            </p>

            <p className="text-muted-foreground">
              I specialize in backend and full-stack development, with expertise in React, Laravel, Java, and the MERN
              stack. Skilled in software engineering, database management, and version control (Git), I have hands-on
              experience in building robust, maintainable, and well-tested software solutions.
            </p>

            <p className="text-muted-foreground">
              Beyond coding, I engage in event coordination, leadership, and tech content creation on YouTube. I'm
              seeking a software engineering internship to apply my skills and grow as a developer.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">HTML, CSS & JS</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">React & Vue.js</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Node.js & Express</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">MongoDB & MySQL</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description, expandedDescription }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{expanded ? expandedDescription : description}</p>
        <Button variant="link" className="p-0 h-auto flex items-center gap-2" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Read More"}
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CardContent>
    </Card>
  )
}

function ServicesSection() {
  const services = [
    {
      title: "Back-End Development",
      description: "Building and optimizing back-end systems for scalability and performance.",
      expandedDescription:
        "I build efficient back-end systems using Node.js, Express, and Django with a focus on performance and security.",
    },
    {
      title: "Full-Stack Web Development",
      description: "Building end-to-end web applications with a focus on functionality and user experience.",
      expandedDescription:
        "Creating full-stack apps using React for front-end and Node.js/Django for back-end, ensuring seamless integration.",
    },
    {
      title: "API Development",
      description: "Creating, designing, and integrating RESTful APIs for dynamic and interactive web applications.",
      expandedDescription:
        "I develop RESTful APIs with JWT authentication, ensuring secure and smooth data flow between server and client.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              expandedDescription={service.expandedDescription}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={imageUrl || "/images/projects/project_3.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-center mb-4">{description}</p>
          <Button variant="outline" className="text-white border-white hover:bg-white/20">
            View Project
          </Button>
        </div>
      </div>
    </div>
  )
}

function PortfolioSection() {
  const projects = [
    {
      title: "SkillSwap Platform",
      description: "A web platform for skill exchange with intelligent matching, real-time chat, and peer feedback.",
    },
    {
      title: "Knowledge Sharing Platform",
      description: "A platform for knowledge exchange with forums, Q&A, and resource libraries.",
    },
    {
      title: "CalMaster App",
      description: "A multi-functional calculator app with GPA, BMI, discount calculators, and note-saving.",
    },
    {
      title: "Master Education Platform",
      description: "An education platform with lectures, quizzes, assignments, and discussion forums.",
    },
    {
      title: "Library Management System",
      description: "A web system to manage books, users, and track borrowing with an admin dashboard.",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects, skills, and experience with smooth navigation.",
    },
  ]

  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="portfolio" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-10">
            <Button variant="outline" onClick={() => setShowAll(!showAll)} className="gap-2">
              {showAll ? "Show less" : "Show more"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact me</h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">Nadeeshmalaka50@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+94 77 490 2773</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input id="name" className="w-full p-3 border rounded-md bg-background" placeholder="Enter your name" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border rounded-md bg-background"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Write your message here
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border rounded-md bg-background resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nadeesh Malaka</h3>
            <p className="text-muted-foreground">
              I'm a passionate Software Developer specializing in web development. I love building innovative digital
              solutions.
            </p>
          </div>

          <div className="md:col-span-2 md:flex md:justify-end">
            <div>
              <h3 className="text-lg font-medium mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <Link href="#" className="bg-background p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-background p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-background p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-background p-2 rounded-full hover:bg-primary/20 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Nadeesh Malaka | All Rights Reserved</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Connect with Me
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Add this component at the end of the file
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  )
}

