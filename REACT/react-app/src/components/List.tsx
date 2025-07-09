import { useState } from "react";

type Props = { data: string[]; onSelect?: (elemento: string) => void };

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };

  const handleButtonClick = () => {
    setIsLoading(true); // Empieza la carga

    // Simulamos una carga (2 segundos)
    setTimeout(() => {
      setIsLoading(false); // Termina la carga
    }, 2000);
  };
  return (
    <>
      <ul className="list-group mb-3">
        {data.map((elemento, i) => (
          <li
            onClick={() => handleClick(i, elemento)}
            key={elemento}
            className={`list-group-item ${index == i ? "active" : ""}`}
          >
            {elemento}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`btn ${isLoading ? "btn-secondary" : "btn-primary"}`}
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        {isLoading ? "Cargando..." : "Enviar"}
      </button>
    </>
  );
}

export default List;
