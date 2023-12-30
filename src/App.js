import React,{useState} from 'react';
import './App.css';
import InputForm from './Components/Input/InputForm';
import Header from './Components/Header/Header';
import OutputForm from './Output/OutputForm';
import Cart from './Components/Cart/Cart';
import ContextProvider from './Components/Store/ContextProvider';
function App() {
  const [data,setData] = useState([]);
  const getDataHandler = (product) => {
    setData((prevData) => [...prevData, { id: Date.now(), ...product }]);
  };

  console.log("APP",data)
  return (
    <ContextProvider>
    <Cart/>
    <Header/>
    <InputForm getData={getDataHandler}/>
    <OutputForm productDetail={data}/>
    </ContextProvider>
  );
}

export default App;
