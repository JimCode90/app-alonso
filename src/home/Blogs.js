
import imgHome4 from '../assets/img/home4.jpg'
import imgPrevblog1 from '../assets/img/prevblog1.jpg'
import imgPrevblog2 from '../assets/img/prevblog2.jpg'


function Blogs() {
    return (
        <div className="blog blog-section last-section" style={{
            background: `url(${imgHome4})`
        }}>
            <div className="wrap">
                <div className="wrap_float">
                    <div className="top_part">
                        <div className="section_subtitle">
                            BLOG
                        </div>
                        <h2 className="section_title">
                            Artículos de viaje
                        </h2>
                        <div className="section_description">
                            Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit
                            sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                        </div>
                    </div>
                    <div className="section_content">
                        <a href="blog-single.html" className="blog_item">
                            <div className="blog_item_img">
                                <img src={ imgPrevblog1 } alt="" />
                            </div>
                            <div className="blog_item_date">
                                JUNE 6/2019 | UNCATEGORIZED
                            </div>
                            <h3 className="blog_item_title">
                                Empaca sabiamente antes de viajar
                            </h3>
                            <p className="blog_item_text">
                                Una maravillosa serenidad se ha apoderado de toda mi alma, como estas dulces mañanas de primavera que disfruto con todo mi corazón.
                            </p>
                        </a>
                        <a href="blog-single.html" className="blog_item">
                            <div className="blog_item_img">
                                <img src={ imgPrevblog2 } alt="" />
                            </div>
                            <div className="blog_item_date">
                                JUNE 6/2019 | UNCATEGORIZED
                            </div>
                            <h3 className="blog_item_title">
                                Empaca sabiamente antes de viajar
                            </h3>
                            <p className="blog_item_text">
                                Una maravillosa serenidad se ha apoderado de toda mi alma, como estas dulces mañanas de primavera que disfruto con todo mi corazón.
                            </p>
                        </a>
                    </div>
                    <div className="show-more">
                        <a href="blog-list.html" className="btn">
                            <span>Ver todos los articulos</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs