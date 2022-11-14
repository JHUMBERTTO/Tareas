
import Button from "./Button"

const Header = () => {
    
    const onClick = () => {
        console.log("click")
    }

    return (
        <header className="header">
            <h1>Tareas</h1>
            <Button texto="Agregar" color="green" onClick={onClick}/>
        </header>
    )
}

export default Header