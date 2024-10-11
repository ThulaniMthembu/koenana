"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HardHat, Mail, MapPin, Phone, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function ScrollRevealImage({ images }: { images: { src: string; alt: string }[] }) {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentImgRef = imgRef.current;

    if (currentImgRef) {
      observer.observe(currentImgRef)
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef)
      }
    }
  }, [])

  return (
    <div
      ref={imgRef}
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {images.map((image, index) => (
        <Image 
          key={index}
          src={image.src} 
          alt={image.alt} 
          width={600} 
          height={400} 
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      ))}
    </div>
  )
}

export default function Component() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const heroContent = [
    {
      image: "/images/hero-image-1.jpg",
      title: "Koenana Trading",
      text: "Leading the way in construction with quality and innovation.",
    },
    {
      image: "/images/hero-image-2.jpg",
      title: "Teamwork Makes the Dream Work",
      text: "Our dedicated team brings expertise and passion to every project.",
    },
    {
      image: "/images/hero-image-3.jpg",
      title: "Sustainable Construction for Tomorrow",
      text: "We're committed to eco-friendly practices for a greener future.",
    },
  ]

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 7000)

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearInterval(interval)
    };
  }, [heroContent.length])

  const services = [
    { name: "Residential", image: "/images/residential-house-construction-service.jpg" },
    { name: "Commercial", image: "/images/commercial-construction.jpg" },
    { name: "Institutional", image: "/images/institutional-construction.jpeg" },
    { name: "Industrial", image: "/images/industrial.jpeg" },
    { name: "Heavy civil", image: "/images/heavy-civil.jpeg" },
    { name: "Environmental", image: "/images/environmental.jpeg" },
    { name: "Agricultural", image: "/images/agricultural.jpeg" },
    { name: "Transport", image: "/images/transport.jpeg" },
    { name: "Plumbing", image: "/images/plumbing.jpg" },
    { name: "Maintenance", image: "/images/maintenance.jpg" },
    { name: "General Building", image: "/images/general-building.jpg" },
    { name: "Supply of Material", image: "/images/material-supply.jpg" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-40 px-4 lg:px-6 h-20 flex items-center justify-between border-b bg-white dark:bg-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wtlbgQHv06ohhR87roD0iZvyDBNm34.png"
            alt="Koenana Trading Pty Ltd Logo"
            width={300}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className={`fixed top-20 left-0 bottom-0 w-full bg-white dark:bg-gray-800 p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:w-auto md:bg-transparent md:p-0 md:flex md:items-center md:ml-auto z-30`}>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={closeMenu}>Home</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about" onClick={closeMenu}>About</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services" onClick={closeMenu}>Services</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#values" onClick={closeMenu}>Values</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#objectives" onClick={closeMenu}>Objectives</Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact" onClick={closeMenu}>Contact</Link>
          </div>
        </nav>
        <button
          className="md:hidden ml-auto p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center">
            <span className={`bg-gray-600 dark:bg-gray-300 h-0.5 w-full transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`bg-gray-600 dark:bg-gray-300 h-0.5 w-full transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`bg-gray-600 dark:bg-gray-300 h-0.5 w-full transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative w-full h-[calc(100vh-80px)] mt-20">
          {heroContent.map((content, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={content.image}
                alt={content.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 slide-in-up text-white">
                    {content.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 slide-in-up" style={{animationDelay: '0.2s'}}>{content.text}</p>
                  <div className="space-x-4 slide-in-up" style={{animationDelay: '0.4s'}}>
                    <Button
                      asChild
                      className="bg-[#00843D] text-white hover:bg-black transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      <Link href="#about">Learn More</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-white text-[#00843D] border-[#00843D] hover:bg-[#00843D] hover:text-white transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      <Link href="#contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section id="about" className="relative z-10 w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 opacity-0 transition-opacity duration-1000" style={{animationDelay: '0.6s'}}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Us</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Company Details</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl">
                  <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Registration Number</dt>
                      <dd className="mt-1 text-lg font-semibold">2023/758006/07</dd>
                    </div>
                    <div className="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Registration Date</dt>
                      <dd className="mt-1 text-lg font-semibold">17/05/2023</dd>
                    </div>
                    <div className="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">CF Reference Number</dt>
                      <dd className="mt-1 text-lg font-semibold">990001475698</dd>
                    </div>
                    <div className="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">UIF Registration</dt>
                      <dd className="mt-1 text-lg font-semibold">2780442/5</dd>
                    </div>
                    <div className="transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">CSD</dt>
                      <dd className="mt-1 text-lg font-semibold">MAAA1403909</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Vision and Mission</h3>
                <p>
                  Our vision is to become a leading brand in the construction industry known for quality and innovation.
                  We prioritize supporting communities we work in and aim to help our staff grow professionally by
                  helping them achieve their career goals, whilst being collaborative and building long-term
                  relationships with our clients.
                </p>
                <p>
                  Our mission is to understand our client needs and deliver high-quality projects on budget and on time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 opacity-0 transition-opacity duration-1000" style={{animationDelay: '0.8s'}}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              At Koenana Trading Pty Ltd, we offer a comprehensive range of construction services tailored to meet the diverse needs of our clients. Our expertise spans across various sectors, ensuring that we can deliver excellence in every project we undertake.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.name}
                  className="group relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={300}
                    className="object-cover  w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <CardContent className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-2xl font-bold text-center">{service.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="values" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 opacity-0 transition-opacity duration-1000" style={{animationDelay: '1s'}}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Values</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {["Integrity", "Passion", "Commitment", "Competence", 
                    "Conscientiousness"].map((value) => (
                    <li key={value} className="flex items-center space-x-2">
                      <HardHat className="h-5 w-5" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <p>
                  Koenana Trading Pty Ltd Team work together to ensure our customers ultimate success. Our team spirit
                  runs from Top management down, with our extensive internal and external staff training and motivation
                  programs.
                </p>
                <p>
                  We regularly contribute to various charity organizations and take part in many sponsorships
                  incorporating team spirit. With a staff compliment of just under 20, we are well represented in all
                  Regions of Gauteng.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollRevealImage 
              images={[
                { src: "/images/filler-image.jpg", alt: "Team working together" },
                { src: "/images/filler-image2.jpg", alt: "Another team image" }
              ]} 
            />
          </div>
        </section>
        <section id="objectives" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Aims and Objectives</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To acquire the involvement of the social community into self-development.</li>
              <li>To actively work towards improving skills of the social community and their young generations.</li>
              <li>To alleviate poverty through creation of employment and development.</li>
            </ul>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Quality, Safety, and Excellence
            </h2>
            <div className="space-y-4">
              <p>
                Koenana Trading Pty Ltd is committed to ensuring client satisfaction through the provision of products
                and services which always conform to the agreed requirement in respect of specification, cost and time.
              </p>
              <p>
                This is achieved through a strict compliance to a quality assurance system, which is entrenched and
                developed for each individual&apos;s discipline. The company is fully committed to continually improving
                safety performance and to this end standard safety procedures are implemented and maintained on every
                site.
              </p>
              <p>
                Before a project commences, Koenana Trading Pty Ltd team draws up a detailed programme using
                computerized techniques. Resourcing of a mutually agreed programme ensures the timeously provision of
                labor and plant to meet the stipulated requirements.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Team</h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <p>
                  In pursuit of its aim of maintaining an organization which is competent, highly motivated and result
                  driven, Koenana Trading Pty Ltd has made it company policy to recruit, develop and motivate only the best
                  and brightest as its members, people who are able to demonstrate their professional competence, courage
                  and integrity in performing tasks, every day and in every way.
                </p>
                <p className="mt-4">
                  The executive of the company has extensive experience in various construction-related fields and aims to
                  make Koenana Trading one of the most successful construction companies in the country.
                </p>
              </div>
              <div>
                <div className="relative group">
                  <Image
                    src="/images/team.jpg"
                    alt="Koenana Trading Team"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg transition-opacity duration-300 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-2xl font-bold bg-black bg-opacity-50 p-4 rounded">Meet Our Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Us</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>670 Phase 2 Tshepong, Residensia Ironside 1984</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Khotso Mmeko</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>068 044 8056</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>khotsommeko@gmail.com</span>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="space-y-4 mb-8">
                  <p className="text-lg">
                    We&apos;re here to help with all your construction needs. Whether you have a question about our services, want to discuss a potential project, or are looking for a quote, don&apos;t hesitate to reach out. Our team is ready to assist you.
                  </p>
                  <p className="text-lg">
                    Fill out the form below, and we&apos;ll get back to you as soon as possible. Your inquiry is important to us, and we look forward to the opportunity to serve you.
                  </p>
                </div>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="w-full border-2 border-[#17901a] bg-[#17901a] text-white hover:bg-white hover:text-[#17901a] transition-colors duration-300">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Koenana Trading Pty Ltd. All rights reserved. Reg. No: 2023/758006/07
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <style jsx global>{`
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .slide-in-up {
          animation: slideInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}