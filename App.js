import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <h1>LOGIN</h1>
      <from>
        <label for="name">USERNAME:</label>
        <input type="text" id="name" name="name"></input><br />        <label for="pas">PASSWORD:</label>
        <input type="password" id="pas" name="pas"></input><br />
      <input type="submit" value="submit"></input>
      </from>
    </div>  );
}

export default App;
