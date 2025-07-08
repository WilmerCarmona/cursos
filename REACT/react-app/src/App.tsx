import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("Mostrando", elemento);
  };
  const list = ["Wilmer", "Nicolas", "Carmona", "Alvarez", "Yesid"];
  return (
    <Card>
      <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
