import './App.css'
import Computer from "@components/Computer.tsx";
import Header from "@components/Header.tsx";
import NavBar from "@components/NavBar.tsx";

function App() {

    return (
        <div>
            <Header/>
            <NavBar/>
            <Computer/>
        </div>
    );

}

export default App
