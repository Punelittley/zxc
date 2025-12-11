import style from './Header.module.css'


function Header() {

    return (
        <>
            <header>
                <nav className={style.contact2}>
                <h1 className={style.h1}>La Flora Boutique</h1>
                    <p className={style.p}>CATEGORIES:</p>
                    <ul className={style.ul}>
                        <li>All Bouquets</li>
                        <li>Mixed Blooms</li>
                        <li>Mono Stems</li>
                        <li>On Sale</li>
                    </ul>
                </nav>
                <nav className={style.contact1}>
                    <p className={style.p}>CONTACT INFO:</p>
                    <ul className={style.ul}>
                        <li>+1 (213) 555-0198</li>
                        <li>143 Grand Ave, LA, CA</li>
                    </ul>
                </nav>
                <nav className={style.contact}>
                    <ul className={style.ul}>
                        <li>Delivery</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                    <div className={style.container}>
                        <p className={style.p}>Refund Policy</p>
                        <p className={style.p}>.</p>
                        <p className={style.p}>Terms & Conditions</p>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
