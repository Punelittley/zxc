import style from './OnSale.module.css'


function OnSale() {

    return (
        <>
            <div className={style.products}>
                <div className={style.group}>
                    <h1 className={style.h1}>On Sale</h1>
                    <div className={style.sort}>
                        <p className={style.category}>View All</p>
                        <img src="./img/CaretRight.svg" alt="" />
                    </div>
                </div>
                <div className={style.container}>

                    <div className={style.card}>
                        <img src="./img/Image (6).png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>White Whisper</h2>
                            <div className={style.price}>
                                <p className={style.before}>$97</p>
                                <p className={style.after}>$89</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image 14.png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Blush Belle</h2>
                            <div className={style.price}>
                                <p className={style.before}>$139</p>
                                <p className={style.after}>$129</p>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>

        </>
    )
}

export default OnSale
