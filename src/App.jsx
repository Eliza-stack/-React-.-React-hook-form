import { useState, useMemo, useCallback } from "react";
import { Form } from "antd";
import DiscountForm from "./components/DiscountForm.jsx";
import TotalAmount from "./components/TotalAmount.jsx";
import "./App.scss";

export default function App() {
  const [form] = Form.useForm();
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    price: "",
    discount: "",
  });

  const handleChange = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const total = useMemo(() => {
    const { quantity, price, discount } = values;
    const q = Number(quantity);
    const p = Number(price);
    const d = Number(discount);

    if (q > 0 && p > 0 && d >= 0 && /^[a-zA-Z]+$/.test(values.name)) {
      return q * p - (q * p * d) / 100;
    }
    return 0;
  }, [values]);

  return (
    <div className="app-container">
      <h2>Калькулятор скидки</h2>
      <DiscountForm form={form} values={values} handleChange={handleChange} />
      <TotalAmount total={total} isValid={total > 0} />
      <button
        onClick={() =>
          setValues({ name: "", quantity: "", price: "", discount: "" })
        }
      >
        Очистить
      </button>
    </div>
  );
}
