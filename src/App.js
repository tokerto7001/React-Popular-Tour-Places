import { Blog } from "./components/blog";
import { Header } from "./components/header";
import "./App.css"


function App() {
  return (
    <div className="App">
         <Header/>
         <h1>Popular Tour Places</h1>
         <Blog /> 
    </div>
  );
}

export default App;
