import "./App.css";
import { ChartDetails } from "./Components/ChartDetails/ChartDetails";
import { LineGraph } from "./Components/LineGraph/LineGraph";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./styles/main.scss";
import Piechart from "./Components/Piechart/Piechart";
import Donut from "./Components/Donut/Donut";
import UsageCondition from "./Components/UsageCondition/UsageCondition";
import { DashBoard } from "./Components/DashBoard/DashBoard";
import { EmptyState } from "./Components/EmptyState/EmptyState";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/emptystate" element={<EmptyState />} />
            <Route path="/chart-details" element={<ChartDetails />} />
            <Route path="/line-graph" element={<LineGraph />} />
            {/* <Route path="/usage-graph" element={<UsageCondition />} /> */}
            <Route path="/piechart" element={<Piechart />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
