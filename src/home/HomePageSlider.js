import imgSlide from '../assets/img/slide1.jpg'
import imgNap1 from '../assets/img/nap1.jpg'
import imgNap2 from '../assets/img/nap2.jpg'
import imgNap3 from '../assets/img/nap3.jpg'
import imgNap4 from '../assets/img/nap4.jpg'
import imgNap5 from '../assets/img/nap5.jpg'

function HomePageSlider() {
    return (
        <>
            <div className="homepage_slider">
                <div className="slider-container">
                    <div className="slider-control left inactive"></div>
                    <div className="slider-control right"></div>
                    <ul className="slider-pagi"></ul>
                    <div className="slider">
                        <div className="slide slide-0 active">
                            <div className="slide__bg" style={{
                                background: `url(${imgSlide})`
                            }}></div>
                            <div className="slide__content">
                                <div className="slide__text">
                                    <h2 className="slide__text-heading">Seychelles</h2>
                                    <p className="slide__text-desc">
                                        Etiam porta sem malesuada magna mollis
                                    </p>
                                    <div className="slide__controls">
                                        <a href="single.html" className="btn">Quiere un recorrido personal</a>
                                        <a href="tour-list.html" className="btn btn__choose_tour">Elige recorrido</a>
                                        <a className="arrow next"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="most_popular">
                <span>
                    El destino más popular este año - Tailandia
                </span>
                </div>
                <div className="categories" id="header_categories">
                    <div className="wrap">
                        <div className="wrap_float">
                            <div className="items">
                                <div className="scroll">
                                    <a href="single.html" className="categories_item">
                                        <div className="icon">
                                            <div className="icon-wrap">
                                                <img src={imgNap1} alt="" className="image-cover" />
                                            </div>
                                        </div>
                                        <div className="_title"><span>Ski tours</span></div>
                                    </a>
                                    <a href="single.html" className="categories_item">
                                        <div className="icon">
                                            <div className="icon-wrap">
                                                <img src={imgNap2} alt="" className="image-cover" />
                                            </div>
                                        </div>
                                        <div className="_title"><span>Ski tours</span></div>
                                    </a>
                                    <a href="single.html" className="categories_item">
                                        <div className="icon">
                                            <div className="icon-wrap">
                                                <img src={imgNap3} alt="" className="image-cover" />
                                            </div>
                                        </div>
                                        <div className="_title"><span>Ski tours</span></div>
                                    </a>
                                    <a href="single.html" className="categories_item">
                                        <div className="icon">
                                            <div className="icon-wrap">
                                                <img src={imgNap4} alt="" className="image-cover" />
                                            </div>
                                        </div>
                                        <div className="_title"><span>Ski tours</span></div>
                                    </a>
                                    <a href="single.html" className="categories_item">
                                        <div className="icon">
                                            <div className="icon-wrap">
                                                <img src={imgNap5} alt="" className="image-cover" />
                                            </div>
                                        </div>
                                        <div className="_title"><span>Ski tours</span></div>
                                    </a>
                                </div>

                            </div>
                            <div className="other_items" id="header_other_items">
                                <div className="categories_item item">
                                    <div className="icon">
                                        <div className="arrow"></div>
                                    </div>
                                    <div className="_title">
                                        Ver más 4 direcciones
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePageSlider