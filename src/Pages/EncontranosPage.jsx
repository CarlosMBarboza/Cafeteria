import '../Style/encontranos.css'

const EncontranosPage = () => {
    return (

        <>
            <div  className="encontranos">
                    <h1>Encuentranos en las siguientes ubicaciones </h1>
            <div className="ubicaciones">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19034.8890396
                21055!2d-58.566518991968806!3d-34.50111305290613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1
                3.1!3m3!1m2!1s0x95bcb12b4edcddf3%3A0xb2a7023a90a5996f!2sCaf%C3%A9%20Mart%C
                3%ADnez%20A%20la%20Barra!5e0!3m2!1ses-419!2sar!4v1700654407100!5m2!1ses-419!2
                sar" width="650" height="450" ></iframe>
            </div>

            <div className="direcciones">
                <span>AV CORRIENTES 2096</span>
                <ul>
                    <li> Buenos Aires, CABA  CP 1045 </li>
                    <li> Tel:  (011) 011 4951-3629</li>
                    <li> Email: corrientes2096@cafemartinez.com.ar</li>
                    </ul>

                <span>AV CARABOBO 43</span>

                <ul>  
                    <li> Buenos Aires, CABA  CP 1045 </li>
                    <li>Tel: (011) 4631-9142 </li> 
                    <li>Email:  carabobo43@cafemartinez.com.ar </li> 
                </ul>

                <span>Lavallol 80</span>
                <ul>
                    <li> LANUS, Lanús Oeste  </li> 
                    <li>Gran Buenos Aires, CP 1578</li> 
                    <li>Tel:   (011) 4247-8937 </li> 
                    <li>Email: lanus@cafemartinez.com.ar </li> 
                </ul>

                <span> AV BOEDO 819</span>
                <ul>
                    <li> Buenos Aires, CABA  CP 1218 </li>
                    <li>Tel:  (011) 4931-2840 </li> 
                    <li>Email:  boedo@cafemartinez.com.ar </li> 
                </ul>
            </div>
            </div>
        </>
    )
}

export default EncontranosPage
