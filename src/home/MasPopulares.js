
import './MasPopulares.css'
import Slider from 'react-slick'

function MasPopulares() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="most_popular__section mainpage-slider">
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="top_part">
                            <div className="top_part_left">
                                <p className="section_subtitle">POPULARES</p>
                                <h2 className="section_title">
                                    Destinos de vacaciones <br /> más populares
                                </h2>
                            </div>
                            <div className="most_popular__section__slider" id="most_popular__slider">
                                <Slider {...settings}>
                                    <a className="slider_item slider_item1">
                                        <div className="slider_item__content">
                                            <div className="rating">
                                                <div className="stars">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="reviews_count">
                                                    (2 Reviews)
                                                </div>
                                            </div>
                                            <h3 className="title">
                                                Japón | $3,500 $3,880
                                            </h3>
                                            <p className="description">
                                                6 excursiones a las principales ciudades del país, admira el hermoso otoño
                                                jardines
                                            </p>
                                            <div className="days">
                                                <span>7 dias</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="slider_item slider_item2">
                                        <div className="slider_item__content">
                                            <div className="rating">
                                                <div className="stars">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="reviews_count">
                                                    (2 Reviews)
                                                </div>
                                            </div>
                                            <h3 className="title">
                                                Islandia | $3,500 $3,880
                                            </h3>
                                            <p className="description">
                                                6 excursiones a las principales ciudades del país, admira el hermoso otoño
                                            </p>
                                            <div className="days">
                                                <span>15 dias</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="slider_item slider_item3">
                                        <div className="slider_item__content">
                                            <div className="rating">
                                                <div className="stars">
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star active"></div>
                                                    <div className="star"></div>
                                                </div>
                                                <div className="reviews_count">
                                                    (2 Reviews)
                                                </div>
                                            </div>
                                            <h3 className="title">
                                                Inglaterra | $3,500 $3,880
                                            </h3>
                                            <p className="description">
                                                6 excursiones a las principales ciudades del país, admira el hermoso otoño
                                            </p>
                                            <div className="days">
                                                <span>23 dias</span>
                                            </div>
                                        </div>
                                    </a>
                                </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasPopulares