import Head from 'next/head'
import HeaderComp from "../components/Header"
import Sidebar from "../components/Sidebar"
import React, { useState } from "react";

import 'antd/dist/antd.css';
import { Layout } from "antd";
const { Content } = Layout;

export default function Home() {

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Head>
        <title>Posting app</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout style={{minHeight : "100vh"}}>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <HeaderComp toggle={toggle} collapsed={collapsed} />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            You can register at top right corner.
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}