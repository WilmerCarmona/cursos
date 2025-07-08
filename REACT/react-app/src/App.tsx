import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };
  const list = ["Wilmer", "Nicolas", "Carmona", "Alvarez", "Yesid"];
  return (
    <Card>
      <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
