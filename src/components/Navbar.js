import '../App.css';
import { NavLink } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <>
            <section className="navbar">
                <h1>Earthly</h1>
                <NavLink to="#">Buy Now</NavLink>
            </section>
        </>
    )
}

export default Navbar;