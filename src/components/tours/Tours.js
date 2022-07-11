import imgHeader1 from '../../assets/img/header1.jpg'
import {useEffect, useState} from "react";
import {API} from "../../utils";

function Tours() {

    const [tours, setTours] = useState([]);
    const [destinos, setDestinos] = useState([]);
    const [filtroDestino, setFiltroDestino] = useState('');

    useEffect(() => {
        getTours()
        getDestinos()
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

    const getDestinos = () => {
        let url = `${API}/api/destinos`
        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setDestinos(data)
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
            <div className="page_head" style={{
                background: `url(${imgHeader1})`
            }}>
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="title">Buscar Tours</div>
                        <div className="search_tour">
                            <div className="search_tour_form">
                                <div className="fields__block" style={{
                                    padding: '0'
                                }}>
                                    <div className="fields">
                                        <div className="field" style={{
                                            width: '100%'
                                        }}>
                                            <div className="label">Destino</div>
                                            <div className="field_wrap calendar_field select_field">
                                                <select name="tour-activity" onChange={(e) => setFiltroDestino(e.target.value)}>
                                                    <option value="">Seleccione...</option>
                                                    {
                                                        destinos.length > 0 && destinos.map(dest => (
                                                            <option value={dest.id} key={dest.id}>{dest.pais}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page_content two-columns" style={{
                padding: '10px'
            }}>
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="section-title" style={{
                            margin: '0'
                        }}>Tours</div>
                        <div className="main">
                            <div className="most_popular__section">
                                {
                                    tours.filter(tour => filtroDestino == '' ? tour : tour.id_destino == filtroDestino).map(tour =>
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