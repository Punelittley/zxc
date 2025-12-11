import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Products.module.css'

function Products() {
    const [apiProducts, setApiProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://torguisam.ru/api/product/oksei-all-products"
                );

                const apiData = response.data.slice(0, 4).map((product, index) => ({
                    ...product,
                    staticImg: `./img/Image${index === 0 ? '' : index === 1 ? '2' : ` (${index === 2 ? 9 : 7})`}.png`,
                    staticPrice: [89, 94, 69, 72][index] || 50,
                    staticOldPrice: index === 0 ? 97 : null,
                    formattedName: product.name || 'Red Reverie'
                }));
                
                setApiProducts(apiData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.error("API Error:", err);
            }
        };

        fetchProducts();
    }, []);

    const handleImageError = (e, product) => {
        e.target.src = product.staticImg || './img/Image.png';
        e.target.onerror = null;
    };

    const formatProductName = (name) => {
        if (!name) return 'Special Bouquet';
        return name.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
    };

    return (
        <>
            <div className={style.products}>
                <div className={style.group}>
                    <h1 className={style.h1}>New Arrivals</h1>
                    <div className={style.sort}>
                        <p className={style.category}>All Bouquets</p>
                        <img src="./img/CaretRight.svg" alt="" />
                    </div>
                </div>

                <div className={style['api-section']}>
                    <h2 className={style['api-section-title']}>Featured from Our Partners</h2>
                    
                    {loading ? (
                        <div className={style['api-loading']}>
                            <p>Loading partner products...</p>
                        </div>
                    ) : error ? (
                        <div className={style['api-error']}>
                            <p>Partner products temporarily unavailable</p>
                            <p>Showing our collection instead</p>
                        </div>
                    ) : apiProducts.length === 0 ? (
                        <div className={style['api-empty']}>
                            <p>No partner products available</p>
                        </div>
                    ) : (
                        <div className={style['api-container']}>
                            {apiProducts.map((product) => (
                                <div key={product.id} className={style['api-card']}>
                                    <img 
                                        src={product.images?.[0] || product.staticImg} 
                                        alt={formatProductName(product.name)}
                                        onError={(e) => handleImageError(e, product)}
                                        width="237"
                                        height="237"
                                    />
                                    <div className={style['api-description']}>
                                        <h2 className={style['api-title']} title={formatProductName(product.name)}>
                                            {formatProductName(product.name)}
                                        </h2>
                                        <div className={style['api-price']}>
                                            {product.staticOldPrice && (
                                                <p className={style['api-price-before']}>${product.staticOldPrice}</p>
                                            )}
                                            <p className={style['api-price-after']}>${product.staticPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className={style.container}>
                    <div className={style.card}>
                        <img src="./img/Image.png" alt="White Whisper" width="237" height="237" />
                        <div className={style.description}>
                            <h2 className={style.h2}>White Whisper</h2>
                            <div className={style.price}>
                                <p className={style.before}>$97</p>
                                <p className={style.after}>$89</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image2.png" alt="Red Reverie" width="237" height="237" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Red Reverie</h2>
                            <div className={style.price}>
                                <p className={style.after}>$94</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image (9).png" alt="Tulip Carnival" width="237" height="237" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Tulip Carnival</h2>
                            <div className={style.price}>
                                <p className={style.after}>$69</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image (7).png" alt="Blush Serenity" width="237" height="237" />
                        <div className={style.description}>
                            <h2 className={style.h2}>Blush Serenity</h2>
                            <div className={style.price}>
                                <p className={style.after}>$72</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products