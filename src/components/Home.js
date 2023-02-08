import { useEffect, useState } from 'react';

const Home = () => {
    const height = window.innerHeight;
    const [offset, setOffset] = useState(0)

    const handleScroll = () => {
        setOffset(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => { window.removeEventListener("scroll", handleScroll) };
    }, [])
    return (
        <>
            <section className="home">
                <span className="overlay overlay-1" style={{ left: 2.9 * offset + "px", top: 1.9 * offset + "px" }}>sustainable</span>
                <span className="overlay overlay-2" style={{ left: 2 * offset + "px", top: 2.3 * offset + "px" }}>affordable</span>
                <span className="overlay overlay-3" style={{ left: (1.9 * offset - 200) + "px" }}>nature friendly</span>
                <span className="overlay overlay-4" style={{ left: (3 * offset - 200) + "px" }}>reusable</span>
                <div style={{ top: (parseInt(height / 2.4) + 0.5 * offset) + "px" }}>
                    <h1>Elevate Your Lifestyle with Sustainable Kit</h1>
                    <p>A collection of eco-friendly products that simplify your daily routine</p>
                </div>
            </section>
        </>
    )
}

export default Home;