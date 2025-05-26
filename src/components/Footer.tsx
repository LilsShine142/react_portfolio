import { Layout, Typography, Space } from 'antd';
import {
  FacebookFilled,
  MailFilled,
  PhoneFilled,
  GithubFilled
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

export default function AppFooter() {
  return (
    <Footer style={{
      textAlign: 'center',
      background: '#0d1321', // nền đậm
      padding: '24px 12px'
    }}>
      <Text style={{ display: 'block', marginBottom: 12, color: '#d9d9d9', fontSize: 16 }}>
        This is my personal portfolio showcasing my skills and projects in the field of software development.
      </Text>
      <Space size="middle">
        <Link href="tel:+84353022840" target="_blank">
          <PhoneFilled style={{ fontSize: 20, color: '#1890ff' }} />
        </Link>
        <Link href="https://www.facebook.com/thanhsu.pham.90" target="_blank">
          <FacebookFilled style={{ fontSize: 20, color: '#1890ff' }} />
        </Link>
        <Link href="mailto:thanhsu142.dev@gmail.com" target="_blank">
          <MailFilled style={{ fontSize: 20, color: '#1890ff' }} />
        </Link>
        <Link href="https://github.com/LilsShine142" target="_blank">
          <GithubFilled style={{ fontSize: 20, color: '#1890ff' }} />
        </Link>
      </Space>
    </Footer>
  );
}
