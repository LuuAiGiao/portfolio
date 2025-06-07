import React, { useState } from 'react';
import './Projects.scss';
import { FiGithub, FiEye, FiFilm, FiImage } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import img1 from '../../assets/images/ipas/1.jpg';
import img2 from '../../assets/images/ipas/2.jpg';
import img3 from '../../assets/images/ipas/3.jpg';
import img4 from '../../assets/images/ipas/4.jpg';
import img5 from '../../assets/images/ipas/5.jpg';
import img6 from '../../assets/images/ipas/6.jpg';
import img7 from '../../assets/images/ipas/7.jpg';
import vid1 from '../../assets/images/ipas/0602.mp4';
import vid2 from '../../assets/images/ipas/0603.mp4';
import img11 from '../../assets/images/ipas/1.1.jpg';
import img12 from '../../assets/images/ipas/1.2.jpg';
import img13 from '../../assets/images/ipas/1.3.jpg';
import img14 from '../../assets/images/ipas/1.4.jpg';
import img15 from '../../assets/images/ipas/1.5.jpg';
import img16 from '../../assets/images/ipas/1.6.jpg';
import img17 from '../../assets/images/ipas/1.7.jpg';
import img18 from '../../assets/images/ipas/1.8.jpg';
import img19 from '../../assets/images/ipas/1.9.jpg';
import img20 from '../../assets/images/ipas/1.10.jpg';
import img21 from '../../assets/images/ipas/1.11.jpg';
import img22 from '../../assets/images/ipas/1.12.jpg';
import img23 from '../../assets/images/ipas/1.13.jpg';
import img24 from '../../assets/images/ipas/1.14.jpg';
import img25 from '../../assets/images/ipas/1.15.jpg';
import img26 from '../../assets/images/ipas/1.16.jpg';
import imgThumbnail from '../../assets/images/ipas/thumbnail-mobile-ipas.png';
import imgPortfolio from '../../assets/images/portfolio.jpg';
import imgConYeu0 from '../../assets/images/conyeu0.jpg';
import imgConYeu1 from '../../assets/images/conyeu1.png';
import imgHoaDat0 from '../../assets/images/hoadat0.jpg';
import imgHoaDat1 from '../../assets/images/hoadat1.png';
import imgHoaDat2 from '../../assets/images/hoadat2.jpg';
import imgHoaDat3 from '../../assets/images/hoadat3.jpg';
import imgHoaDat4 from '../../assets/images/hoadat4.jpg';
import ProjectDetailCard from './ProjectDetailCard';
import SparklingIcon from '../../assets/icons/SparklingIcon.svg';
import { Image } from 'antd';

function Projects() {
  const [view, setView] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mediaTab, setMediaTab] = useState('images');

  const projectsData = [
    {
      id: 1,
      title: "Intelligent Pomelo AgriSolutions (Website)",
      type: "team",
      platform: "web",
      role: "UI/UX Designer & Frontend",
      features: [
        "Real-Time Notification System: Designed and implemented a notification UI integrated with WebSocket to receive real-time updates from the backend",
        "PayOS Payment Integration: Developed the purchase flow for Package Service using the PayOS payment gateway",
        "Process and Plan Management: Built CRUD interfaces for Process (including Sub-Processes) and Plan (including Sub-Plans) with complex field conditions",
        "Worklog Management: Created CRUD interfaces for Worklog, integrated with a Calendar View to display and manage task schedules",
        "Farm Owner Dashboard: Developed a comprehensive dashboard displaying farm operation reports",
        "Weather UI: Designed a weather interface integrated with a weather API for real-time conditions"
      ],
      techs: ["REACTJS", "TYPESCRIPT", "SCSS", ".NET", "SQL SERVER"],
      images: [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
        { id: 7, img: img7 }
      ],
      thumbnail: img1,
      videos: [vid1, vid2],
      githubLink: "https://github.com/LuuAiGiao/Intelligent-Pomelo-AgriSolutions/tree/main/FE/Website/CapstoneProject_SP25_IPAS",
      demoLink: "https://ipas.id.vn/",
      accentColor: "#7F55B1",
      gradient: "linear-gradient(145deg, #7F55B1, #9B7EBD)",
      overview: "IPAS is an intelligent agricultural management platform designed to streamline farm operations for owners, managers, and employees. It supports pomelo cultivation with AI-driven pest detection, QR code-based plant management, and real-time farm monitoring dashboards. As a Frontend Developer, I was responsible for building user interfaces for both web and mobile applications, ensuring a seamless, intuitive, and efficient user experience."
    },
    {
      id: 2,
      title: "Intelligent Pomelo AgriSolutions (Mobile App)",
      type: "team",
      platform: "mobile",
      role: "UI/UX Designer & Frontend",
      features: [
        "Project Setup: Initialized the mobile app project from scratch, including setting up the development environment, selecting React Native, and organizing a maintainable code structure.",
        "UI/UX Design and API Integration: Handled both UI/UX design and major frontend implementation, building most of the application’s interface and features.",
        "Schedule Management: Built a Calendar View interface for employees to view work schedules (Worklog), with features to request task cancellations and add notes, integrated with backend APIs for data synchronization.",
        "Pest Detection: Developed a feature allowing employees to capture or select images for pomelo pest diagnosis, integrated with Azure Custom Vision API to display accurate results with disease descriptions.",
        "Individual Plant Management: Implemented features like QR code scanning to retrieve plant details, growth stage note recording (Growth Stage Notes), and per-session harvest logging (Harvest Notes), with intuitive UI and robust API integration.",
        "Notification System: Designed a mobile notification UI for real-time alerts on tasks, weather, or manager updates.",
        "AI Result Reporting: Created an interface for employees to report incorrect AI results (Report AI Result) and receive expert feedback, ensuring a clear and efficient interaction flow."
      ],

      techs: ["REACT NATIVE", "TYPESCRIPT", "ZUSTAND", "WEBSOCKET"],
      images: [
        { id: 1, img: img11 },
        { id: 2, img: img12 },
        { id: 3, img: img13 },
        { id: 4, img: img14 },
        { id: 5, img: img15 },
        { id: 6, img: img16 },
        { id: 7, img: img17 },
        { id: 8, img: img18 },
        { id: 9, img: img19 },
        { id: 10, img: img20 },
        { id: 11, img: img21 },
        { id: 12, img: img22 },
        { id: 13, img: img23 },
        { id: 14, img: img24 },
        { id: 15, img: img25 },
        { id: 16, img: img26 }
      ],
      thumbnail: imgThumbnail,
      videos: [],
      githubLink: "https://github.com/LuuAiGiao/Intelligent-Pomelo-AgriSolutions/tree/main/FE/Mobile/SP25SE070-V3/SP25SE070-v3",
      demoLink: null,
      accentColor: "#F49BAB",
      gradient: "linear-gradient(145deg, #F49BAB, #FFE1E0)",
      overview: "IPAS is an intelligent agricultural management platform designed to streamline farm operations for owners, managers, and employees. It supports pomelo cultivation with AI-driven pest detection, QR code-based plant management, and real-time farm monitoring dashboards. As a Frontend Developer, I was responsible for building user interfaces for both web and mobile applications, ensuring a seamless, intuitive, and efficient user experience."
    },
    {
      id: 3,
      title: "MY PORTFOLIO",
      type: "personal",
      role: "UI/UX Designer & Frontend Developer",
      features: [
        "Interactive 3D Elements: Integrated Three.js and React Three Fiber for immersive 3D visualizations",
        "Modern UI/UX: Designed with pixel-perfect attention to detail using custom SCSS architecture",
        "Responsive Design: Fully adaptive layout for all device sizes",
        "Micro-interactions: Implemented smooth animations using GSAP and Framer Motion",
        "Performance Optimized: Achieved high Lighthouse scores with lazy loading and code splitting",
        "Theme System: Supports light/dark mode with seamless transitions"
      ],
      techs: ["REACTJS", "SCSS", "THREE.JS", "GSAP", "FRAMER MOTION", "RESPONSIVE DESIGN"],
      images: [
        { id: 1, img: imgPortfolio },
      ],
      thumbnail: imgPortfolio,
      videos: [],
      githubLink: "https://github.com/LuuAiGiao/portfolio",
      demoLink: "https://yourportfolio.com",
      accentColor: "#7F55B1",
      gradient: "linear-gradient(145deg, #7F55B1, #9B7EBD)",
      overview: "A cutting-edge portfolio showcasing my skills as a frontend developer and designer. This portfolio combines modern web technologies with creative design elements to create an immersive experience. Built with React and enhanced with 3D graphics using Three.js, it demonstrates my ability to blend technical skills with artistic vision. The portfolio features interactive elements, smooth animations, and a fully responsive layout that adapts seamlessly across all devices."
    },
    {
      id: 4,
      title: "Milk - E-commerce Platform",
      type: "team",
      role: "Frontend & Backend Developer",
      features: [
        "Designed UI/UX and implemented both frontend and backend.",
        "Built product display, add-to-cart, checkout, and MoMo payment flow.",
        "Developed product feedback feature and store dashboard for order management."
      ],
      techs: ["NODE.JS", "EXPRESS", "MONGODB", "REACTJS", "TAILWIND CSS"],
      images: [
        { id: 1, img: imgConYeu0 },
        { id: 2, img: imgConYeu1 }
      ],
      videos: [],
      githubLink: "https://github.com/LuuAiGiao/ConYeu",
      demoLink: null,
      accentColor: "#7F55B1",
      gradient: "linear-gradient(145deg, #7F55B1, #9B7EBD)",
      thumbnail: imgConYeu0,
      overview: "Milk is an e-commerce platform designed for selling milk to pregnant women and babies. It integrates MoMo payment (for testing purposes) and features a secure API with JWT authentication."
    },
    {
      id: 5,
      title: "Coffee - E-commerce Platform",
      type: "team",
      role: "Frontend & Backend Developer",
      features: [
        "Designed UI/UX and implemented both frontend and backend.",
        "Built product display, custom cart, order flow with PayOS integration.",
        "Implemented email notifications upon successful customer orders."
      ],
      techs: ["NODE.JS", "EXPRESS", "MONGODB", "REACTJS", "TAILWIND CSS"],
      images: [
        { id: 1, img: imgHoaDat0 },
        { id: 2, img: imgHoaDat1 },
        { id: 3, img: imgHoaDat2 },
        { id: 4, img: imgHoaDat3 },
        { id: 5, img: imgHoaDat4 }
      ],
      videos: [],
      githubLink: "https://github.com/LuuAiGiao/HoaDat",
      demoLink: null,
      accentColor: "#F49BAB",
      gradient: "linear-gradient(145deg, #F49BAB, #FFE1E0)",
      thumbnail: imgHoaDat0,
      overview: "Coffee is an e-commerce platform for selling coffee that allows users to customize their coffee mixes according to their preferences. It integrates PayOS for real payments. As a Frontend & Backend Developer, I designed the user interface and ensured a seamless user experience with responsive design and smooth animations."
    }
  ];

  return (
    <section id="projects" className="projects-section pixel-font">
      <h2 className="section-title">
        <img src={SparklingIcon} alt="heart" className="sparkling-icon" />
        MY PROJECTS
        <img src={SparklingIcon} alt="heart" className="sparkling-icon" />
      </h2>

      {view === 'grid' ? (
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => {
                setSelectedProject(project);
                setView('detail');
                setMediaTab('images');
              }}
            />
          ))}
        </div>
      ) : (
        <div className="project-detail">
          <button
            className="pixel-button back-button"
            onClick={() => setView('grid')}
          >
            ← BACK TO PROJECTS
          </button>

          <ProjectDetailCard project={selectedProject} />

          <div className="media-section">
            <div className="media-tabs">
              <button
                className={`tab-button ${mediaTab === 'images' ? 'active' : ''}`}
                onClick={() => setMediaTab('images')}
              >
                <FiImage /> SCREENSHOTS
              </button>
              <button
                className={`tab-button ${mediaTab === 'videos' ? 'active' : ''}`}
                onClick={() => setMediaTab('videos')}
              >
                <FiFilm /> DEMO VIDEOS
              </button>
            </div>

            <div className="media-content">
              {mediaTab === 'images' ? (
                <div className="image-grid">
                  {selectedProject.images.map((img, i) => (
                    <div
                      key={i}
                      className={`image-item ${selectedProject.platform === 'mobile' ? 'mobile-screenshot' : ''}`}
                    >
                      <Image
                        src={img.img}
                        alt={`${selectedProject.title} Screenshot ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="video-container">
                  {selectedProject.videos.map((video, i) => (
                    <div key={i} className="video-wrapper">
                      <video controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;