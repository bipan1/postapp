import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {

  return (
    <Sider
      width={300}
      className="sider site-layout-background "
      trigger={null}
      collapsible
      collapsed={collapsed}
      size="large"
    >
      <div className="logo" />
      <Menu
        theme="dark"
      >
        <Menu.Item key="1">
          <UserOutlined />
          <span>Home</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
