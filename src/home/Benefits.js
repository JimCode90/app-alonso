import imgHome1 from '../assets/img/home1.jpg'
import imgHome2 from '../assets/img/home2.jpg'
import imgHome3 from '../assets/img/home3.jpg'
function Benefits() {
    return (
        <>
            <div className="benefits">
                <div className="wrap">
                    <div className="wrap_float">
                        <div className="item">
                            <div className="item_img">
                                <img src={imgHome3} alt="" />
                            </div>
                            <div className="tc">
                                <h3 className="item_title">Cualquier ruta</h3>
                                <p className="item_text">
                                    Te ayudaremos a realizar cualquier ruta para viajar
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_img">
                                <img src={imgHome1} alt="" />
                            </div>
                            <div className="tc">
                                <h3 className="item_title">Tu sueño</h3>
                                <p className="item_text">
                                    Tus sueños de un viaje inolvidable se pueden hacer realidad con nosotras.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_img">
                                <img src={imgHome2} alt="" />
                            </div>
                            <div className="tc">
                                <h3 className="item_title">Nuestra garantia</h3>
                                <p className="item_text">
                                    Te garantizamos un viaje inolvidable y muchas impresiones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefits