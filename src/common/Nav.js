import {Link} from "react-router-dom";


function Nav() {
    return (
        <>
            <div className="menu" id="js-menu">
                <div className="close"></div>
                <div className="scroll">
                    <a className="current">Inicio</a>
                    <div className="scroll_wrap">
                        <ul>
                            <li><Link to="/" className="active">Inicio</Link></li>
                            <li><Link to="/tours">Tours</Link></li>
                            <li><Link to="/destinos">Destinos</Link></li>
                        </ul>
                    </div>
                    <div className="bottom">
                        <div className="tel">
                            <a href="tel:+11235678910">+1 1235 6789 10</a>
                        </div>
                        <div className="email">
                            <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                        </div>
                        <div className="socials">
                            <div className="links">
                                <a href="#" className="fb"></a>
                                <a href="#" className="instagram"></a>
                                <a href="#" className="pinterest"></a>
                                <a href="#" className="twitter"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav