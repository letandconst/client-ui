import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
const initialState = {
  username: "",
  password: "",
  err: "",
  success: "",
};

const { useForm } = Form;

const LoginForm = () => {
  const navigate = useNavigate();
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
      localStorage.setItem("user", res.data.token);
      console.log(res.data.token);
      navigate("/dashboard");
    } catch (err) {
      err.res.data.msg &&
        setUser({
          ...user,
          err: err.res.data.msg,
          success: "",
        });
    }
  };

  const { username, password, err, success } = user;

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

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
