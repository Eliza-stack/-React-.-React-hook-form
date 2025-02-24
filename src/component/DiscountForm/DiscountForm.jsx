/* eslint-disable react/prop-types */
import { Form, Input } from "antd";
import style from "./DiscountForm.scss";
import { Controller } from "react-hook-form";

export default function DiscountForm({ form, handleChange }) {
  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Наименование товара"
        name="product"
        rules={[
          {
            required: true,
            pattern: /^[a-zA-Z]+$/,
            message: "Только латинские буквы!",
          },
        ]}
      >
        <Input
          placeholder="Наименование товара"
          onChange={handleChange("product")}
        />
      </Form.Item>
      <Form.Item
        label="Количество"
        name="quantity"
        rules={[{ required: true, type: "number", min: 1 }]}
      >
        <Input
          type="number"
          placeholder="Количество"
          onChange={handleChange("quantity")}
        />
      </Form.Item>
      <Form.Item
        label="Цена за единицу"
        name="price"
        rules={[{ required: true, type: "number", min: 1 }]}
      >
        <Input
          type="number"
          placeholder="Цена за единицу"
          onChange={handleChange("price")}
        />
      </Form.Item>
      <Form.Item
        label="Процент скидки"
        name="discount"
        rules={[{ required: true, type: "number", min: 0 }]}
      >
        <Input
          type="number"
          placeholder="Процент скидки"
          onChange={handleChange("discount")}
        />
      </Form.Item>
    </Form>
  );
}
