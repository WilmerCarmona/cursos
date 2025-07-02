import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  return (
    <Card>
      <CardBody title="Ésto es un titulo" text="Ésto es un texto" />
      <List />
    </Card>
  );
}

export default App;
