import { departamentos } from "../../types/departamentos";
import DetailDepartamento from "./DetailDepartamento";

export default function Departamentos({}) {
    const entries = Object.entries(departamentos);

    return <div className="min-h-screen w-screen">
        {entries.map(entry => <DetailDepartamento departamento={entry[1]} />)}
    </div>
}