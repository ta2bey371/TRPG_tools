import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {auth} from "./System/Firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";
import Login from "./Pages/Login.js";
import Home from "./Pages/Home.js";
import CharacterMake from "./Pages/CharacterMake.js";
import CharacterList from "./Pages/CharacterList.js";
import SessionStart from "./Pages/SessionStart.js";
import SessionList from "./Pages/SessionList.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

function App() {
  const [user,loading] = useAuthState(auth);
  if(loading) return(<div>loading ...</div>);
  return (
    <>
      <Header/>
      <BrowserRouter>
      {user?(
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/CharacterMake' element={<CharacterMake/>}/>
            <Route path='/CharacterList' element={<CharacterList/>}/>
            <Route path='/SessionStart' element={<SessionStart/>}/>
            <Route path='/SessionList' element={<SessionList/>}/>
          </Routes>
      ):(
        <Login/>
      )}
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;