import { departamentos } from "../../types/departamentos";
import DetailDepartamento from "./DetailDepartamento";

export default function Departamentos({}) {
    const entries = Object.entries(departamentos);

    return <div
            className="
                w-full max-w-full flex flex-row gap-5 flex-wrap
                lg:grid lg:max-w-7xl
            "
        >
        {entries.map((entry, id) => <DetailDepartamento key={id} departamento={entry[1]} />)}
    </div>
}