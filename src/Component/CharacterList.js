import { onAuthStateChanged } from "firebase/auth"
import { db,auth } from "../firebase"
import{doc,getDoc} from "firebase/firestore"
import { useEffect, useState } from "react"

function CharacterList() {
    const [characters, setCharacters] = useState({name:null});
    useEffect(()=>{
        onAuthStateChanged(auth,async(user) => {
            const doSnap = await getDoc(doc(db,"characters",user.uid));
            if(doSnap.exists()) setCharacters(doSnap.data());
        });
    },[]);

  return (
    <div>
        {characters.name?<p>{characters.name}</p>:<p>名無しさん</p>}
    </div>
  )
}

export default CharacterList