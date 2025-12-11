import style from './ClientsChoice.module.css'


function ClientsChoice() {

    return (
        <>
            <div className={style.products}>
                <div className={style.group}>
                    <h1 className={style.h1}>Client’s Choice</h1>
                    <div className={style.sort}>
                        <p className={style.category}>All Bouquets</p>
                        <img src="./img/CaretRight.svg" alt="" />
                    </div>
                </div>
                <div className={style.container}>

                    <div className={style.card}>
                        <img src="./img/Image 10.png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Skyline Bloom</h2>
                            <div className={style.price}>
                                <p className={style.before}>$112</p>
                                <p className={style.after}>$99</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image 11.png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Lily Grace</h2>
                            <div className={style.price}>
                                <p className={style.before}>$82</p>
                                <p className={style.after}>$73</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image 12.png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Floral Flirt</h2>
                            <div className={style.price}>
                                <p className={style.after}>$99</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image 13.png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Color Crush</h2>
                            <div className={style.price}>
                                <p className={style.after}>$110</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClientsChoice
