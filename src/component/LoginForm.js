import React from 'react'
import { Form, Input, Button, Checkbox, Tooltip, Typography } from 'antd';
import { PhoneFilled } from '@ant-design/icons';
import { FaKey, FaPhoneAlt } from 'react-icons/fa';
import logo from "../img/Big logo.png"
import "./index.css"

export default function LoginForm() {
  return (
    <div className='loginForm'>
      <h1><img src={logo} alt="" /></h1>
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        className='myForm'
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input size='large' prefix={<FaPhoneAlt className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input.Password size='large' prefix={<FaKey className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Checkbox>Nhớ mật khẩu</Checkbox>
        </Form.Item>
        <Form.Item>
          <Tooltip title="Useful information">
            <Typography.Link href="#API">Quên mật khẩu?</Typography.Link>
          </Tooltip>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Đăng nhập
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="default" htmlType="submit" className="login-form-button">
            Đăng ký trở thành người bán hàng
          </Button>
        </Form.Item>
      </Form>
      <div><span className='con'>Điều khoảng</span> và <span className='con'>Chính sách bảo mật</span> của người bán hàng trên Hihihi</div>
    </div>

  )
}
