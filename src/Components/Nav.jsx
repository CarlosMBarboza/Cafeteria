import {Link } from 'react-router-dom'



const Nav = () => {
    return (
        <>
        <nav className='container-nav'>
            <h3>CoffeeBlack</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="galeria">Galeria</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contactanos">Contactanos</Link></li>
                <li><Link to="/encontranos">Encontranos</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav
