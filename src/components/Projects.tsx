import React from 'react';
import { Row, Col, Card, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  SiPhp, 
  SiJavascript, 
  SiMysql, 
  SiBootstrap, 
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiSpring,
  SiPython,
  SiDjango,
  SiMongodb
} from 'react-icons/si';
import smartwatch from '../assets/image/smartwatch.png';
import hrmanagement from '../assets/image/hrmanagement.png';
import musicapp from '../assets/image/musicapp.jpg';

// Tạo object map các icon tech
const techNames = [
  'PHP',
  'JavaScript',
  'MySQL',
  'Bootstrap',
  'Postman',
  'ReactJS',
  'Tailwind CSS',
  'Java Springboot',
  'Python Django',
  'Python',
  'Django',
  'MongoDB'
] as const;

type TechName = typeof techNames[number];

const techIcons: Record<TechName, React.ReactElement> = {
  'PHP': <SiPhp style={{ color: '#777BB3' }} />,
  'JavaScript': <SiJavascript style={{ color: '#F7DF1E' }} />,
  'MySQL': <SiMysql style={{ color: '#4479A1' }} />,
  'Bootstrap': <SiBootstrap style={{ color: '#7952B3' }} />,
  'Postman': <SiPostman style={{ color: '#FF6C37' }} />,
  'ReactJS': <SiReact style={{ color: '#61DAFB' }} />,
  'Tailwind CSS': <SiTailwindcss style={{ color: '#38B2AC' }} />,
  'Java Springboot': <SiSpring style={{ color: '#6DB33F' }} />,
  'Python Django': <SiDjango style={{ color: '#092E20' }} />,
  'Python': <SiPython style={{ color: '#3776AB' }} />,
  'Django': <SiDjango style={{ color: '#092E20' }} />,
  'MongoDB': <SiMongodb style={{ color: '#47A248' }} />
};

const projects: {
  title: string;
  description: string;
  image: string;
  tech: TechName[];
  codeLinks: { label: string; url: string }[];
}[] = [
  {
    title: 'E-commerce Platform for Smartwatch Store',
    description: `Contributed to developing a fullstack e-commerce platform with Momo payment integration and API-based MVC architecture.
Developed the admin dashboard, including both backend API design and frontend UI integration.
* Implemented product import workflow and designed a responsive UI using Bootstrap.
* Conducted API testing with Postman.`,
    image: smartwatch,
    tech: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'Postman'],
    codeLinks: [
      { label: 'Git', url: 'https://github.com/LilsShine142/WebPHP_DoAn_EC' },
    ],
  },
  {
    title: 'Human Resource Management System (HRM)',
    description: `Contributed to an HRM system for employee management, payroll processing, and HR analytics.
* Developed frontend components using ReactJS and Tailwind CSS.
* Implemented employee record management features.
* Participated in API testing using Postman.`,
    image: hrmanagement,
    tech: ['ReactJS', 'Tailwind CSS', 'Java Springboot', 'MySQL', 'Postman'],
    codeLinks: [
      { label: 'Frontend', url: 'https://github.com/dien2107/HTTT-FE' },
      { label: 'Backend', url: 'https://github.com/dien2107/HTTT-BE' },
    ],
  },
  {
    title: 'Spotify-like Music Web App',
    description: `A music streaming web app inspired by Spotify. I am responsible for frontend
development using React and Tailwind CSS, and backend development with Python Django.
* Implemented UI components for music player, playlist management, and user interactions.
* Integrated APIs for song data, user authentication, and playlist management.`,
    image: musicapp,
    tech: ['ReactJS', 'Tailwind CSS', 'Python', 'Django', 'MongoDB', 'Postman'],
    codeLinks: [
      { label: 'Frontend', url: 'https://github.com/LilsShine142/OSS_Spotify_Frontend' },
      { label: 'Backend', url: 'https://github.com/alixblu/spotify_clone_be' },
    ],
  },
];

const Projects: React.FC = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  return (
    <Row 
      ref={sectionRef}
      className={`projects-section fade-in ${sectionVisible ? 'visible' : ''}`}
    >
      <Col span={24}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="section-title">
            My <span>Work</span>
          </h2>
          <div ref={projectsRef} className={`projects-grid ${projectsVisible ? 'visible' : ''}`}>
            <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
              {projects.map((project, index) => (
                <Col 
                  xs={24} 
                  sm={24} 
                  md={8} 
                  key={index} 
                  style={{ display: 'flex' }}
                  className="project-col"
                >
                  <Card
                    hoverable
                    className="project-card"
                    style={{ width: '100%', height: '100%' }}
                  >
                    <div className="project-image-container">
                      <img alt={project.title} src={project.image} className="project-image" />
                    </div>
                    <h3 style={{ fontWeight: 600 }}>{project.title}</h3>
                    <p style={{ color: '#666', whiteSpace: 'pre-wrap' }}>{project.description}</p>

                    <div style={{ 
                      margin: '12px 0',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}>
                      {project.tech.map((t, i) => (
                        <div 
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 8px',
                            background: '#f5f5f5',
                            borderRadius: '4px'
                          }}
                        >
                          {techIcons[t]}
                          <span style={{ fontSize: '12px' }}>{t}</span>
                        </div>
                      ))}
                    </div>

                    <Space wrap>
                      {project.codeLinks.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                          <GithubOutlined style={{ marginRight: 4 }} />
                          {link.label}
                        </a>
                      ))}
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Projects;