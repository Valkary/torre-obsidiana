import { departamentos } from "../../types/departamentos";

export default function Botones({}) {
    const entries = Object.entries(departamentos);

    console.log(entries);

    return <div className="w-full">
        {entries.map(departamento => {
            return <button key={departamento[0]}>{departamento[0]}</button>
        })
        }
    </div>
}