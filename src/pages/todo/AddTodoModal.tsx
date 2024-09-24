import { FormEvent, useState } from "react";
import { Modal, Input, Button, Form } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { addTodo } from "../../redux/features/todoSlice";

const AddTodoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const randomString = Math.random().toString(36).substring(2, 7);
    const taskDetails = {
      id: randomString,
      title: task,
      description: description,
    };

    dispatch(addTodo(taskDetails));
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Add Todo
      </Button>
      <Modal
        title="Add Task"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form onSubmitCapture={onSubmit} layout="vertical">
          <Form.Item label="Task">
            <Input onChange={(e) => setTask(e.target.value)} />
          </Form.Item>
          <Form.Item label="Description">
            <Input onChange={(e) => setDescription(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddTodoModal;
