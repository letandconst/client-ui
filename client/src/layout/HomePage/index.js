import React from "react";

import Navbar from "../../components/Header";
import { Layout } from "antd";
import Mechanics from "../../pages/Mechanics/Mechanics";
const { Header, Footer, Sider, Content } = Layout;

const index = () => {
  return (
    <>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Navbar />
          <Content>
            <Mechanics />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default index;
