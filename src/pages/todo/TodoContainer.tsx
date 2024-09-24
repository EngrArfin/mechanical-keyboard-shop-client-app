import { Row, Col, Spin } from "antd";
import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodoCardProps } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "../../redux/api/api";

const TodoContainer = () => {
  const { data: tasks, isLoading } = useGetTodosQuery();

  if (isLoading) {
    return <Spin tip="Loading..." />;
  }

  const todosToDisplay = tasks?.data || [];

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <Row gutter={[16, 16]}>
        {todosToDisplay.map((item: TTodoCardProps) => (
          <Col span={8} key={item.id}>
            <TodoCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TodoContainer;
