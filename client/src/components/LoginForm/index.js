import React from "react";
import { Form, Input, Button, Card } from "antd";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title="MEMBER LOGIN" style={{ width: 500 }}>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit" className="center">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
