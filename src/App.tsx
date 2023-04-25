import { Calculation } from "./components/Calculation/Calculation";
import { Header } from "./components/Header/Header";
import { StartProject } from "./components/StartProject/StartProject";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <div>
      <Header />
      <StartProject />
      <Calculation />
      <Work />
    </div>
  );
}

export default App;
