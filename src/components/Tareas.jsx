const Tareas = () => {
    const tareas = [
        {
          id: 1,
          texto: 'Ir al cine',
          fecha: '02 de Febrero de 2022',
          terminada: true,
        },
        {
          id: 2,
          texto: 'Comprar en el supermercado',
          fecha: '10 de Febrero de 2022',
          terminada: false,
        },
        {
          id: 3,
          texto: 'Hacer app en React',
          fecha: '11 de Febrero de 2022',
          terminada: false,
        }
      ]
  
  
    return (
    <>
      {tareas.map((tarea) => (<h3>{tarea.texto}</h3>))}
    </>
  )
}

export default Tareas