import logo from './logo.svg';
import './App.css';
import useProducts from './hooks/useProducts';
import ProductMain from './component/productMain';
import SearchBar from './component/SearchBar';
import DropDown from './component/DropDown';
import DropDown2 from './component/DropDown2';
import { useState } from 'react';


function App() {
  const [label, setLabel] = useState();
  const changeHandler = e => {
    console.log('jfbvjd', e.target.name);
    setLabel(e.target.name);
  };
  const closeButton = () => {
    setLabel('');
  }
  return (
    <div className="App m-5">
      <div className='flex flex-row'>
        <SearchBar></SearchBar>
        <DropDown changeHandler={changeHandler}></DropDown>
        <DropDown2 changeHandler={changeHandler}></DropDown2>
        <div className='m-3' style={{ display: 'flex'}}>
          <p>{label}</p>
          {label && <button className='mb-2 mx-2' onClick={closeButton}>&#10005;</button>} </div>
      </div>
      <ProductMain></ProductMain>
    </div>
  );
}

export default App;
