import React from "react";
import { Layout, Button, Row, Col } from "antd";
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { MenuUnfoldOutlined } from "@ant-design/icons";
const { Header } = Layout;

const HeaderComp = ({ collapsed, toggle }) => {
  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <Row>
        <Col span={6}>
          {collapsed ? (
            <>
              <MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
            </>
          ) : (
            <>
              <MenuUnfoldOutlined className={styles.trigger} onClick={toggle} />
            </>
          )}
        </Col>
        <Col offset={14} span={4} style={{float: 'right'}}>
            <Button style={{marginRight : "5px"}} type="primary" shape="round" size="medium">
                <Link href={{pathname: '/register'}}>
                    <a>Register</a>
                </Link>
            </Button>
            <Button style={{marginRight : "5px"}} type="primary" shape="round" size="medium">
                <Link href={{pathname: '/login'}}>
                    <a>Login</a>
                </Link>
            </Button>
        </Col>
       
      </Row>
    </Header>
  );
};

export default HeaderComp;
