import { useEffect, useState } from 'react';
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.webp';


const Products = () => {
    const container = document.querySelectorAll('.product-ind')
    const [boxTop, setBoxTop] = useState(false);

    const handleAnimate = () => {
        const toggleBottom = window.innerHeight / 5 * 3;

        container.forEach((cont) => {
            const boxTop = cont.getBoundingClientRect().top;
            setBoxTop(boxTop);

            if (boxTop < toggleBottom) {
                // cont.classList.add('animate');
                setBoxTop(true);
            }
        })

    }
    useEffect(() => {
        window.addEventListener("scroll", handleAnimate)

        return () => { window.removeEventListener("scroll", handleAnimate) }
    }, [boxTop])

    return (
        <>
            <section className="products">
                <h1>The Sustainable Kit</h1>
                <p>The Sustainable Kit is the perfect solution for those looking to live a more eco-friendly lifestyle. It includes five essential products that will simplify your daily routine while reducing waste. From a reusable water bottle to a set of cloth napkins, every item in the kit has been carefully selected to make a positive impact on the environment.</p>
                <p>Each product is made with high-quality, environmentally conscious materials and designed to last. Whether you're a university student or a professional, The Sustainable Kit is the perfect way to take small steps towards a more sustainable future. Discover the full collection on our website and see how easy it can be to make a difference.</p>
                <h1>The Kit Includes</h1>
                <div className="product-item">
                    <div className="product-ind p1">
                        <img src={p1} alt="img-1" />
                        <p>Plant Based Reusable Cups</p>
                    </div>
                    <div className="product-ind p2">
                        <img src={p2} alt="img-2" />
                        <p>Sustainability Starter Kit</p>
                    </div>
                    <div className="product-ind p3">
                        <img src={p3} alt="img-3" />
                        <p>Reusable Bamboo Straws</p>
                    </div>
                    <div className="product-ind p4">
                        <img src={p4} alt="img-4" />
                        <p>Bamboo Toothbrush (set of 2)</p>
                    </div>
                    <div className="product-ind p5">
                        <img src={p5} alt="img-5" />
                        <p>Reusable Containers</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;