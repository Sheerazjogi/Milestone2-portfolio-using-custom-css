"use client"; // This is a client component
import Image from "next/image";
import profile from "@/app/image/mahnoor.jpg"
import half1 from "@/app/image/half blog.png"
import half2 from "@/app/image/half resume.png"
import half from "@/app/image/half.png"
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
        <h1>Hi, I&rsquo;m <span>Mahnoor Shaikh</span></h1>
        <div className="title">
          <h3>Frontend Developer</h3>
        </div>
        <p>
          Highly skilled Frontend Developer with 1 year of experience in
          designing and developing responsive, user-friendly web application
          using HTML, CSS, Javascript and modern frontend frameworks.
        </p>
        <div className="btns">
          <a href="https://www.linkedin.com/in/mahnoor-shaikh/" className="btn"
            >Connect Me</a>
          <a href="#" className="btn">Hired Me</a>
        </div>

        <div className="socialIcon">
          <a href="https://github.com/MAHNOORSHK"
            ><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/mahnoor-shaikh/"
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
          I am Mahnoor, an IT Professional with a Master&rsquo;s degree in Information
          Technology from Sindh Agriculture University, Tandojam. Now, I&rsquo;m
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

          <div className="educationSec">
            <div className="educationContent">
              <div className="study">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2021 - 2023
                </div>
                <h3>MSIT Degree - Sindh Agriculture University, Tandojam</h3>
                <p>
                  This study aimed to develop a machine learning experiences
                  from Amazon product reviews. The primary objective was to
                  classify reviews as positive, negative, or neutral, and
                  identify key factors influencing customer satisfaction.
                </p>
              </div>
            </div>

            <div className="educationContent">
              <div className="study">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2017 - 2021
                </div>
                <h3>BSIT Degree - Sindh Agriculture University, Tandojam</h3>
                <p>
                  This study aimed to develop the Motor Vehicles Detection and
                  tracking system is a project which is consist of a desktop app
                  to detect the unauthorized motor vehicle and save data in
                  firebase cloud, as well as in flies. Andriod app through which
                  we will track down those unauthorizedmotor vehicles. GPS
                  module for real-time location of those unauthorized motor
                  vehicle.
                </p>
              </div>
            </div>

            <div className="educationContent">
              <div className="study">
                <div className="year">
                  <i className="bx bxs-calendar"></i>2014 - 2017
                </div>
                <h3>HSC - Govt. Nazerathe Girls College, Hyderabad</h3>
                <p>
                  Throughout my studies, I developed strong problem-solving
                  skills, logical reasoning, and a passion for technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="educationColumn">
          <h3 className="title">Experience</h3>
          <div className="educationSec">
          <div className="educationContent">
              <div className="study">
                <div className="year">
                <i className="bx bxs-calendar"></i>09-2023 - Continue
                </div>
                <h3>
                  Computer Lab Assistant - Quaid-e-Azam Rangers School &
                  College, Hyderabad
                </h3>
                <p>
                  Assist students, faculty, and staff in computer labs,
                  providing technical suppport, maintaining lab equipment, and
                  ensuring a productive learning environment. <br />
                  QRS&C is to provide higher standard of education to the
                  students. Their fundamental goal is to help students learn and
                  thrive to the best of their abilities.
                </p>
              </div>
            </div>

          <div className="educationContent">
            <div className="study">
          <div className="year">
                <i className="bx bxs-calendar"></i>05-2023 - 09-2023
                </div>
                <h3>Accountant - Mother&rsquo;s Lap School System, Hyderabad</h3>
                <p>
                  Responsible for managing financial transactions, preparing
                  financial statements, and ensuring compliance with accounting
                  standards. <br />
                  MLS aims to help its students explore the world around them as
                  well as their own capabilities.
                </p>
              </div>
            </div>

            <div className="educationContent">
              <div className="study">
                <div className="year">
                  <i className="bx bxs-calendar"></i>11-2021 - 12-2022
                </div>
                <h3>
                  Computer And Math Teacher - Discovery School System, Tandojam
                </h3>
                <p>
                  The Sindh Education Foundation, was established 1992. The
                  Sindh Education Foundation aims to enhance educational quality
                  and access for the marginalized in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="projects" id="projects">
        <h2 className="heading">My <span>Projects</span></h2>

        <div className="project-list">
            <div className="project">
                <Image src={half} alt="project1" />
                  <h3>Figma Website to HTML</h3>
                  <p>
                  I&rsquo;m excited to share that I recently completed a Figma design as part of a hackathon project by focusing on accurately recreating layouts and user interface elements.
                  </p>
                  <button>
                    <a
                      href="https://figma-design1-hackathon-assignment6.vercel.app/"
                      target="_blank"
                      >View Project</a>
                  </button>
              </div>

              <div className="project">
              <Image src={half1} alt="project2" />
                  <h3>Blogging Website</h3>
                  <p>
                  I&rsquo;m thrilled to showcase my latest project - a  blogging website that showcases my skills in web development.  I aimed to create an exceptional user experience.

                  </p>
                  <button>
                    <a
                      href="https://cards-blogs-responsive-website-assignment4-5.vercel.app/"
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
                      href="https://resume-builder-hackathon-milestones-3.vercel.app/"
                      target="_blank"
                      >View Project</a>
                  </button>
              </div>

          
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
        <p>Copyright &copy; Nov, 2024 by Mahnoor Shaikh</p>
      </div>

      <div className="footerIcons">
        <a href="#"><i className="bx bxl-facebook"></i></a>
        <a href="#"><i className="bx bxl-twitter"></i></a>
        <a href="#"><i className="bx bxl-linkedin"></i></a>
      </div>
    </footer>
    </>

  );
}
