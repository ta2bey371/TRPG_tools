import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase.js"
import Header from './Component/Header.js';
import Home from './Component/Home.js';
import SignIn from './Component/SignIn.js';
import CharacterList from './Component/CharacterList.js';
import CharacterMake from './Component/CharacterMake.js';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {user?
          (<Route path='/' element={<Home/>}/>):
          (<Route path='/' element={<SignIn/>}/>)}
          <Route path='/CharacterList' element={<CharacterList/>}/>
          <Route path='/CharacterMake' element={<CharacterMake/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
