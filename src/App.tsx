import { Calculation } from "./components/Calculation/Calculation";
import { Header } from "./components/Header/Header";
import { StartProject } from "./components/StartProject/StartProject";
import { Team } from "./components/Team/Team";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <div>
      <Header />
      <StartProject />
      <Calculation />
      <Work />
      <Team />
    </div>
  );
}

export default App;
