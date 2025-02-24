/* eslint-disable react/prop-types */
import { Form, Input } from "antd";

export default function DiscountForm({ form, values, handleChange }) {
  return (
    <Form
      form={form}
      layout="vertical"
      style={{
        borderColor: values.name ? undefined : "#ff4d4f",
        marginBottom: "16px",
      }}
    >
      <Form.Item label="Наименование товара" help="Введите название товара (только русские буквы)">
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
          onChange={(e) => {
            const quantity = Math.max(0, Number(e.target.value));
            handleChange("quantity", quantity);
          }}
          placeholder="Введите количество"
        />
      </Form.Item>
      <Form.Item label="Цена за единицу">
        <Input
          type="number"
          value={values.price}
          onChange={(e) => {
            const price = Math.max(0, Number(e.target.value));
            handleChange("price", price);
          }}
          placeholder="Введите цену"
        />
      </Form.Item>
      <Form.Item label="Процент скидки">
        <Input
          type="number"
          value={values.discount}
          onChange={(e) => {
            const discount = Math.max(0, Number(e.target.value));
            handleChange("discount", discount);
          }}
          placeholder="Введите скидку"
        />
      </Form.Item>
    </Form>
  );
}
