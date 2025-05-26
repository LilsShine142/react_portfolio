import { Layout, Menu, Typography } from 'antd';
import { GithubOutlined, UserOutlined, CodeOutlined, MailOutlined, InfoCircleOutlined } from '@ant-design/icons';
import routes from '../config/routes'; 

const { Header } = Layout;
const { Title } = Typography;

export default function AppHeader() {
    const scrollToSection = (hashRoute: string) => {
        const id = hashRoute.replace('/#', ''); // Lấy id từ đường dẫn
        window.history.pushState(null, '', hashRoute); // Cập nhật URL mà không reload
      
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          LilsShine
        </Title>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
            {
            key: 'home',
            icon: <UserOutlined />,
            label: <span onClick={() => scrollToSection(routes.home)}>Home</span>,
            },
            {
                key: 'about',
                icon: <InfoCircleOutlined />,
                label: <span onClick={() => scrollToSection(routes.about)}>About</span>,
            },
            {
            key: 'projects',
            icon: <CodeOutlined />,
            label: <span onClick={() => scrollToSection(routes.projects)}>Projects</span>,
            },
            {
            key: 'contact',
            icon: <MailOutlined />,
            label: <span onClick={() => scrollToSection(routes.contact)}>Contact</span>,
            },
            {
            key: 'github',
            icon: <GithubOutlined />,
            label: (
                <a href="https://github.com/LilsShine142" target="_blank" rel="noopener noreferrer">
                GitHub
                </a>
            ),
            },
        ]}
        />
    </Header>
  );
}
