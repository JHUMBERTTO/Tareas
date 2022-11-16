
import Button from "./Button"

const Header = ({onAdd, mostrarForm}) => {
    
    return (
        <header className="header">
            <h1>Tareas</h1>
            <Button texto={mostrarForm ? "Cancelar" : "Agregar"} color={ mostrarForm ? "gray" : "green"}onClick={onAdd}/>
        </header>
    )
}

export default Header