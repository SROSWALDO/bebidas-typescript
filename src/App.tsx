import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./Views/IndexPage";
import FavoritesPage from "./Views/FavoritesPage";

import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route element={<Layout/>} >
        <Route path="/" element={<IndexPage />} index />
        <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
