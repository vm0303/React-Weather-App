
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import QuickCities from "./components/QuickCities";

function App() {
  return (
    <div className="App">
        <div className="text-content">
            <h1 className="text-title">WeathAware</h1>
            <div className="info">
                <p>Look up the weather from various cites across the world!</p>
            </div>
        </div>

        <div className="mx-auto-max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-sky-700 to-cyan-300 h-fit shadow-xl shadow-gray-400">
        <QuickCities/>
        </div>

    </div>
  );
}

export default App;
