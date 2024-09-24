import { useState } from "react";
import { Button, Dropdown, Menu } from "antd";

const TodoFilter = () => {
  const [filter, setFilter] = useState("all");

  const handleMenuClick = (e: any) => {
    setFilter(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="high">High</Menu.Item>
      <Menu.Item key="medium">Medium</Menu.Item>
      <Menu.Item key="low">Low</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button type="primary">Filter by Priority: {filter}</Button>
    </Dropdown>
  );
};

export default TodoFilter;
