// import logo from './logo.svg';
import "./App.css";
import {Header} from "./сomponents/Header"
import {Footer} from "./сomponents/Footer"
import {Question} from "./сomponents/Question"

function App() {
  const nameStudent = "Oleg Zakhariak"
  return (
    <div className="flexDiv">
      <Header name= {nameStudent} />
      <Question />
      <Footer name= {nameStudent} />
    </div>
  );
}

export default App;
