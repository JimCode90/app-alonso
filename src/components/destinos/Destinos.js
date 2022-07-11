import imgHeader1 from "../../assets/img/header1.jpg";
import {useEffect, useState} from "react";

function Destinos() {

    const [destinos, setDestinos] = useState([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        getDestinos()
    }, [])

    const getDestinos = () => {
        let url = "http://api-alonso.test/api/destinos"
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
                        <a href="#" className="current">Destinos</a>
                    </div>
                </div>
            </div>
            <div className="page_head" style={{
                background: `url(${imgHeader1})`
            }}>
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="title">Buscar Destinos</div>
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
                                            <div className="field_wrap calendar_field field_wrap keywords">
                                                <input type="text" className="input" placeholder="Filtrar por la descripción del destino"
                                                       onChange={(e) => setFiltro(e.target.value)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page_content destinations-page" style={{
                padding: '20px'
            }}>
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="section-subtitle">EXPLORA LOS TOURS POR DESTINO</div>
                        <div className="section-title">DESTINOS</div>
                        <div className="main">
                            <div className="popular_destination__slider">
                                {
                                    destinos.filter(dest => dest.descripcion.toLowerCase().includes(filtro)).map(destino =>
                                        <div className="slide_item" key={destino.id}>
                                            <a className="slide_item_img">
                                                <div className="sq_parent">
                                                    <div className="sq_wrap">
                                                        <div className="sq_content"
                                                             style={{
                                                                 backgroundImage: `url(${destino.img_fondo})`
                                                             }}/>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="slide_item_content">
                                                <div className="flag">
                                                    <img src={destino.img_bandera} alt=""/>
                                                </div>
                                                <h3 className="slide_title">
                                                    {destino.pais}
                                                </h3>
                                                <p className="slide_text">
                                                    {destino.descripcion}
                                                </p>
                                            </a>
                                            <div className="slide_footer">
                                                <div className="hours">{destino.tours.length} tours</div>
                                                <div className="tours_link">
                                                    <a href="#">Ver Tours</a>
                                                </div>
                                            </div>
                                        </div>
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

export default Destinos