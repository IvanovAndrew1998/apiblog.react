import './App.css';
import Post from "./Components/Post";

function App() {

  return (
    <div className="App">

      <h1>Блог</h1>
      <Post postName={"Penis"} ></Post>
      <Post></Post>
      <Post postName={"...alupa"}>dfhfghfghfg</Post>
      <Post>fvdfvdfv</Post>
    </div>
  );
}

export default App;
