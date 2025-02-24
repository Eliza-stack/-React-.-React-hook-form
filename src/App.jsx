
import { useState, useMemo, useCallback } from "react";
import { Form } from "antd";
import DiscountForm from "./component/DiscountForm/DiscountForm.jsx";
import TotalAmount from "./component/TotalAmount/TotalAmount.jsx";
import "./App.scss";

export default function App() {
  const [form] = Form.useForm();
  const [total, setTotal] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleChange = useCallback(
    (name) => (e) => {
      const value = e.target.value;
      form.setFieldsValue({ [name]: value });

      const quantity = form.getFieldValue("quantity") || 0;
      const price = form.getFieldValue("price") || 0;
      const discount = form.getFieldValue("discount") || 0;

      if (quantity > 0 && price > 0 && discount >= 0) {
        const discountAmount = quantity * price * (discount / 100);
        const finalTotal = quantity * price - discountAmount;
        setTotal(finalTotal);
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    },
    [form]
  );

  return (
    <div className="app-container">
      <h2>Калькулятор скидки</h2>
      <DiscountForm form={form} handleChange={handleChange} />
      <TotalAmount total={total} isValid={isValid} />
      <button onClick={() => form.resetFields()}>Очистить</button>
    </div>
  );
}
