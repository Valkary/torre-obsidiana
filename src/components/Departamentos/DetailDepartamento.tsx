import type { departamentos } from "../../types/departamentos"

type Props = {
    departamento: typeof departamentos[string];
}

export default function DetailDepartamento({ departamento }: Props) {
    console.log(departamento);

    return <div>
        <div>{departamento.area} m2</div>
        <div>{departamento.unidades} unidades</div>
        <div>{departamento.recamaras} recamaras</div>
        <div>{departamento.bathrooms} baños</div>
        {departamento.area_terraza && 
            <div>{departamento.area_terraza} m2 de terraza</div>
        }
        <div>
            <ul>{departamento.cuartos.map((cuarto, id) => 
                <li key={id}>{cuarto}</li>
            )}</ul>
        </div>
    </div>
}