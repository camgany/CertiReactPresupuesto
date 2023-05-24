import { useEffect, useState } from "react";
import Presupuesto from "./components/Presupuesto";
import FormNuevoGasto from "./components/FormNuevoGasto";
import Resumen from "./components/Resumen";
import IconoNuevoGasto from "./assets/nuevo-gasto.svg";
import "./App.css";
import Gasto from "./components/Gasto";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState("");
  const [gastos, setGastos] = useState(0);
  const [click, setClick] = useState(false);
  const [newGasto, setNewGasto] = useState(false);
  const [descripcion, setDescripcion] = useState(false);
  const [tipoGasto, setTipoGasto] = useState("casa");
  const [fecha, setFecha] = useState("");
  const [gastosD, setGastosD] = useState([]);
  useEffect(() => {
    console.log("Se cambio ", gastosD);
  }, [gastosD]);
  return (
    <div className="container mx-auto bg-slate-400 mt-20">
      {!click ? (
        <>
          <Presupuesto
            presupuesto={presupuesto}
            click={click}
            setClick={setClick}
            setPresupuesto={setPresupuesto}
          />

        </>

      ) : (
        <>
          <Resumen
            setClick={setClick}
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            gastosD={gastosD}

          />
          <Gasto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setGastos={setGastos}
            gastos={gastos}
            gastosD={gastosD}

          />
          <div className="fixed bottom-5 right-5">
            <img
              className="w-10 hover:cursor-pointer"
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={() => {
                setNewGasto(true);
              }}
            />
          </div>
        </>
      )}
      {
        newGasto && (
          <Modal gastos={gastos} setGastos={setGastos} setNewGasto={setNewGasto} 
          //ESTO ES PARA AGREGAR EL NUEVO GASTO
          gastosD={gastosD} setGastosD={setGastosD}

          />
        )
      }
    </div>
  );
}

export default App;
