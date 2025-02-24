import "./TotalAmount.scss";
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function TotalAmount({ total, isValid }) {
  return (
    <motion.div
      className="total-amount"
      key={total}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      Итоговая сумма: {isValid ? `$${total.toFixed(2)}` : "Некорректные данные"}
    </motion.div>
  );
}
