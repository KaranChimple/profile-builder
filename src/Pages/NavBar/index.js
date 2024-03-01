import React from "react";
import { Menu, Button } from "antd";
import { IoIosInfinite } from "react-icons/io";

const NavBar = () => {
  return (
    <Menu
      selectable={false}
      mode="horizontal"
      theme="dark"
      style={{ padding: "0 16px 0 16px" }}
    >
      <div>
        <Menu.Item key="1">
          <IoIosInfinite />
          <span>Site Builder</span>
        </Menu.Item>
        <Menu.Item key="2">
          <span>Sections</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span>Preferences</span>
        </Menu.Item>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Menu.Item key="4">
          <span>Preview</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Button type="primary" shape="round">
            Publish
          </Button>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default NavBar;
