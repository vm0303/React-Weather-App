import './App.css';
import QuickCities from "./components/QuickCities";
import Inputs from "./components/inputs";
import TimeTitleLocation from "./components/TimeTitleLocation";
import TempAndDetails from "./components/TempAndDetails";

function App() {
    const handleTheSearch = (searchData) => {
        console.log(searchData);
    }
    return (
        <div className="App">
            <div className="text-content">
                <h1 className="text-title">WeathAware</h1>
                <div className="info">
                    <p>Look up the weather from various cites across the world!</p>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto mt-4 p-1 px-32 bg-gradient-to-br from-sky-700 to-cyan-500 h-fit shadow-xl shadow-stone-700
       sm:p-1 sm:px-10 old-mobile:max-w-[85%] old-mobile:p-1  smaller-mobile:max-w-[85%] smaller-mobile:p-1">
                <QuickCities/>
                <Inputs onSearchChange={handleTheSearch}/>

                <TimeTitleLocation/>
                <TempAndDetails/>
            </div>

        </div>
    );
}

export default App;
