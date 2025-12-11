import style from './Advertisement.module.css'


function Advertisement() {

    return (
        <>
            <section className={style.section}>
                <div className={style.div}>
                    <button className={style.info}>Special Offer</button>
                    <h1 className={style.h1}>Enjoy 20% Off <br /> Your First Bouquet!</h1>
                    <button className={style.h2}>Order Bouquet</button>
                </div>
                <img className={style.img} src="./img/Illustrations.svg" alt="" />
            </section>
        </>
    )
}

export default Advertisement

