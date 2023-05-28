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
import SubCatgoryComponent from "./Componets/SubCatgoryComponent/SubCatgoryComponent";




function App() {
  const [manCategory, setManCategory] = useState([])
  const [manSubCategory, setManSubCategory] = useState([])
  const [filterid, setFilterid] = useState("")
  const [error, setError] = useState("")

  // const { id } = useParams()
  // console.log(id);

  // console.log(filterid);
  // console.log(manSubCategory);
  useEffect(() => {
    axios.get('http://localhost:3000/man').then((response) => {
      setManCategory(response.data);
    }).catch(error => {
      setError(error.message)
    })
  }, [])

  function filterID(id) {
    return setFilterid(id)
  }

  useEffect(() => {
    setManSubCategory([])
    axios.get(`http://localhost:3000/man/${filterid}`).then((response) => {
      setManSubCategory(response.data)
    }).catch(error => {
      setError(error.message)
    })

  }, [filterid])

  // Post 
  function addCategoryObject(title,imgUrl) {
    axios.post("http://localhost:3000/man", {
      title: title,
      imgUrl: imgUrl,
      sub_Category: []
    })
      .then((response) => {
        setManCategory((manCategory)=>[...manCategory,response.data])
      });
    // console.log(title,imgUrl);
  }



  if (error) {
    return <Error errorMessage={error} />
  }
  return (
    <div className="App">

      <Search />
      <Routes>
        <Route element={<Gender />} path="/">
          <Route element={<Woman />} path="/woman" />
          <Route path={'/man'} element={<Man addCategoryObject={addCategoryObject} manCategory={manCategory} filterID={filterID} />} >
            <Route path="/man/:name" element={<SubCatgoryComponent manSubCategory={manSubCategory} />} ></Route>
          </Route>

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {filterid && <SubCatgoryComponent manSubCategory={manSubCategory} />}
    </div>

  );
}

export default App;
