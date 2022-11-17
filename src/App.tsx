import "./App.css";
import { Text } from "./components/polymorphic/Text";

function App() {
  return (
    <div className="App">
      <Text as="h1" size="sm">
        Heading
      </Text>
      <Text as="p" size="md" color="primary">
        Paragraph
      </Text>
      <Text as="label" size="lg" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
