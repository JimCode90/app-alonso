
import {useEffect, useState} from "react";

function DestinosTop() {
    const [destinos, setDestinos] = useState([]);

    useEffect(() => {
        getTopDestinos()
    }, []);

    const getTopDestinos = () => {
        let url = "http://api-alonso.test/api/destinos-top"
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
            <div className="top_destination mainpage-slider">
                <div className="section_heading">
                    <div className="wrap">
                        <div className="wrap_float">
                            <div className="section_subtitle">
                                DESTINOS TOP
                            </div>
                            <h2 className="section_title">
                                Lavella - Operador turístico
                            </h2>
                            <div className="description">
                                <div className="left">
                                    <p className="text">
                                        Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus
                                        varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet
                                        rutrum faucibus dolor auctor
                                    </p>
                                </div>
                                <div className="right">
                                    <p className="text">
                                        Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus
                                        varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet
                                        rutrum faucibus dolor auctor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_content popular_destination__content">
                    <div className="wrap">
                        <div className="wrap_float">
                            {
                                destinos.map(destino =>
                                    <a href="tour-list.html" className="item">
                                        <div className="sq_parent">
                                            <div className="sq_wrap">
                                                <div className="sq_content image"
                                                     style={{
                                                         background : `url(${destino.img_fondo})`
                                                     }}></div>
                                                <span>{ destino.pais }</span>
                                            </div>
                                        </div>
                                    </a>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinosTop