import { auth } from "../firebase"

function Home() {
  
  return (
    <>
      ここに内容を表示
      <p>{auth.currentUser.displayName}</p>
      <p>{auth.currentUser.uid}</p>
      <img src={auth.currentUser.photoURL} alt=""/>
      <button onClick={()=>auth.signOut()}>サインアウト</button>
    </>
  )
}

export default Home