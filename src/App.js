import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculator from "./component/Calculator";
import History from "./component/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
