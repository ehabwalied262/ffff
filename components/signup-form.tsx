import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { FormInstance } from "antd/lib/form";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useRouter } from 'next/navigation';

interface SignupFormProps {
  isLogin?: boolean;
  onSubmit: (values: any) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ isLogin = false, onSubmit }) => {
  const [form] = Form.useForm<FormInstance>();
  const router = useRouter();


  const onFinish = (values: any) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      name={isLogin ? "loginForm" : "signupForm"}
      onFinish={onFinish}
    >
      {isLogin ? (
        <>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Username"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" style={{display: "flex", justifyContent: "start"}}>
            <Checkbox style={{ color: "#FFF" }}>Remember me</Checkbox>
            <a
              onClick={() => router.push('/auth/forgot-password')}
              style={{
                marginLeft: "10px",
                color: "#0077b6",
                verticalAlign: "middle",
              }}
            >
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0077b6", marginTop: "6px"}} block>
              Login
            </Button>
          </Form.Item>
        </>
      ) : (
        <>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              placeholder="Email"
              prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Username"
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: "#0077b6", marginTop: "6px" }} block>
              Sign Up
            </Button>
          </Form.Item>
        </>
      )}
    </Form>
  );
};

export default SignupForm;
