import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme.theme ? "dark" : "app"}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
