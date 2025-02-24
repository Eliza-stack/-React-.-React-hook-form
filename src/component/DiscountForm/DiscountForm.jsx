/* eslint-disable react/prop-types */
import { Form, Input } from "antd";

export default function DiscountForm({ form, values, handleChange }) {
  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Наименование товара">
        <Input
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Введите название"
        />
      </Form.Item>
      <Form.Item label="Количество">
        <Input
          type="number"
          value={values.quantity}
          onChange={(e) => handleChange("quantity", e.target.value)}
          placeholder="Введите количество"
        />
      </Form.Item>
      <Form.Item label="Цена за единицу">
        <Input
          type="number"
          value={values.price}
          onChange={(e) => handleChange("price", e.target.value)}
          placeholder="Введите цену"
        />
      </Form.Item>
      <Form.Item label="Процент скидки">
        <Input
          type="number"
          value={values.discount}
          onChange={(e) => handleChange("discount", e.target.value)}
          placeholder="Введите скидку"
        />
      </Form.Item>
    </Form>
  );
}
