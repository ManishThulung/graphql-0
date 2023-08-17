import "./App.css";
import Character from "./pages/Character";
import CharacterList from "./pages/CharacterList";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/:id" element={<Character />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
