import { useState } from "react";
import "./Animation_collapse.scss";

function Collapse({ label, description }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className={`article ${isOpen ? "open" : ""}`}>
      <span className="item">
        <p>{label}</p>
        <span
          className={`material-symbols-outlined arrow ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          expand_less
        </span>
      </span>
      <div className="description">
        <span>{description}</span>
      </div>
    </article>
  );
}

export default Collapse;
