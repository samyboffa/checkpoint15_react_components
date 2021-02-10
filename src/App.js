import logo from "./logo.svg";
import "./App.css";
import { FullName } from "./Components/Profile/FullName";
import { Adress } from "./Components/Profile/Adress";
import { ProfilePhoto } from "./Components/Profile/ProfilePhoto";

function App() {
    return (
        <div className="App">
            <FullName />
            <ProfilePhoto />
            <Adress />
        </div>
    );
}

export default App;
