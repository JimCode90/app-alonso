import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./common/Header";
import Home from "./home/Home";
import Footer from "./common/Footer";
import Tours from "./components/tours/Tours";
import Destinos from "./components/destinos/Destinos";


function App() {
    return (
        <div className="container">
            <BrowserRouter>

                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tours" element={<Tours/>}/>
                    <Route path="/destinos" element={<Destinos/>}/>
                </Routes>
                <Footer/>

`
            </BrowserRouter>
        </div>
    );
}

export default App;
