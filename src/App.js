import DragDropHome from "./Pages/DragDropHome";
import Home from "./Pages/Home";
import { Routes, Route } from 'react-router-dom';
import SearchTableHome from "./Pages/SearchTableHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag" element={<DragDropHome />} />
        <Route path="/searchTable" element={<SearchTableHome />} />
      </Routes>
    </div>
  );
}

export default App;