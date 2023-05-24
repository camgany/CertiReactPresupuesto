import { useEffect, useState } from "react";
import { formatearCantidad } from "../helpers/numbers";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import icono_casa from '../assets/icono_casa.svg';


const Gasto = ({ presupuesto, setPresupuesto, setGastos, gastos, gastosD}) => {

    return (
        <>
           //haz que saque los datos de gastosD
            <div className="flex flex-row justify-between items-center px-5 py-2 border-b border-gray-200">
                <div className="flex flex-row items-center">
                    <img src={icono_casa} alt="icono casa" className="w-10 h-10" />
                    
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-gray-500 text-sm">Gasto</p>
                gastosD.map((gasto) => (
                    <p className="text-gray-500 text-sm">{gasto.nombre}</p>
                ))
                
                    </div>
                   
            </div>

        </>
    );
};

export default Gasto;
