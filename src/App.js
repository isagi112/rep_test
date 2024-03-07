import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col gap-3">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <p className=" text-slate-300 bg-indigo-500 p-3 rounded-md">
          git demonstration
        </p>
      </header>
    </div>
  );
}

export default App;
