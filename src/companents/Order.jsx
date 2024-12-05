import { useState } from "react";
import Header from "./Header";

const PizzaForm = ({ onUpdate }) => {
  const [size, setSize] = useState("Küçük");
  const [crust, setCrust] = useState("Hamur Kalınlığı");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");

  const extraOptions = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Sarımsak",
    "Biber",
    "Sucuk",
    "Ananas",
    "Kabak",
  ];

  const handleExtraChange = (extra) => {
    setExtras((prev) =>
      prev.includes(extra)
        ? prev.filter((item) => item !== extra)
        : [...prev, extra]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = 85.5 + extras.length * 5;
    onUpdate({ size, crust, extras, total, note });
  };

  return (
    <form onSubmit={handleSubmit} className="pizza-form">
      <fieldset>
        <legend>Boyut Seç</legend>
        {["Küçük", "Orta", "Büyük"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="size"
              value={option}
              checked={size === option}
              onChange={(e) => setSize(e.target.value)}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Hamur Seç</legend>
        <select value={crust} onChange={(e) => setCrust(e.target.value)}>
          <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
          <option value="İnce">İnce</option>
          <option value="Kalın">Kalın</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Ek Malzemeler</legend>
        {extraOptions.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={extras.includes(option)}
              onChange={() => handleExtraChange(option)}
            />
            {option}
          </label>
        ))}
      </fieldset>

      <textarea
        placeholder="Siparişe eklemek istediğiniz not var mı?"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <button type="submit">Siparişi Ver</button>
    </form>
  );
};

export default PizzaForm;
