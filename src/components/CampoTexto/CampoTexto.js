import "./CampoTexto.css"

function CampoTexto(props) {
    console.log(props.label);
    return (
        <div className="CampoTexto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        
        </div>
    )
}

export default CampoTexto;