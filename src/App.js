import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col gap-3">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="text-3xl font-bold">To do list App!</h1>
        <p className=" text-slate-300 bg-indigo-500 p-3 rounded-md w-full">
          My to do 1
        </p>
        <p className=" text-slate-300 bg-indigo-500 p-3 rounded-md w-full">
          My to do 2
        </p>
        <p className=" text-slate-300 bg-indigo-500 p-3 rounded-md w-full">
          My to do 3
        </p>
        <p className=" text-slate-300 bg-indigo-500 p-3 rounded-md w-full">
          My to do 4
        </p>
        <p className=" text-slate-300 bg-indigo-500 p-3 rounded-md w-full">
          My to do 5
        </p>
      </header>
    </div>
  );
}

export default App;
