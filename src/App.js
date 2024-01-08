import Main from "./components/Main";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
}

export default App;
