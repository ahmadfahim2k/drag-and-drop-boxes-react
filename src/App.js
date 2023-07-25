import DragDropHome from "./Pages/DragDropHome";
import Home from "./Pages/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drag" element={<DragDropHome />} />
      </Routes>
    </div>
  );
}

export default App;
