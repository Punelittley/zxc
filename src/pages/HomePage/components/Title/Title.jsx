import style from './Title.module.css'


function Title() {

    return (
        <>
            <section className={style.section}>
                <img src="./img/Illustration 1.svg" alt="" />
                <div className={style.div}>
                    <button className={style.info}>3-Hour Delivery</button>
                    <h1 className={style.h1}>Elegant Bouquets, <br /> Locally Crafted in LA</h1>
                    <button className={style.h2}>Browse Bouquets</button>
                </div>
                <img src="./img/Illustration 2.svg" alt="" />
            </section>
        </>
    )
}

export default Title
