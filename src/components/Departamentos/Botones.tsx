import { departamentos } from "../../types/departamentos";

export default function Botones({ }) {
    const entries = Object.entries(departamentos);

    return <div className="w-full flex justify-evenly">
        {entries.map(departamento => {
            return <a href={departamento[1].section}>
                <button
                    key={departamento[0]}
                    className="px-5 py-2 border-2 rounded-sm flex-wrap border-black w-32"
                >
                    {departamento[0]}
                </button>
            </a>
        })}
    </div>
}