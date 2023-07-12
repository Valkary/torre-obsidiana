import type { departamentos } from "../../types/departamentos"
import Apartment from "../Icons/Apartment";
import Area from "../Icons/Area";
import Bathroom from "../Icons/Bathroom";
import Bedroom from "../Icons/Bedroom";
import Check from "../Icons/Check";
import Parking from "../Icons/Parking";

type Props = {
    departamento: typeof departamentos[string];
}

export default function DetailDepartamento({ departamento }: Props) {

    return <div className="max-w-full w-full overflow-x-hidden">
        <div className="w-full grid grid-cols-2 gap-y-2">
            <div className="w-1/2 flex h-14 gap-2 items-center">
                <Area color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Tamaño</p>
                    <p>{departamento.area} m<sup>2</sup></p>
                </div>
            </div>

            <div className="w-1/2 flex h-14 gap-2 items-center">
                <Apartment color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Unidades</p>
                    <p>{departamento.unidades} disponible{departamento.unidades >= 2 ? "s" : ""}</p>
                </div>
            </div>

            <div className="w-1/2 flex h-14 gap-2 items-center">
                <Bedroom color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Recámaras</p>
                    <p>{departamento.recamaras} cuarto{departamento.recamaras >= 2 ? "s" : ""}</p>
                </div>
            </div>

            <div className="w-1/2 flex h-14 gap-2 items-center">
                <Bathroom color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Baños</p>
                    <p>{departamento.bathrooms} baño{departamento.bathrooms >= 2 ? "s" : ""}</p>
                </div>
            </div>

            <div className="w-1/2 flex h-14 gap-2 items-center">
                <Parking color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Estacionamiento</p>
                    <p>{departamento.estacionamiento} caj{departamento.estacionamiento >= 2 ? "ones" : "ón"}</p>
                </div>
            </div>
        </div>

        {departamento.area_terraza &&
            <div>{departamento.area_terraza} m2 de terraza</div>
        }

        <div className="w-full">
            <ul className="w-full flex flex-col items-center">
                {departamento.cuartos.map((cuarto, id) =>
                    <div className="w-1/2 flex h-8 gap-2 items-center">
                        <Check color="black" />
                        <p className="text-black font-bold tracking-wide uppercase">{cuarto}</p>
                    </div>
                )}
            </ul>
        </div>
    </div>
}