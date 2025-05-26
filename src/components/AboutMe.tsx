import React from 'react';
import { Row, Col } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, BookOutlined } from '@ant-design/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import avatar from '../assets/image/avatar.jpg';

const AboutMe: React.FC = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: avatarRef, isVisible: avatarVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  return (
    <div 
      ref={sectionRef}
      className={`about-section-wrapper fade-in ${sectionVisible ? 'visible' : ''}`}
    >
      <Row className="about-section" gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <p className={`about-text ${sectionVisible ? 'visible' : ''}`}>
            Fullstack Developer with a solid foundation in web development and software engineering. Currently studying at Saigon University.
            Experienced with Python, PHP, ReactJS, and basic knowledge of Spring Boot and NodeJS. Familiar with RESTful APIs, MVC
            architecture, and skilled in Postman, Figma, problem-solving, and testing (Black Box, White Box, Test Automation with Selenium).
          </p>
        </Col>

        <Col xs={24} md={8} className="illustration-placeholder">
          <div 
            ref={avatarRef}
            className={`slide-in-right ${avatarVisible ? 'visible' : ''}`} 
            style={{ textAlign: 'center' }}
          >
            <img
              src={avatar}
              alt="Your profile"
              className={`profile-image ${avatarVisible ? 'visible' : ''}`}
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '100px',
                objectFit: 'cover',
                marginBottom: '16px'
              }}
            />
            <div
              ref={infoRef}
              className={`profile-info fade-in ${infoVisible ? 'visible' : ''}`}
              style={{
                color: '#00c4b4',
                fontSize: '16px',
                lineHeight: '1.8',
                display: 'flex',
                justifyContent: 'center',
                gap: '24px',
                flexWrap: 'wrap',
                fontWeight: 500,
              }}
            >
              <div className={`info-item ${infoVisible ? 'visible' : ''}`}>
                <EnvironmentOutlined />
                <span>Ho Chi Minh City</span>
              </div>
              <div className={`info-item ${infoVisible ? 'visible' : ''}`}>
                <CalendarOutlined />
                <span>22</span>
              </div>
              <div className={`info-item ${infoVisible ? 'visible' : ''}`}>
                <BookOutlined />
                <span>Saigon University</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;