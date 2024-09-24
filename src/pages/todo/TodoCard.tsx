import { Card, Checkbox, Button, Tag, Typography, Space } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { removeTodo, toggleComplete } from "../../redux/features/todoSlice";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";

const { Text, Paragraph } = Typography;

export type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
};

const TodoCard = ({
  title,
  description,
  id,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };

  const getPriorityTag = () => {
    switch (priority) {
      case "high":
        return <Tag color="red">High Priority</Tag>;
      case "medium":
        return <Tag color="orange">Medium Priority</Tag>;
      case "low":
        return <Tag color="green">Low Priority</Tag>;
      default:
        return null;
    }
  };

  return (
    <Card
      title={
        <Space align="center">
          <Checkbox onChange={toggleState} checked={isCompleted} />
          <Text delete={isCompleted} strong className="todo-title">
            {title}
          </Text>
          {getPriorityTag()}
        </Space>
      }
      bordered={true}
      className="todo-card"
      actions={[
        <Button
          type="primary"
          shape="circle"
          icon={<CheckOutlined />}
          onClick={toggleState}
          disabled={isCompleted}
        />,
        <Button
          danger
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => dispatch(removeTodo(id))}
        />,
      ]}
    >
      <Paragraph ellipsis={{ rows: 2, expandable: true }}>
        {description}
      </Paragraph>
      <Text type={isCompleted ? "success" : "danger"}>
        {isCompleted ? "Task Completed" : "Task Pending"}
      </Text>
    </Card>
  );
};

export default TodoCard;
