import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };

  const list: string[] = [];
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );
  return (
    <Card>
      <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
      {contenido}
    </Card>
  );
}

export default App;
