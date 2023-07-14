import { departamentos } from "../../types/departamentos";
import DetailDepartamento from "./DetailDepartamento";

export default function Departamentos({ }) {
    const entries = Object.entries(departamentos);

    return (
        <div
            className="
                    w-full max-w-full flex flex-col justify-center items-center my-10
                    lg:max-w-7xl lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-evenly
                "
        >
            {entries.map((entry, id) => <DetailDepartamento key={id} departamento={entry[1]} section={entry[0]} />)}
        </div>
    )
}