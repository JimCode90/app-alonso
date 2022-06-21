import imgHeader1 from '../../assets/img/header1.jpg'
import {useEffect, useState} from "react";

function Tours() {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        getTours()
    }, []);

    const getTours = () => {
        let url = "http://api-alonso.test/api/tours"
        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setTours(data)
            })
    }

    return (
        <>
            <div className="breadcrumbs">
                <div className="wrap">
                    <div className="wrap_float">
                        <a href="#">Inicio</a>
                        <span className="separator">/</span>
                        <a href="#" className="current">Tours</a>
                    </div>
                </div>
            </div>
            <div className="image_bg" style={{
                background: `url(${imgHeader1})`
            }}></div>
            <div className="page_content two-columns">
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="section-title">Tours</div>
                        <div className="main">
                            <div className="most_popular__section">
                                {
                                    tours.map(tour =>
                                        <a className="slider_item"
                                           style={{
                                               background: `url(${tour.img_fondo})`
                                           }} key={tour.id}>
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
                                                        ({ tour.reviews } Reviews)
                                                    </div>
                                                </div>
                                                <div className="title">
                                                    { tour.nombre } | desde ${ tour.precio }
                                                </div>
                                                <div className="description">
                                                    { tour.descripcion }
                                                </div>
                                                <div className="days">
                                                    <span>{ tour.dias } days</span>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tours