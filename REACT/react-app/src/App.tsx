import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };

  const list: string[] = ["Wilmer", "Nicolas", "Carmona", "Alvarez"];
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );
  return (
    <Card>
      <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
      {contenido}
      <Button>Enviar</Button>
    </Card>
  );
}

export default App;
