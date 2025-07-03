import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Wilmer", "Nicolas", "Carmona", "Alvarez", "Merwil"];
  return (
    <Card>
      <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
      <List data={list} />
    </Card>
  );
}

export default App;
