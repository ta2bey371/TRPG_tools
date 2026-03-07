import { useState } from "react"
import{doc,setDoc} from "firebase/firestore"
import { db,auth } from "../firebase"

function CharacterMake() {
    const [name, setName] = useState("");
    const addCharacter = () => {
        setDoc(doc(db,"characters",auth.currentUser.uid),{
            name:name,
        });
        setName("");
    };
  return (
    <div>
        <label>
            キャラクター名：
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <button onClick={addCharacter}>決定</button>
    </div>
  )
}

export default CharacterMake