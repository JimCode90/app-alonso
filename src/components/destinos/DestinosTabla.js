import imgHeader1 from "../../assets/img/header1.jpg";
import './DestinosTabla.css'
import {useEffect, useState} from "react";
import {Box, Button, Modal} from "@mui/material";

const estilosModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function DestinosTabla() {
    const [destinos, setDestinos] = useState([]);
    const [paisDestino, setPaisDestino] = useState('');
    const [descripcionDestino, setDescripcionDestino] = useState('');
    const [modalRegistro, setModalRegistro] = useState(false);

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

    const registrarDestinos = (event) => {
        event.preventDefault();
        cerrarModalRegistro()
        let ruta = `http://api-alonso.test/api/destinos`
        const formData = new FormData()
        formData.append('pais', paisDestino)
        formData.append('descripcion', descripcionDestino)
        fetch(ruta, {
            method: 'POST',
            body: formData
        }).then(response => {
            return response.json();
        }).then(data => {
            getDestinos()
            alert("Se ha registrado los destinos " + nombre + " de manera correcta.")

        })

    }

    const abrirModelRegistro = () => {
        setModalRegistro(true)
    }

    const cerrarModalRegistro = () => {
        setModalRegistro(false)
    }

    const formularioTemplate = () => {
        return (
            <>
                <div className="add_comment">
                    <div className="_title">Complete los siguientes campos:</div>
                    <div className="field">
                        <label htmlFor="pais" className="label">Pais</label>
                        <div className="input_wrap">
                            <input
                                type="text"
                                id="pais"
                                className="input"
                                value={paisDestino}
                                onChange={(e) => setPaisDestino(e.target.value)}/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="descripcion" className="label">Descripción</label>
                        <div className="input_wrap">
                            <textarea
                                id="descripcion"
                                className="textarea"
                                value={descripcionDestino}
                                onChange={(e) => setDescripcionDestino(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="comment-fotm-bottom">
                        <button className="btn submit">Enviar</button>
                        <Button onClick={cerrarModalRegistro}>Cancelar</Button>
                    </div>
                </div>
            </>
        )
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
                        <div className="section-title">
                            <button className="btn-agregar-destino" onClick={abrirModelRegistro}>Añadir destino</button>
                        </div>
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
                                                <th scope="row">{destino.id}</th>
                                                <td>{destino.pais}</td>
                                                <td>{destino.descripcion}</td>
                                                <td>
                                                    <img src={destino.img_bandera} alt=""/>
                                                </td>
                                                <td>
                                                    <button className="btn-editar-destino">Editar</button>
                                                    <button className="btn-eliminar-destino">Eliminar</button>
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

            <Modal
                hideBackdrop
                open={modalRegistro}
                onClose={cerrarModalRegistro}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{...estilosModal, width: '50%'}}>
                    <h2 id="child-modal-title">REGISTRAR DESTINO</h2>
                    <div id="child-modal-description">
                        <div className="reviews_comments">
                            <form>
                                {formularioTemplate()}
                            </form>
                        </div>
                    </div>

                </Box>
            </Modal>
        </>
    )
}

export default DestinosTabla