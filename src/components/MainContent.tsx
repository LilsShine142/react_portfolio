// components/MainContent/index.tsx
import React from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import BottomHeader from './BottomHeader';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../style/Portfolio.css';

const { Content } = Layout;

const MainContent: React.FC = () => {
  return (
    <Layout className="main-layout">
        <Header />
        <BottomHeader />
        <Content className="content-container">
            <section id="about" className="section">
                <AboutMe />
            </section>
            <section id="projects" className="section">
                <Projects />
            </section>
            <section id="contact" className="section">
                <Contact />
            </section>
        </Content>
    </Layout>
  );
};

export default MainContent;