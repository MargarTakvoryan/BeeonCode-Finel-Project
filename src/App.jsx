// import './App.css';
import { Route, Routes } from "react-router-dom";
import Gender from "./Componets/Gender/Gender";
import Search from "./Componets/Search/Search";
import Man from "./Componets/Gender/Man/Man";
import Woman from "./Componets/Gender/Woman/Woman";



function App() {
  return (
    <div className="App">
      <Search />
      <Routes>
        <Route element={<Gender />} path="/">
          <Route element={<Woman />} path="/woman" />
          <Route path={'/man'} element={<Man />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
