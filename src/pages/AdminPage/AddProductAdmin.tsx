import React from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  InputNumber,
  Select,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const AddProductAdmin: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Received values from form: ");
    message.success("Product added successfully!");
    form.resetFields(); // Reset form fields after submission
  };

  const onFinishFailed = () => {
    console.error("Failed:");
    message.error("Failed to add product. Please check your input.");
  };

  return (
    <Form
      form={form}
      name="addProduct"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/* Product Name */}
      <Form.Item
        label="Product Name"
        name="productName"
        rules={[{ required: true, message: "Please enter the product name" }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      {/* Product Description */}
      <Form.Item
        label="Product Description"
        name="productDescription"
        rules={[
          { required: true, message: "Please enter the product description" },
        ]}
      >
        <TextArea rows={4} placeholder="Enter product description" />
      </Form.Item>

      {/* Price */}
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter the price" }]}
      >
        <InputNumber
          min={0}
          style={{ width: "100%" }}
          formatter={(value) => `$ ${value}`}
          placeholder="Enter price"
        />
      </Form.Item>

      {/* Stock Quantity */}
      <Form.Item
        label="Stock Quantity"
        name="stock"
        rules={[{ required: true, message: "Please enter the stock quantity" }]}
      >
        <InputNumber
          min={0}
          style={{ width: "100%" }}
          placeholder="Enter stock quantity"
        />
      </Form.Item>

      {/* Category */}
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please select a category" }]}
      >
        <Select placeholder="Select a category">
          <Option value="keyboards">Keyboards</Option>
          <Option value="mice">Mice</Option>
          <Option value="accessories">Accessories</Option>
        </Select>
      </Form.Item>

      {/* Image Upload */}
      <Form.Item
        label="Product Image"
        name="image"
        valuePropName="fileList"
        rules={[{ required: true, message: "Please upload a product image" }]}
      >
        <Upload
          name="image"
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProductAdmin;
