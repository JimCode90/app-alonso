import imgHeader1 from "../../assets/img/header1.jpg";
import {useEffect, useState} from "react";


function DestinosTabla() {
    const [destinos, setDestinos] = useState([]);

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
                        <a href="#" className="current">Destinos Tabla</a>
                    </div>
                </div>
            </div>
            <div className="image_bg" style={{
                background: `url(${imgHeader1})`
            }}></div>
            <div className="page_content destinations-page">
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="section-subtitle">EXPLORA LOS TOURS POR DESTINO</div>
                        <div className="section-title">DESTINOS</div>
                        <div className="main">
                            <div className="popular_destination__slider">
                                <table className="table table-striped slide_item" style={{
                                    color: 'white',
                                    width: '100%',
                                }}>
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Pais</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Bandera</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        destinos.map(destino =>
                                            <tr key={destino.id}>
                                                <th scope="row">{ destino.id }</th>
                                                <td>{ destino.pais }</td>
                                                <td>{ destino.descripcion }</td>
                                                <td>
                                                    <img src={ destino.img_bandera } alt=""/>
                                                </td>
                                                <td>
                                                    <button className="btn btn__choose_tour">Editar</button>
                                                </td>
                                            </tr>
                                        )
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinosTabla