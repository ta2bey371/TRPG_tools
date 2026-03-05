import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './Component/Header.js';
import Home from './Component/Home.js';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
