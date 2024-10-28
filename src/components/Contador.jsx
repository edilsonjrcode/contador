import { useState } from "react";

function Contador() {
  const [contagem, setContagem] = useState(0);

  const incrementarValor = () => {
    setContagem(contagem + 1);
  };

  const decrementarValor = () => {
    setContagem(contagem - 1);
  };

  return (
    <div>
      <p>{contagem}</p>
      <button onClick={incrementarValor}>Incrementar</button>
      <br />
      <button onClick={decrementarValor}>Decrementar</button>
    </div>
  );
}

export default Contador;
