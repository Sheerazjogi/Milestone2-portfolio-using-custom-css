"use client"; // This is a client component
import Image from "next/image";
import profile from "@/app/image/sheeraz.jpg"
import half1 from "@/app/image/half blog.png"
import half2 from "@/app/image/half resume.png"
import { useState } from 'react';
import Link from "next/link";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
    <nav className=" w-full bg-[#222831] fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="logo">Portfolio</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className=" text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#00ADB5]">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className=" text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-[#00ADB5]">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className=" text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#00ADB5]">
                  <Link href="#education" onClick={() => setNavbar(!navbar)}>
                    Education
                  </Link>
                </li>
               
                <li className=" text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#00ADB5]">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className=" text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#00ADB5]">
                  <Link href="#skills" onClick={() => setNavbar(!navbar)}>
                    Skills
                  </Link>
                </li>
                <li className=" text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#00ADB5]">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <section className="home" id="home">
      <div className="content">
        <h1>Hi, I&rsquo;m <span>Sheeraz Ahmed jogi</span></h1>
        <div className="title">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Highly skilled Frontend Developer with 1 year of experience in
          designing and developing responsive, user-friendly web application
          using HTML, CSS, Javascript and modern frontend frameworks.
        </p>
        <div className="btns">
          <a href="https://linkedin.com/in/sheeraz-ahmed className=" 
            >Connect Me</a>
          <a href="#" className="btn">Hired Me</a>
        </div>

        <div className="socialIcon">
          <a href="https://github.com/Sheerazjogi"
            ><i className="bx bxl-github"></i></a>
          <a href="https://linkedin.com/in/sheeraz-ahmed"
            ><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
        </div>
      </div>

      <div className="profile"></div>
    </section>

    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>

      <div className="aboutImage">
        <Image src={profile} alt=""></Image>
        <span className="circle"></span>
      </div>

      <div className="aboutContent">
        <h3>Know Who Am I?</h3>
        <p>
          I am Sheeraz, an IT Professional with a intermediate&rsquo;s degree in pre engineering
          from Superior science college,khairpur mirs . Now, I&rsquo;m
          studying Advance course Web 3.0, Metaverse, and GenAI at Governor
          House. I create websites that are easy to use, look great, and work
          well on all devices.Let&rsquo;s work together to create something amazing!
        </p>

        <div className="btns aboutBtns">
          <a href="#" className="btn">Read Me</a>
        </div>
      </div>
    </section>

    <section className="education" id="education">
      <h2 className="heading">My <span>Journey</span></h2>
      <div className="educationRow">
        <div className="educationColumn">
          <h3 className="title">Education</h3>
          </div>

            <div className="educationContent">
              <div className="study">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2024 - 2022
                </div>
                <h3>HSC - Govt.superior science college, khairpur</h3>
                <p>
                  Throughout my studies, I developed strong problem-solving
                  skills, logical reasoning, and a passion for technology.
                </p>
              </div>
            </div>
          </div>
        </section>


    <section>
      <div className="projects" id="projects">
        <h2 className="heading">My <span>Projects</span></h2>

       

              <div className="project">
              <Image src={half1} alt="project2" />
                  <h3>Blogging Website</h3>
                  <p>
                  I&rsquo;m thrilled to showcase my latest project - a  blogging website that showcases my skills in web development.  I aimed to create an exceptional user experience.

                  </p>
                  <button>
                    <a
                      href="https://cards-blogs-responsive-website-4-5assigment.vercel.app/"
                      target="_blank"
                      >View Project</a>
                  </button>
              </div>

              <div className="project">
              <Image src={half2} alt="project3" />
                  <h3>Resume Builder</h3>
                  <p>
                  A fully functional and customizable Resume Builder! This project spanned 5 major milestones, each offering new challenges and growth opportunities. 
                  </p>
                  <button>
                    <a
                      href="https://resume-builder-hackthon-giaic-rlup.vercel.app/"
                      target="_blank"
                      >View Project</a>
                  </button>
              </div>

          
        </div>
      
    </section>

    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skillRow">
        <div className="skillColumn">
          <h3 className="title">Technical Skills</h3>

          <div className="skillSec">
            <div className="skillContent">
              <div className="progress">
                <h3>Typescript <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>HTML <span>95%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Javascript <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Python <span>50%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Bootstrap <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skillColumn">
          <h3 className="title">Non-Technical Skills</h3>

          <div className="skillSec">
            <div className="skillContent">
              <div className="progress">
                <h3>Communication Skills <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Teamwork Skill <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Decision-making <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Creativity <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form>
        <div className="inputBox">
          <div className="inputField">
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="inputField">
            <input type="text" placeholder="Last Name" required />
          </div>
        </div>

        <div className="inputBox">
          <div className="inputField">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="inputField">
            <input type="text" placeholder="Email Subject" required />
          </div>
        </div>

        <div className="inputBox">
          <div className="inputField">
            <input type="number" placeholder="Mobile No." required />
          </div>
          <div className="inputField">
            <input type="text" placeholder="Address" required />
          </div>
        </div>

        <div className="textareaField">
          <textarea
            name=""
            id="" 
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="btns contactBtns">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </section>

    <footer className="footer">
      <div className="footerText">
        <p>Copyright &copy;  2024 by Sheeraz ahmed jogi</p>
      </div>

      <div className="footerIcons">
        <a href="#"><i className="bx bxl-facebook"></i></a>
        <a href="#"><i className="bx bxl-twitter"></i></a>
        <a href="#"><i className="bx bxl-linkedin"></i></a>
      </div>
    </footer>
    </>
  )};