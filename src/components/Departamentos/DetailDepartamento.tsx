import type { departamentos } from "../../types/departamentos"
import Apartment from "../Icons/Apartment";
import Area from "../Icons/Area";
import Bathroom from "../Icons/Bathroom";
import Bedroom from "../Icons/Bedroom";
import Check from "../Icons/Check";
import Parking from "../Icons/Parking";
import Terrace from "../Icons/Terrace";

type Props = {
    departamento: typeof departamentos[string];
    section: string;
}

export default function DetailDepartamento({ departamento, section }: Props) {

    return <div
        id={section}
        className="
            overflow-x-hidden flex flex-col justify-center items-center my-8
            md:w-5/6
            lg:h-[600px] lg:w-[600px]
        "
    >
        <div className="w-full h-1/3 max-w-full overflow-clip flex items-center gap-2 rounded-lg">
            <img
                className="h-full object-center object-cover overflow-hidden"
                src="/principalHero.png"
                loading="lazy"
                alt="Imagén departamento"
            />
            <div className="flex flex-col gap-2 w-1/3 h-full">
                <img
                    className="h-full object-center object-cover"
                    src="/principalHero.png"
                    loading="lazy"
                    alt="Imagén departamento"
                />
                <img
                    className="h-full object-center object-cover"
                    src="/principalHero.png"
                    loading="lazy"
                    alt="Imagén departamento"
                />
            </div>
        </div>

        <h2 className="w-full h-1/6 text-4xl font-bold uppercase tracking-widest flex items-center">Tipo {section}</h2>

        <div className="w-full h-1/3 flex flex-row flex-wrap gap-2 justify-between mt-4">
            <div className="w-1/3 flex h-14 gap-2 items-center">
                <Apartment color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Unidades</p>
                    <p>{departamento.unidades} disponible{departamento.unidades >= 2 ? "s" : ""}</p>
                </div>
            </div>

            <div className="w-1/3 flex h-14 gap-2 items-center">
                <Area color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Tamaño</p>
                    <p>{departamento.area} m<sup>2</sup></p>
                </div>
            </div>

            <div className="w-1/3 flex h-14 gap-2 items-center">
                <Bedroom color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Recámaras</p>
                    <p>{departamento.recamaras} cuarto{departamento.recamaras >= 2 ? "s" : ""}</p>
                </div>
            </div>

            <div className="w-1/3 flex h-14 gap-2 items-center">
                <Bathroom color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Baños</p>
                    <p>{departamento.bathrooms} baño{departamento.bathrooms >= 2 ? "s" : ""}</p>
                </div>
            </div>

            <div className="w-1/3 flex h-14 gap-2 items-center">
                <Parking color="black" />
                <div className="flex flex-col text-left">
                    <p className="text-gray-400 font-bold tracking-wider uppercase">Estacionamiento</p>
                    <p>{departamento.estacionamiento} caj{departamento.estacionamiento >= 2 ? "ones" : "ón"}</p>
                </div>
            </div>

            {departamento.area_terraza ?
                <div className="w-1/3 flex h-14 gap-2 items-center">
                    <Terrace color="black" />
                    <div className="flex flex-col text-left">
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Terraza</p>
                        <p>{departamento.area_terraza} m<sup>2</sup></p>
                    </div>
                </div> :
                <div className="w-1/3 flex h-14 gap-2 items-center" />
            }
        </div>

        <ul className="w-full h-1/6 max-w-full flex flex-wrap justify-start items-center gap-2">
            {departamento.cuartos.map((cuarto, id) =>
                <div key={id} className="flex h-8 items-center py-2 px-4 bg-gray-300 rounded-lg border-2 border-gray-500">
                    <p className="text-black font-bold tracking-wide uppercase">{cuarto}</p>
                </div>
            )}
        </ul>

    </div>
}