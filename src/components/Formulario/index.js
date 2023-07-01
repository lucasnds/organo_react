import './Formulario.css'

const Formulario = (props) => {
return (
 <div className="container">
   <label>{props.label}:</label>
   <input type="text" placeholder={props.placeholder}/>
 </div>
)
}

export default Formulario;