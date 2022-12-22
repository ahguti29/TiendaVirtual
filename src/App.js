import './App.css';
import { ItemListContainer } from "./components/ItemListContainer";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <ItemListContainer />
      </Layout>
    </div>
  );
}

export default App;
