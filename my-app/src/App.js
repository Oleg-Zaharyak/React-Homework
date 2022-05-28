// import logo from './logo.svg';
import "./App.css";
import {Header} from "./Components/Header"
import {Footer} from "./Components/Footer"
import {Question} from "./Components/Question"

function App() {
  let nameStudent = "Oleg Zakhariak"
  return (
    <div className="flexDiv">
      <Header name= {nameStudent} />
      <Question />
      <Footer name= {nameStudent} />
    </div>
  );
}

export default App;
