import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Dùng setTimeout để đảm bảo DOM đã render xong
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainContent />
      
      <div id="home">
        <Footer />
      </div>
    </Layout>
  );
}
