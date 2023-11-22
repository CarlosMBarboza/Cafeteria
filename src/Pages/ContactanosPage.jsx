import { useRef } from "react";
import '../Style/contactanos.css'

const ContactanosPage = () => {
    const form = useRef(null)



    const handleSubmit = (e) =>{
    e.preventDefault();


    //Captura los Datos
    const data =  new FormData(form.current)
    const {name, phone, email, description, state} = Object.fromEntries([...data.entries()])
    console.log(name, phone, email, description, state)

    //Validar los Datos
    if(!name.trim() || !email.trim() || !phone.email() || !description.trim() || !state.trim() ){
        alert("Todos los campos son obligatorios")
        return;
        }
}
        return (
            <>
            
            <div className="form-contacto">

            <form  className="form-input" onSubmit={handleSubmit} ref={form}>
            <input
                className="form-control mb-2" 
                type="text"
                name="name"
                placeholder="Nombre y Apellido" 
                defaultValue='name'
                />
                <input
                className="form-control mb-2" 
                type="tel"
                name="phone"
                placeholder="Ingrese su telefono" 
                defaultValue='phone'
                />
                <input
                className="form-control mb-2" 
                type="email"
                name="email"
                placeholder="Ingrese su Email" 
                defaultValue='email'
                />
                <textarea
                className="form-control mb-3" 
                placeholder="Ingrese Descripcion"
                name="description"
                defaultValue='description'
                />
                <select  className="form-select mb-2" name="state"  defaultValue='completado'>
                    <option value="pendiente">Pedido Pendiente</option>
                    <option value="completado">Pedido Completado</option>
                </select>
                    <button className="btn btn-info">Enviar</button>
                </form>
    </div>
    </>
    )
}

export default ContactanosPage
