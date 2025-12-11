import style from './Footer.module.css'


function Footer() {

    return (
        <>
            <footer>
                <div className={style.footer}>
                    <div className={style.container1}>
                        <h1 className={style.h1}>La Flora Boutique</h1>
                        <p className={style.p1}>We create handcrafted flower bouquets with same-day delivery across Los Angeles. Fresh, elegant, and made with care.</p>
                        <ul className={style.ul}>
                            <li className={style.li}>
                                <img src="./img/Phone.svg" alt="" />
                                +1 (213) 555-0198
                            </li>
                            <li className={style.li}>
                                <img src="./img/MapPinSimple.svg" alt="" />
                                143 Grand Ave, LA, CA
                            </li>
                            <li className={style.li}>
                                <img src="./img/Clock.svg" alt="" />
                                Daily: 9 AM-6 PM
                            </li>
                        </ul>
                    </div>

                    <div className={style.container2}>
                        <nav className={style.contact2}>
                            <p className={style.p}>CATEGORIES:</p>
                            <ul className={style.ul}>
                                <li>All Bouquets</li>
                                <li>Mixed Blooms</li>
                                <li>Mono Stems</li>
                                <li>On Sale</li>
                            </ul>
                        </nav>
                        <nav className={style.contact2}>
                            <p className={style.p}>FOLLOW US:</p>
                            <ul className={style.ul}>
                                <li>Instagram</li>
                                <li>X (Twitter)</li>
                                <li>Pinterest</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={style.container2}>
                        <nav className={style.contact2}>
                            <p className={style.p}>COMPANY:</p>
                            <ul className={style.ul}>
                                <li>Home</li>
                                <li>Delivery</li>
                                <li>About Us</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <nav className={style.contact2}>
                            <p className={style.p}>LEGAL:</p>
                            <ul className={style.ul}>
                                <li>Refund Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </nav>
                    </div>

                </div>
                <div className={style.after_footer}>
                    <p className={style.text}>© 2025, La Flora Boutique</p>
                    <p className={style.text}>Licenses</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
