import { useState } from "react";
const FormNuevoGasto = ({gastos, setGastos, setNewGasto, gastosD, setGastosD }) => {

  const [gasto, setGasto] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewGasto(false);
    //setGastos(Number(gastos) + Number(gasto));
const gasto = [
    {
        nombre,
        cantidad,
        categoria,
        date: new Date(),
    }
   
    ];
    setGastosD((gastos)=>[...gastos, ...gasto]);
    setNewGasto(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto mt-20">
      <h2 className="text-stone-500 text-3xl text-center font-bold my-5">
        Agregar Gasto
      </h2>
      <form onSubmit={handleSubmit} className="px-5">
        <div className="campo">
          <label className="label-form" htmlFor="nombre">
            Nombre Gasto
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label className="label-form" htmlFor="cantidad">
            Cantidad
          </label>

          <input
            id="cantidad"
            type="number"
            placeholder="Añade La cantidad del gasto: ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label className="label-form" htmlFor="categoria">
            Categoría
          </label>

          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
          value={"Añadir Gasto"}
          onClick={gastosD}
        

        />
      </form>
    </div>
  );
};

export default FormNuevoGasto;
