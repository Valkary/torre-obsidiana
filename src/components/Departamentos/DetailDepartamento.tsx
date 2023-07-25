import type { departamentos } from "../../types/departamentos"
import Apartment from "../Icons/Apartment";
import Area from "../Icons/Area";
import Bathroom from "../Icons/Bathroom";
import Bedroom from "../Icons/Bedroom";
import Check from "../Icons/Check";
import DiningRoom from "../Icons/DiningRoom";
import IronBoard from "../Icons/IronBoard";
import Parking from "../Icons/Parking";
import Studio from "../Icons/Studio";
import Terrace from "../Icons/Terrace";
import WashingMachine from "../Icons/WashingMachine";

type Props = {
    departamento: typeof departamentos[string];
    section: string;
}

export default function DetailDepartamento({ departamento, section }: Props) {
    return <div
        id={section}
        className="
            overflow-x-hidden flex flex-col justify-center items-center shadow-md p-5 rounded-lg w-full
            md:w-5/6 md:h-5/6
            lg:w-[600px] lg:h-[550px] lg:flex-grow lg:overflow-y-hidden
        "
    >
        <div className="w-full h-[66px] flex items-center uppercase">
            <h3 className="text-4xl font-bold tracking-widest">Tipo {section}</h3>
            <div className="flex-grow flex h-14 gap-2 items-center justify-end">
                <p className="text-gray-400 font-bold tracking-wider uppercase">Sup.</p>
                <p>{departamento.area} m<sup>2</sup></p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row w-full h-full">
            <div className="w-full md:w-1/2 flex-col flex gap-2 mt-4">
                <div className="w-full flex h-14 gap-2 items-center">
                    <Apartment color="black" />
                    <div className="flex flex-col text-left">
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Unidades</p>
                        <p>{departamento.unidades} disponible{departamento.unidades >= 2 ? "s" : ""}</p>
                    </div>
                </div>

                <div className="w-full flex h-14 gap-2 items-center">
                    <Bedroom color="black" />
                    <div className="flex flex-col text-left">
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Recámaras</p>
                        <p>{departamento.recamaras} recámara{departamento.recamaras >= 2 ? "s" : ""}</p>
                    </div>
                </div>

                <div className="w-full flex h-14 gap-2 items-center">
                    <Bathroom color="black" />
                    <div className="flex flex-col text-left">
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Baños</p>
                        <p>{departamento.bathrooms} baño{departamento.bathrooms >= 2 ? "s" : ""}</p>
                    </div>
                </div>

                <div className="w-full flex h-14 gap-2 items-center">
                    <Parking color="black" />
                    <div className="flex flex-col text-left">
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Estacionamiento</p>
                        <p>{departamento.estacionamiento} caj{departamento.estacionamiento >= 2 ? "ones" : "ón"}</p>
                    </div>
                </div>

                {departamento.area_terraza &&
                    <div className="w-full flex h-14 gap-2 items-center">
                        <Terrace color="black" />
                        <div className="flex flex-col text-left">
                            <p className="text-gray-400 font-bold tracking-wider uppercase">Terraza</p>
                            <p>{departamento.area_terraza} m<sup>2</sup></p>
                        </div>
                    </div>
                }

                {departamento.sala_comedor &&
                    <div className="w-full flex h-14 gap-2 items-center">
                        <DiningRoom color="black" />
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Sala comedor</p>
                    </div>
                }

                {departamento.cuarto_lavado &&
                    <div className="w-full flex h-14 gap-2 items-center">
                        <WashingMachine color="black" />
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Cuarto de lavado</p>
                    </div>
                }

                {departamento.estudio &&
                    <div className="w-full flex h-14 gap-2 items-center">
                        <Studio color="black" />
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Estudio</p>
                    </div>
                }

                {departamento.closet_lavado &&
                    <div className="w-full flex h-14 gap-2 items-center">
                        <IronBoard color="black" />
                        <p className="text-gray-400 font-bold tracking-wider uppercase">Clóset de lavado</p>
                    </div>
                }
            </div>

            <div className="flex-grow rounded-lg">
                <img
                    src={departamento.img}
                    loading="lazy"
                    alt={"Imagén departamento"}
                    width={"100%"}

                    className="object-cover object-center w-full"
                />
            </div>
        </div>

    </div>
}