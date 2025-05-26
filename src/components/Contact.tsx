import React from 'react';
import { Row, Col, Form, Input, Button, Space, message } from 'antd';
import { SendOutlined, FacebookFilled, MailOutlined, GithubOutlined } from '@ant-design/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import emailjs from 'emailjs-com';

const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleFinish = (values: any) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      title: `Contact from ${values.name}`,
    };
      
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        message.success('Message sent successfully!');
        form.resetFields();
      })
      .catch(() => {
        message.error('Failed to send message.');
      });
  };

  return (
    <Row 
      ref={contactRef}
      className={`contact-section fade-in ${contactVisible ? 'visible' : ''}`} 
      gutter={[24, 24]}
    >
      <Col xs={24} md={12}>
        <h2 className="section-title" style={{ fontWeight: 600, fontSize: 24 }}>
          Contact <span style={{ color: '#00c4b4' }}>Me</span>
        </h2>

        <Space
          size="large"
          style={{ marginTop: 24, fontSize: 18, color: '#00c4b4', display: 'flex', gap: 24 }}
        >
          <a href="https://www.facebook.com/thanhsu.pham.90" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
            <FacebookFilled />
            <span style={{ marginLeft: 8 }}>Facebook</span>
          </a>

          <a href="mailto:thanhsu142.dev@gmail.com" style={{ color: 'inherit' }}>
            <MailOutlined />
            <span style={{ marginLeft: 8 }}>Gmail</span>
          </a>

          <a href="https://github.com/LilsShine142" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
            <GithubOutlined />
            <span style={{ marginLeft: 8 }}>Github</span>
          </a>
        </Space>
      </Col>

      <Col xs={24} md={12}>
        <div ref={formRef} className={`form-container ${formVisible ? 'visible' : ''}`}>
          <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Your Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Invalid email address' },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Your Message"
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <TextArea rows={4} placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" shape="round" icon={<SendOutlined />} htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;