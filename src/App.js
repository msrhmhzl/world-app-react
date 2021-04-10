
import './App.css';
import React,{useEffect,useState} from 'react'
import Country from './component/Country/Country';
import { useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';

function App() {
  const [country,setCountry] = useState([])
  const [inputData, setInputData] = useState("")
  const {register , handleSubmit} = useForm();

  //getData
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data));  
  },[])

  const onSubmit = data => {
    setInputData(data)
  }

  return (
    <div className="App">
      <header className="app-container">
        <p className="header-text">World Population</p>
      </header>
        {/* Population more than : 
        <input type="text" placeholder="Search"
      onChange={
        (event) =>
        {
          setInputData(event.target.value)
        }
      }/> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <input type="text" className="search-box" placeholder=" Population more than..." 
          {...register('population')}
          />
          <button type="submit" className="search-boxbtn">
            <AiOutlineSearch/>
          </button>
        </div>
      </form>
      <div className="row">
      {
        country.filter((i)=> {
          if(inputData.population === ""){
            return i
          } else if (i.population >= (inputData.population)){
            return i
          }
        }).map(country => <Country {...country}></Country>)
      }
      </div>
    </div>
  );
}

export default App;
