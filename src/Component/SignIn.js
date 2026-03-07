import{signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import{auth} from "../firebase.js"

function SignIn() {
    const toSignIn = () => {
        signInWithPopup(auth,new GoogleAuthProvider());
    };
  return (
    <div>
        <p>初めまして。あるいはお久しぶりです。</p>
        <button onClick={toSignIn}>サインイン</button>
    </div>
  )
}

export default SignIn