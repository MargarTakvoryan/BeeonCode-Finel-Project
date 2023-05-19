// import './App.css';
import { Route, Routes } from "react-router-dom";
import Gender from "./Componets/Gender/Gender";
import Search from "./Componets/Search/Search";
import Man from "./Componets/Gender/Man/Man";
import Woman from "./Componets/Gender/Woman/Woman";
import NotFound from "./Componets/Not Found/NotFound";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "./Componets/Error/Error";




function App() {
  const [manCategory, setManCategory] = useState([])
  const [error, setError] = useState("")


  useEffect(() => {
    axios.get('http://localhost:3000/man').then((response) => {
      setManCategory(response);
    }).catch(error => {
      setError(error.message)
    })
  }, [])



  if (error) {
    return <Error errorMessage={error} />
  }
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
