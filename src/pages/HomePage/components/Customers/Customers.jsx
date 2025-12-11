import style from './Customers.module.css'


function Customers() {

    return (
        <>
            <div className={style.products}>
                <div className={style.group}>
                    <h1 className={style.h1}>What Customers Say</h1>
                    <div className={style.sort}>
                        <p className={style.category}>View All</p>
                        <img src="./img/CaretRight.svg" alt="" />
                    </div>
                </div>
                <div className={style.container}>

                    <div className={style.container1}>
                        <div className={style.card}>
                            <div className={style.description}>
                                <p className={style.sort}>Bouquet: <span className={style.span}>White Reverie</span></p>
                                <h2 className={style.h2}>“The bouquet was even more beautiful than the photos. Fast delivery and amazing quality!”</h2>
                                <div className={style.feedback}>
                                    <p className={style.name}>Alisa M.</p>
                                    <div className={style.stars}>
                                        <img src="./img/Star.svg" alt="" />
                                        <p className={style.name}>5.0</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={style.img} src="./img/Image 15.png" alt="" />
                    </div>
                    <div className={style.container1}>
                        <div className={style.card}>
                            <div className={style.description}>
                                <p className={style.sort}>Bouquet: <span className={style.span}>Skyline Bloom</span></p>
                                <h2 className={style.h2}>“Ordered for my mom's birthday - she cried happy tears. Thank you for making it special!”</h2>
                                <div className={style.feedback}>
                                    <p className={style.name}>Daniel K.</p>
                                    <div className={style.stars}>
                                        <img src="./img/Star.svg" alt="" />
                                        <p className={style.name}>5.0</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={style.img} src="./img/Image 16.png" alt="" />
                    </div>
                    <div className={style.container1}>
                        <div className={style.card}>
                            <div className={style.description}>
                                <p className={style.sort}>Bouquet: <span className={style.span}>Floral Flirt</span></p>
                                <h2 className={style.h2}>“Loved the design and care in the packaging. You can tell these are handcrafted with love.”</h2>
                                <div className={style.feedback}>
                                    <p className={style.name}>Lina G.</p>
                                    <div className={style.stars}>
                                        <img src="./img/Star.svg" alt="" />
                                        <p className={style.name}>4.9</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={style.img} src="./img/Image 17.png" alt="" />
                    </div>

                    
                </div>
            </div>

        </>
    )
}

export default Customers
