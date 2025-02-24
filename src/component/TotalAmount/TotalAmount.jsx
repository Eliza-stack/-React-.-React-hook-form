/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./TotalAmount.scss";

export default function TotalAmount({ total, isValid }) {
  return (
    <motion.div
      className="total-amount"
      key={total}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "20px",
        transition: "opacity 0.3s, transform 0.3s",
        opacity: 1,
        transform: "scale(1)",
      }}
    >
      Итоговая сумма:{" "}
      {isValid ? `${total.toFixed(2)} сом` : "Некорректные данные"}
    </motion.div>
  );
}
