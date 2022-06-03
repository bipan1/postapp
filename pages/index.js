import Head from 'next/head'
import HeaderComp from "../components/Header"
import Sidebar from "../components/Sidebar"
import React, { useState } from "react";
import { MongoClient } from "mongodb";
import {InfoCircleOutlined} from "@ant-design/icons";

import 'antd/dist/antd.css';
import { Layout, Card, Form, Input, Row, Col, Button, Divider } from "antd";
const { Content } = Layout;

const Home = (props) => {

  const [collapsed, setCollapsed] = useState(false);
  const [form] = Form.useForm();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onFinish = () => {

  }

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
            <div>
              <Form onFinish={onFinish} layout='horizontal' form={form}>
                <Row>
                  <Col span={8} style={{marginRight : "10px"}}>
                    <Form.Item label="Title" name="title">
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={8} style={{marginRight : "10px"}}>
                    <Form.Item label="Content" name="content">
                      <Input.TextArea />
                    </Form.Item>
                  </Col>

                  <Col span={4}>
                    <Button type="primary" shape="round">Add Post</Button>
                  </Col>
                </Row>
              </Form>
            </div>

            <Divider />

            <h1 style={{marginLeft : "10px"}}>Posts Lists</h1>
            {props.posts.length > 0 && 
              props.posts.map(post => (
                <Card key={post.title} title={post.title} style={{margin : "10px"}}>
                <p>{post.content}</p>
                </Card>
            ))}
            <InfoCircleOutlined style={{color : "green"}}/> You can register at top right corner for more features.
          </Content> 
        </Layout>
      </Layout>
    </div>
  )
}

export async function getStaticProps(){
 
  const client = await MongoClient.connect(`mongodb+srv://bipan123:Bip12345@postappdata.ktotcyb.mongodb.net/appdata?retryWrites=true&w=majority`);
  const db = client.db();
  const postsCollection = db.collection("posts");
  const postArray = await postsCollection.find().toArray()
  client.close();
 
  return {
    props:{
      posts : postArray.map(post => ({
        title : post.title,
        content : post.content,
        id: post._id.toString()
      }))
    },
    revalidate: 60
  }
}

export default Home