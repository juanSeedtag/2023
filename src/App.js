import logo from './logo.svg';
import './App.css';
import Creative from './creative';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Creative></Creative>

      </header>
    </div>
  );
}

export default App;
