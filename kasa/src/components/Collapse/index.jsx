import { useState } from "react";
import "../../styles/components/Animation_collapse.scss";

function Collapse({ label, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <article className="article">
      <span className="item">
        <p>{label}</p>
        <p>
          <span
            className={`material-symbols-outlined arrow ${
              isOpen ? "open" : ""
            }`}
            onClick={toggleCollapse}
          >
            expand_less
          </span>
        </p>
      </span>

      {isOpen && (
        <div className={`description ${isOpen ? "open" : ""}`}>
          <span>{description}</span>
        </div>
      )}
    </article>
  );
}

export default Collapse;
