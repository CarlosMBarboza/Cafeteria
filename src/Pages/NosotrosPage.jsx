import '../Style/nosotros.css'

const NosotrosPage = () => {
    return (
        <div className="nosotros">
            <div>
                <img src="/src/assets/imgCafe/nuestro-cafe-mobile.png" alt="img1" />
            </div>
          
            <div className='nos'>
                <h2 className="nosotros-text">TOSTADORES Y ELABORADORES DE CAFÉ DESDE 1933 </h2>
                <h4 className='nosotros-text'>Desde 1933 tostamos nuestro propio café</h4>
                <p>
                    Lo cuidamos desde la selección de sus granos, hasta la
                    taza, conservando el amor y el respeto que tenemos por
                    lo que hacemos, desde el primer día. Por eso nuestro café es ÚNICO.
                    A través de nuestro proceso exclusivo de tostación, logramos resaltar las notas
                    y características propias de los diferentes granos. Un aroma pleno, con notas 
                    de chocolate, pan tostado, miel y caramelo y un sabor con cuerpo, con un toque
                    de frescura, es lo que hace inconfundible a un Café Martínez, siempre.
                    Nuestra Misión:
                    Creamos momentos sabores y proyectos, para una vida mejor.
                    Nuestra visión:
                    Ser en cada país, ciudad, pueblo o barrio,  El lugar elegido por su gente.
                </p>
                <h4 className='text'>ADMINISTRACIÓN</h4>
                <p>Nuestro experto personal trabaja  para satisfacer todas sus
                    necesidades y superar sus expectativas. Nuestra misión es crear
                    un entorno en el que nuestros
                    clientes  no tengan que preocuparse de nada.</p>
                <h4 className='text'>EQUIPO</h4>
                <p>Nuestro joven equipo está altamente motivado para que el tiempo
                    que pase con nosotros sea de la
                    mejor calidad. Nuestro agradable y profesional equipo está 
                    disponible para su comodidad.</p>
            </div>
        </div>
    )
}

export default NosotrosPage
