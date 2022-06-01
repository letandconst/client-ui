import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Input, Button, Card } from "antd";
const initialState = {
  username: "",
  password: "",
  err: "",
  success: "",
};

const { useForm } = Form;

const LoginForm = () => {
  const [formHandler] = useForm();
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const onFinish = async (e) => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      setUser({
        ...user,
        err: "",
        success: res.data.msg,
      });
      console.log(res.data);
    } catch (err) {
      err.response.data.msg &&
        setUser({
          ...user,
          err: err.response.data.msg,
          success: "",
        });
    }
  };

  const { username, password, err, success } = user;
  return (
    <Card title="MEMBER LOGIN" style={{ width: 500 }}>
      <Form
        name="login-form"
        onFinish={onFinish}
        autoComplete="off"
        form={formHandler}
      >
        {err}
        <Form.Item label="Username">
          <Input onChange={handleChange} name="username" />
        </Form.Item>

        <Form.Item label="Password">
          <Input.Password onChange={handleChange} name="password" />
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
