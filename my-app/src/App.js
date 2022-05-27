// import logo from './logo.svg';
import "./App.css";
const Header = (props) => {
  return <h1>Feedback project from United Software by {props.name}</h1>;
};

const NumberList = (props) => {
  let arr = [];
  let res;
  for (let i = 1; i <= props.count; i++) {
    arr.push(i);
  }
  res = arr.map((a) => (
    <li>
      <input type="radio" name="radio" /> {a}
    </li>
  ));
  return res;
};

const Feedback = () => {
  return (
    <div>
      <input type="text" placeholder="Write your feedback" />
      <button>Send feedback</button>
    </div>
  );
};

const Question = (props) => {
  return (
    <div className="flexDiv">
      <h2>How would you rate our cours?</h2>
      <ul>
        <NumberList count={10} />
      </ul>
      <Feedback />
    </div>
  );
};

const Footer = (props) => {
  return <h2>© Made by {props.name}</h2>;
};

function App() {
  return (
    <div className="flexDiv">
      <Header name="Oleg Zakhariak" />
      <Question />
      <Footer name="Oleg Zakhariak" />
    </div>
  );
}

export default App;
