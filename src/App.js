// import './App.css';
import { Route, Routes } from "react-router-dom";
import Gender from "./Componets/Gender/Gender";
import Search from "./Componets/Search/Search";
import Man from "./Componets/Gender/Man/Man";
import Woman from "./Componets/Gender/Woman/Woman";
import NotFound from "./Componets/Gender/Not Found/NotFound";
import { useEffect, useState } from "react";




function App() {
  const [manCategory, setManCategory] = useState([])
  // console.log(manCategory);

  useEffect(() => {
    fetch('http://localhost:3000/man')
      .then(response => response.json())
      .then(res => setManCategory(res))
      .catch((error) => {
        return console.log(error.massage);
      })
  }, [])

 


  return (
    <div className="App">
      <Search />
      <Routes>
        <Route element={<Gender />} path="/">
          <Route element={<Woman />} path="/woman" />
          <Route path={'/man'} element={<Man manCategory={manCategory} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
