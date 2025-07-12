import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["Wilmer", "Nicolas", "Carmona", "Alvarez"]);
  //   const [isLoading, setIsLoading] = useState(false);
  //   const handleClick = () => setIsLoading(!isLoading);
  //   const handleSelect = (elemento: string) => {
  //     console.log("Imprimiendo", elemento);
  //   };

  //   const list: string[] = ["Wilmer", "Nicolas", "Carmona", "Alvarez"];
  //   const contenido = list.length !== 0 && (
  //     <List data={list} onSelect={handleSelect} />
  //   );
  //   return (
  //     <Card>
  //       <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
  //       {contenido}
  //       <Button isLoading={isLoading} onClick={handleClick}>
  //         Enviar
  //       </Button>
  //     </Card>
  //   );
  const AddMinions = () => [...data, "Minion"];
  return (
    <Card>
      <Button onClick={AddMinions}>Agregar</Button>
      <List data={data} />
    </Card>
  );
}

export default App;
