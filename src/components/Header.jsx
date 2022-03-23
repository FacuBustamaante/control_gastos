import React from 'react'
import NuevoPresupuesto  from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValid, 
    setIsValid, 
    gastos,
    setGastos
}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValid ? (
                <ControlPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    gastos={gastos}
                    setGastos={setGastos}
                    setIsValid={setIsValid}
                />
                ) : (
                <NuevoPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValid={setIsValid}
                    />
                )}
        </header>
    )
}

export default Header
