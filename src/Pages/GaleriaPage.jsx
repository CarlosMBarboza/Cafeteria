import HoverCarousel from 'hover-carousel'
import '../Style/galeria.css'


const GaleriaPage = () => {
    const images = [
        "/src/assets/imgCafe/art-latte-imagen-de-portada-600x400 - copia.jpg" ,
        "/src/assets/imgCafe/cafe-organico-600x511.jpg",
        "/src/assets/imgCafe/blog3.jpg",
        "/src/assets/imgCafe/blog2.jpg",
        "/src/assets/imgCafe/blog1.jpg",
        "/src/assets/imgCafe/curso2.jpg",
        "/src/assets/imgCafe/curso1.jpg",
        "/src/assets/imgCafe/curso3.jpg",
        "/src/assets/imgCafe/nosotros.jpg",
    ]
    return (
        <>
        <div>
                <HoverCarousel images={images}/>
                <h2  className="galeria-text">30% OFF en café  durante este mes</h2>

        <div className='img-text' >
                        <div>
                            <h3>¿Cómo seleccionar bien el origen del café de especialidad?</h3>
        <p>El primer paso en el proceso de selección de granos para un café de especialidad es 
        identificar y seleccionar las mejores plantaciones y regiones productoras de café. Cada
        región tiene características únicas, como la altitud, el clima y el suelo, que influyen en el 
        sabor y aroma de los granos.

        Para asegurar la calidad del café, es fundamental trabajar con agricultores y productores que
        sigan prácticas de cultivo sostenibles y éticas que, a su vez, certifiquen esa gran calidad presente en 
        un café de especialidad.

        Cosecha y procesamiento de los granos de café de especialidad
        Una vez identificadas las plantaciones y regiones adecuadas, es importante
        que el café se coseche y procese de manera adecuada.

        La madurez de los frutos es crucial, ya que los granos de café alcanzan su máximo 
        potencial de sabor cuando se cosechan en su punto óptimo de madurez. Adelantarse a este momento o, por el contrario, retrasarse, podría suponer no obtener una calidad tan alta en el café de especialidad que se elabore a posteriori.

        Hay que tener claro que el método de procesamiento utilizado 
        puede influir en la calidad del café, ya que cada uno de estos métodos afecta el sabor y 
        aroma de los granos de manera diferente. </p>
                </div>
                    <img src="/src/assets/imgCafe/planta-cafe-600x400.jpg" alt="img" />
                    
                </div>
        </div>
        </>
    )
}

export default GaleriaPage
