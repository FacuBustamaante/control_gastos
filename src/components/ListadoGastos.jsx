import React from 'react'
import { generarId } from './functions'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, setModal, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className="listado-gastos contenedor">

      { filtro ? (
        <>
          <h2>{gastosFiltrados.length ? 'Gastos' : 'Aún no hay gastos en esta categoría'}</h2>
          { gastosFiltrados.map( gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
          ))}
        </>
        )
        :
        (
          gastos.map( gasto => (
            <Gasto 
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
        ))
        )
      }
    </div>
  )
}

export default ListadoGastos