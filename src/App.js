import { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";


function App() {
  const [dustbox, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "dustbox");
    getDocs(postData).then((snapShot) => {
      //console.log(snapShot.docs.map((doc) => ({ ...doc.data() })));
      setPosts(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return <div className="App">
    {dustbox.map((post)=>(
      <div>
        <h1>{post.home.latitude}</h1>
        <h1>{post.home.longitude}</h1>
      </div>
    ))}
  </div>;
}

export default App;
