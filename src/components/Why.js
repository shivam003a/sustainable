import { useEffect, useState } from "react";

const Why = ()=>{
    const [isTextVisible, setTextVisible] = useState(false);

    const handleTextAnimate = ()=>{
        const text = document.querySelectorAll('.txt')
        const toggle = window.innerHeight /5 *4;

        text.forEach((cont)=>{
            const top = cont.getBoundingClientRect().top;
            setTextVisible(top < toggle)
        })

    }
    useEffect(() => {
        window.addEventListener("scroll", handleTextAnimate)

        return ()=> { window.removeEventListener("scroll", handleTextAnimate) }
    }, [])

    return (
        <>
            <section className="why">
                <h1>Why Us ?</h1>
                <p className={isTextVisible?"txt animate":"txt"}>At Earthly, we believe that every small step towards sustainability can make a big difference. That's why we've created The Sustainable Kit, a collection of 5 essential products that make it easy for you to live a more eco-friendly life.Our commitment to sustainability goes beyond just the products we sell. We source materials ethically and make sure that our production process has minimal impact on the environment.</p>
                <p className={isTextVisible?"txt animate":"txt"}>We stand behind the quality of our products and are confident that you'll love them. If you're not completely satisfied, we offer a 100% satisfaction guarantee.We're here to help and are always available to answer any questions you may have. Our customer service team is dedicated to providing you with the best possible experience, and we're confident that you'll love The Sustainable Kit as much as we do.</p>
                <p className={isTextVisible?"txt animate":"txt"}>Join us on our mission to create a more sustainable future, and trust that The Sustainable Kit is the right choice for you</p>
            </section>
        </>
    )
}

export default Why;