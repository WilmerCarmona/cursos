import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };

  const list: string[] = [];
  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "No hay contenido para mostrar"
  );
  return (
    <Card>
      <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
    </Card>
  );
}

export default App;
