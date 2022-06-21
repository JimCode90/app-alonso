import Nav from "./Nav";


function Header() {
    return (
        <>
            <div className="header">
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="header__top">
                            <div className="tel">
                                <a href="tel:0000000000">+1 1235 6789 10</a>
                            </div>
                            <div className="email">
                                <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                            </div>
                            <div className="socials">
                                <a href="#" className="a facebook"></a>
                                <a href="#" className="a instagram"></a>
                                <a href="#" className="a pinterest"></a>
                                <a href="#" className="a twitter"></a>
                            </div>
                        </div>
                        <div className="header__bottom">
                            <a href="/" className="logo">lavella</a>

                            <Nav />
                            <div className="search_link" id="search_link"></div>
                            <div className="mobile_btn" id="mobile_btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header