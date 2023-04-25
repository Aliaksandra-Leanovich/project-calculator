import { Calculation } from "./components/Calculation/Calculation";
import { ContactUs } from "./components/ContactUs/ContactUs";
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
      <ContactUs />
    </div>
  );
}

export default App;
