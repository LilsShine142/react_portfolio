// import React from 'react';
// import { Row, Col, Button, Space } from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';

// // import icon từ react-icons
// import { SiJavascript, SiPhp, SiPython, SiReact, SiSpringboot, SiNodedotjs, SiDjango, SiBootstrap, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiSwagger, SiFigma, SiGit } from 'react-icons/si';

// import cv from '../assets/CV/PhamThanhSu_FullstackIntern_CV.pdf'; // Đường dẫn tới file CV

// const techStack = [
//   // { Icon: SiJava, label: 'Java' }, // SiJava does not exist in react-icons/si
//   { Icon: SiJavascript, label: 'JavaScript' },
//   { Icon: SiPhp, label: 'PHP' },
//   { Icon: SiPython, label: 'Python' },

//   { Icon: SiReact, label: 'ReactJS' },
//   { Icon: SiSpringboot, label: 'Spring Boot' },
//   { Icon: SiNodedotjs, label: 'NodeJS' },
//   { Icon: SiDjango, label: 'Django' },
//   { Icon: SiBootstrap, label: 'Bootstrap' },
//   { Icon: SiTailwindcss, label: 'Tailwind CSS' },

//   { Icon: SiMysql, label: 'MySQL' },
//   { Icon: SiMongodb, label: 'MongoDB' },

//   { Icon: SiPostman, label: 'Postman' },
//   { Icon: SiSwagger, label: 'Swagger' },

//   { Icon: SiFigma, label: 'Figma' },
//   { Icon: SiGit, label: 'Git' },
// ];

// const BottomHeader: React.FC = () => {
//   const handleHireMeClick = () => {
//     window.history.pushState(null, '', '/#contact');
//     const contactSection = document.getElementById('home');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <Row justify="center" align="middle" className="header-section" style={{ padding: '40px 20px', color: '#fff' }}>
//       <Col span={24} style={{ textAlign: 'center' }}>
//         <h1
//           className="hero-title"
//           style={{
//             fontSize: 48,
//             fontWeight: 700,
//             marginBottom: 16,
//             lineHeight: 1.2,
//           }}
//         >
//           Hi, I'm Thanh Su
//           <br />
//           <span
//             style={{
//               fontSize: 32,
//               color: '#00c4b4',
//               display: 'block',
//               marginTop: 8,
//               fontWeight: 600,
//             }}
//           >
//             Full-stack Developer
//           </span>
//         </h1>

//         <Space size="large" style={{ marginBottom: 40 }}>
//           <Button
//             type="primary"
//             shape="round"
//             size="large"
//             className="cta-button"
//             onClick={handleHireMeClick}
//           >
//             Hire Me
//           </Button>
//           <Button shape="round" size="large" icon={<DownloadOutlined />} className="cta-button" href={cv}>
//             Download CV
//           </Button>
//         </Space>

//         {/* Tiêu đề Tech Stack */}
//         <h2 style={{ color: '#00c4b4', fontWeight: 700, marginBottom: 24 }}>Tech Stack</h2>

//         {/* Hiển thị icon */}
//         <div
//           style={{
//             maxWidth: 900,
//             margin: '0 auto',
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             gap: 30,
//             color: '#00c4b4',
//           }}
//         >
//           {techStack.map(({ Icon, label }) => (
//             <div
//               key={label}
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 width: 90,
//                 fontWeight: 600,
//                 fontSize: 14,
//               }}
//             >
//               <Icon style={{ fontSize: 40, marginBottom: 8 }} title={label} />
//               {label}
//             </div>
//           ))}
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default BottomHeader;



import React from 'react';
import { Row, Col, Button, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// import icon từ react-icons
import { SiJavascript, SiPhp, SiPython, SiReact, SiSpringboot, SiNodedotjs, SiDjango, SiBootstrap, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiSwagger, SiFigma, SiGit } from 'react-icons/si';

import cv from '../assets/CV/PhamThanhSu_FullstackIntern_CV.pdf'; // Đường dẫn tới file CV

const techStack = [
  { Icon: SiJavascript, label: 'JavaScript' },
  { Icon: SiPhp, label: 'PHP' },
  { Icon: SiPython, label: 'Python' },
  { Icon: SiReact, label: 'ReactJS' },
  { Icon: SiSpringboot, label: 'Spring Boot' },
  { Icon: SiNodedotjs, label: 'NodeJS' },
  { Icon: SiDjango, label: 'Django' },
  { Icon: SiBootstrap, label: 'Bootstrap' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS' },
  { Icon: SiMysql, label: 'MySQL' },
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiPostman, label: 'Postman' },
  { Icon: SiSwagger, label: 'Swagger' },
  { Icon: SiFigma, label: 'Figma' },
  { Icon: SiGit, label: 'Git' },
];

const BottomHeader: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const handleHireMeClick = () => {
    window.history.pushState(null, '', '/#contact');
    const contactSection = document.getElementById('home');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Row
      ref={sectionRef}
      justify="center"
      align="middle"
      className={`header-section fade-in ${isVisible ? 'visible' : ''}`}
      style={{ padding: '40px 20px', color: '#fff' }}
    >
      <Col span={24} style={{ textAlign: 'center' }}>
        <h1
          className="hero-title"
          style={{
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Hi, I'm Thanh Su
          <br />
          <span
            style={{
              fontSize: 32,
              color: '#00c4b4',
              display: 'block',
              marginTop: 8,
              fontWeight: 600,
            }}
          >
            Full-stack Developer
          </span>
        </h1>

        <Space size="large" style={{ marginBottom: 40 }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            className="cta-button"
            onClick={handleHireMeClick}
          >
            Hire Me
          </Button>
          <Button
            shape="round"
            size="large"
            icon={<DownloadOutlined />}
            className="cta-button"
            href={cv}
          >
            Download CV
          </Button>
        </Space>

        <h2 style={{ color: '#00c4b4', fontWeight: 700, marginBottom: 24 }}>
          Tech Stack
        </h2>

        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 30,
            color: '#00c4b4',
          }}
        >
          {techStack.map(({ Icon, label }) => (
            <div
              key={label}
              className={`tech-item fade-in ${isVisible ? 'visible' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 90,
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              <Icon style={{ fontSize: 40, marginBottom: 8 }} title={label} />
              {label}
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default BottomHeader;
