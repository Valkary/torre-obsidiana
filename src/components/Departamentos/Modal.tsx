import { useEffect, useRef, useState } from "react";
import { departamentos } from "../../types/departamentos";
import Apartment from "../Icons/Apartment";
import Bedroom from "../Icons/Bedroom";
import Bathroom from "../Icons/Bathroom";
import Parking from "../Icons/Parking";
import Terrace from "../Icons/Terrace";
import DiningRoom from "../Icons/DiningRoom";
import WashingMachine from "../Icons/WashingMachine";
import Studio from "../Icons/Studio";
import IronBoard from "../Icons/IronBoard";

export default function Modal() {
    const [departamento, setDepartamento] = useState<string | null>(null);
    const [dep, setDep] = useState<typeof departamentos[string] | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const departamento = localStorage.getItem("dep");
            if (!departamento) return;

            const dep_obj = departamentos[departamento];
            if (!dep_obj) return;

            setDepartamento(departamento);
            setDep(dep_obj);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    function closeModal() {
        if (document) {
            const modal = document.querySelector("#modal-departamento");
            modal?.classList.remove("block");
            modal?.classList.add("hidden");
        }
    }

    return <div id="modal-departamento" className="absolute z-10 top-0 left-0 w-screen h-screen hidden transition-all duration-300" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gris bg-opacity-75 transition-opacity w-screen h-screen flex justify-center items-center">
            <div className="bg-blanco w-full h-full rounded-lg m-auto md:h-[90%] md:w-[90%] lg:h-5/6 lg:w-5/6 flex flex-col px-10 py-5">
                <div className="flex">
                    <h1 className="font-bold tracking-wide uppercase grow text-5xl">{`Departamento tipo ${departamento}`}</h1>
                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-300 rounded-full w-8 h-8 flex justify-center items-center text-blanco">
                        x
                    </button>
                </div>
                {dep ?
                    <div className="flex flex-col md:flex-row w-full h-full">
                        <div className="w-full md:w-1/2 lg:w-1/3 flex-col flex gap-2 mt-4">
                            <div className="w-full flex h-14 gap-2 items-center">
                                <Apartment color="black" />
                                <div className="flex flex-col text-left">
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Unidades</p>
                                    <p>{dep.unidades} disponible{dep.unidades >= 2 ? "s" : ""}</p>
                                </div>
                            </div>

                            <div className="w-full flex h-14 gap-2 items-center">
                                <Bedroom color="black" />
                                <div className="flex flex-col text-left">
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Recámaras</p>
                                    <p>{dep.recamaras} recámara{dep.recamaras >= 2 ? "s" : ""}</p>
                                </div>
                            </div>

                            <div className="w-full flex h-14 gap-2 items-center">
                                <Bathroom color="black" />
                                <div className="flex flex-col text-left">
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Baños</p>
                                    <p>{dep.bathrooms} baño{dep.bathrooms >= 2 ? "s" : ""}</p>
                                </div>
                            </div>

                            <div className="w-full flex h-14 gap-2 items-center">
                                <Parking color="black" />
                                <div className="flex flex-col text-left">
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Estacionamiento</p>
                                    <p>{dep.estacionamiento} caj{dep.estacionamiento >= 2 ? "ones" : "ón"}</p>
                                </div>
                            </div>

                            {dep.area_terraza &&
                                <div className="w-full flex h-14 gap-2 items-center">
                                    <Terrace color="black" />
                                    <div className="flex flex-col text-left">
                                        <p className="text-gray-400 font-bold tracking-wider uppercase">Terraza</p>
                                        <p>{dep.area_terraza} m<sup>2</sup></p>
                                    </div>
                                </div>
                            }

                            {dep.sala_comedor &&
                                <div className="w-full flex h-14 gap-2 items-center">
                                    <DiningRoom color="black" />
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Sala comedor</p>
                                </div>
                            }

                            {dep.cuarto_lavado &&
                                <div className="w-full flex h-14 gap-2 items-center">
                                    <WashingMachine color="black" />
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Cuarto de lavado</p>
                                </div>
                            }

                            {dep.estudio &&
                                <div className="w-full flex h-14 gap-2 items-center">
                                    <Studio color="black" />
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Estudio</p>
                                </div>
                            }

                            {dep.closet_lavado &&
                                <div className="w-full flex h-14 gap-2 items-center">
                                    <IronBoard color="black" />
                                    <p className="text-gray-400 font-bold tracking-wider uppercase">Clóset de lavado</p>
                                </div>
                            }
                        </div>

                        <div className="flex-grow flex flex-col items-center justify-center gap-4 rounded-lg h-5/6">
                            <div className="h-5/6 w-full flex justify-center">
                                <img
                                    src={dep.img}
                                    loading="lazy"
                                    alt={"Imagén departamento"}
                                    height={"100%"}
                                    className="object-cover object-center h-full"
                                />
                            </div>
                        </div>
                        <div className="flex-grow flex flex-col items-center justify-center gap-4 rounded-lg h-5/6 bg-red-500">
                            <div className="h-5/6 w-full flex justify-center">
                                <img
                                    src={""}
                                    loading="lazy"
                                    alt={"Plano llave"}
                                    height={"100%"}
                                    className="object-cover object-center h-full"
                                />
                            </div>
                        </div>
                    </div> :
                    <p>Error</p>
                }
            </div>
        </div>
    </div>
}