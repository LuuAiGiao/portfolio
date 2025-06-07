import React, { useState } from 'react';
import './Skill.scss';

import htmlLogo from '../../assets/images/tech-logos/html.png';
import cssLogo from '../../assets/images/tech-logos/css.png';
import jsLogo from '../../assets/images/tech-logos/javascript.png';
import nodeLogo from '../../assets/images/tech-logos/nodejs.png';
import tailwindLogo from '../../assets/images/tech-logos/tailwind.png';
import reactLogo from '../../assets/images/tech-logos/react.png';
import reactNativeLogo from '../../assets/images/tech-logos/react.png';
import tsLogo from '../../assets/images/tech-logos/typescript.png';
import sassLogo from '../../assets/images/tech-logos/sass.png';
import githubLogo from '../../assets/images/tech-logos/github.png';
import figmaLogo from '../../assets/images/tech-logos/figma.png';
import vercelLogo from '../../assets/images/tech-logos/vercel.png';
import trelloLogo from '../../assets/images/tech-logos/trello.png';
import notionLogo from '../../assets/images/tech-logos/notion.png';
import vscodeLogo from '../../assets/images/tech-logos/vscode.png';
import storybookLogo from '../../assets/images/tech-logos/storybook.png';
import AILogo from '../../assets/images/tech-logos/AiTool.png';
import npmLogo from '../../assets/images/tech-logos/NPM.png';
import postmanLogo from '../../assets/images/tech-logos/postman.png';
import jiraLogo from '../../assets/images/tech-logos/jira.png';
import canvaLogo from '../../assets/images/tech-logos/canva.png';
import cLogo from '../../assets/images/tech-logos/c.png';
import javaLogo from '../../assets/images/tech-logos/java.png';
import pythonLogo from '../../assets/images/tech-logos/python.png';
import mongodbLogo from '../../assets/images/tech-logos/mongodb.png';
import mochaLogo from '../../assets/images/tech-logos/mocha.png';
import jenkinsLogo from '../../assets/images/tech-logos/jenkins.png';
import seleniumLogo from '../../assets/images/tech-logos/selenium.png';
import cypressLogo from '../../assets/images/tech-logos/cypress.jpeg';
import jestLogo from '../../assets/images/tech-logos/jest.png';
import vueLogo from '../../assets/images/tech-logos/vue.png';
import SparklingIcon from '../../assets/icons/SparklingIcon.svg';

function Skill() {
  const [activeTab, setActiveTab] = useState('skills');

  const skillsData = {
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'TypeScript', logo: tsLogo },
      { name: 'NodeJS', logo: nodeLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'ReactJS', logo: reactLogo },
      { name: 'React Native', logo: reactNativeLogo },
      { name: 'Vue', logo: vueLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Mocha', logo: mochaLogo },
      { name: 'Jenkins', logo: jenkinsLogo },
      { name: 'Selenium', logo: seleniumLogo },
      { name: 'Cypress', logo: cypressLogo },
      { name: 'Jest', logo: jestLogo },
    ],
    tools: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Trello', logo: trelloLogo },
      { name: 'Notion', logo: notionLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Storybook', logo: storybookLogo },
      { name: 'AI Tool', logo: AILogo },
      { name: 'NPM', logo: npmLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'JIRA', logo: jiraLogo },
      { name: 'Canva', logo: canvaLogo },
    ],
    others: [
      { name: 'English: Good reading & writing, basic verbal communication', icon: '🇬🇧' },
      { name: 'Teamwork', icon: '🤝' },
      { name: 'Communication', icon: '💬' },
      { name: 'Problem Solving', icon: '🧠' },
      { name: 'Self-Learning', icon: '📚' },
      { name: 'Time Management', icon: '⏰' },
    ]


  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title pixel-font"><img src={SparklingIcon} alt="heart" className="sparkling-icon" />MY SKILLS<img src={SparklingIcon} alt="heart" className="sparkling-icon" /></h2>

      <div className="skills-container">
        <div className="skills-tabs">
          <div
            className={`skills-tab pixel-font ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            ✧ TECH ✧
          </div>
          <div
            className={`skills-tab pixel-font ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            ✧ TOOLS ✧
          </div>
          <div
            className={`skills-tab pixel-font ${activeTab === 'others' ? 'active' : ''}`}
            onClick={() => setActiveTab('others')}
          >
            ✧ OTHERS ✧
          </div>

        </div>

        <div className="skills-grid">
          {skillsData[activeTab].map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon-container">
                {skill.logo ? (
                  <img src={skill.logo} alt={skill.name} className="tech-logo" />
                ) : (
                  <div className="emoji-icon">{skill.icon || '✧'}</div>
                )}

              </div>
              <span className="pixel-font">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;