import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.webp';


const Products = () => {
    return (
        <>
            <section className="products">
                <h1>The Sustainable Kit</h1>
                <p>The Sustainable Kit is a carefully curated collection of 5 essential products designed to simplify your daily routine while promoting sustainability. Here are the products you'll find in the kit</p>
                <div className="product-item">
                    <div className="product-ind">
                        <img src={p1} alt="img-1" />
                        <p>Plant Based Reusable Cups</p>
                    </div>
                    <div className="product-ind">
                        <img src={p2} alt="img-2" />
                        <p>Plant Based Reusable Cups</p>
                    </div>
                    <div className="product-ind">
                        <img src={p3} alt="img-3" />
                        <p>Plant Based Reusable Cups</p>
                    </div>
                    <div className="product-ind">
                        <img src={p4} alt="img-4" />
                        <p>Plant Based Reusable Cups</p>
                    </div>
                    <div className="product-ind">
                        <img src={p5} alt="img-5" />
                        <p>Plant Based Reusable Cups</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;