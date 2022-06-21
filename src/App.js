import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./common/Header";
import Home from "./home/Home";
import Footer from "./common/Footer";
import Tours from "./components/tours/Tours";
import Destinos from "./components/destinos/Destinos";
import DestinosTabla from "./components/destinos/DestinosTabla";


function App() {
    return (
        <div className="container">
            <BrowserRouter>

                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tours" element={<Tours/>}/>
                    <Route path="/destinos" element={<Destinos/>}/>
                    <Route path="/destinos-lista" element={<DestinosTabla/>}/>
                </Routes>
                <Footer/>

`
            </BrowserRouter>
        </div>
    );
}

export default App;
