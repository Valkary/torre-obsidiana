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
        }, 50);
        return () => clearInterval(interval);
    }, []);

    function closeModal() {
        if (document) {
            const modal = document.querySelector("#modal-departamento");
            modal?.classList.remove("block");
            modal?.classList.add("hidden");
        }
    }

    return <div id="modal-departamento" className="absolute z-10 top-0 left-0 w-screen h-screen hidden transition-all duration-300 gotham" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gris bg-opacity-75 transition-opacity w-screen h-screen flex justify-center items-center">
            <div className="bg-blanco w-full h-full max-w-full rounded-lg m-auto lg:h-[90%] lg:w-5/6 flex flex-col overflow-y-scroll lg:overflow-hidden relative overflow-x-hidden py-5 lg:py-0">
                <div className="lg:h-full w-full justify-center items-center">
                    {dep ?
                        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center relative">
                            <div className="h-44 hidden lg:flex justify-center absolute bottom-10 right-1/2 lg:right-[45%] xl:right-[50%]">
                                <img
                                    src={dep.plano_llave}
                                    loading="lazy"
                                    alt={"Plano llave"}
                                    width={"175"}
                                    className="object-cover object-center"
                                />
                            </div>

                            <div className="w-full md:w-1/2 flex-col flex justify-evenly gap-4 h-[80%] pl-5 md:pl-10">
                                <h1 className="font-bold tracking-wide uppercase lg:w-1/2 text-3xl md:text-4xl lg:text-5xl max-w-full mt-2 mb-4">{`Departamento tipo ${departamento}`}</h1>

                                <div className="w-full flex h-14 gap-2 items-center">
                                    <Apartment color="black" />
                                    <div className="flex flex-col text-left">
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Unidades</p>
                                        <p className="text-xl">{dep.unidades} disponible{dep.unidades >= 2 ? "s" : ""}</p>
                                    </div>
                                </div>

                                <div className="w-full flex h-14 gap-2 items-center">
                                    <Bedroom color="black" />
                                    <div className="flex flex-col text-left">
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Recámaras</p>
                                        <p className="text-xl">{dep.recamaras} recámara{dep.recamaras >= 2 ? "s" : ""}</p>
                                    </div>
                                </div>

                                <div className="w-full flex h-14 gap-2 items-center">
                                    <Bathroom color="black" />
                                    <div className="flex flex-col text-left">
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Baños</p>
                                        <p className="text-xl">{dep.bathrooms} baño{dep.bathrooms >= 2 ? "s" : ""}</p>
                                    </div>
                                </div>

                                <div className="w-full flex h-14 gap-2 items-center">
                                    <Parking color="black" />
                                    <div className="flex flex-col text-left">
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Estacionamiento</p>
                                        <p className="text-xl">{dep.estacionamiento} caj{dep.estacionamiento >= 2 ? "ones" : "ón"}</p>
                                    </div>
                                </div>

                                {dep.area_terraza &&
                                    <div className="w-full flex h-14 gap-2 items-center">
                                        <Terrace color="black" />
                                        <div className="flex flex-col text-left">
                                            <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Terraza</p>
                                            <p className="text-xl">{dep.area_terraza} m<sup>2</sup></p>
                                        </div>
                                    </div>
                                }

                                {dep.sala_comedor &&
                                    <div className="w-full flex h-14 gap-2 items-center">
                                        <DiningRoom color="black" />
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Sala comedor</p>
                                    </div>
                                }

                                {dep.cuarto_lavado &&
                                    <div className="w-full flex h-14 gap-2 items-center">
                                        <WashingMachine color="black" />
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Cuarto de lavado</p>
                                    </div>
                                }

                                {dep.estudio &&
                                    <div className="w-full flex h-14 gap-2 items-center">
                                        <Studio color="black" />
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Estudio</p>
                                    </div>
                                }

                                {dep.closet_lavado &&
                                    <div className="w-full flex h-14 gap-2 items-center">
                                        <IronBoard color="black" />
                                        <p className="text-gray-400 font-bold tracking-wider uppercase text-2xl">Clóset de lavado</p>
                                    </div>
                                }
                            </div>

                            <div className="bg-naranja flex-col justify-center items-center flex
                                lg:hidden lg:w-1/2 lg:h-full lg:flex-row lg:items-end lg:overflow-hidden
                            ">
                                <div className="h-full lg:w-2/3 flex justify-center lg:h-full lg:items-center">
                                    <img
                                        src={dep.plano_llave}
                                        loading="lazy"
                                        alt={"Plano llave"}
                                        width={"120%"}
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center
                                lg:w-1/2 lg:h-full lg:pr-5 lg:pt-5 lg:bg-naranja
                            ">
                                <div className="w-full hidden lg:flex flex-row">
                                    <span className="flex-grow" />
                                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-300 rounded-full w-8 h-8 text-center justify-center items-center text-blanco lg:block border border-red-600">
                                        x
                                    </button>
                                </div>

                                <div className="h-full lg:w-2/3 flex justify-center lg:h-full lg:items-center">
                                    <img
                                        src={dep.img}
                                        loading="lazy"
                                        alt={"Imagén departamento"}
                                        width={"120%"}
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                        :
                        <p>Error</p>
                    }
                </div>

                <div className="flex lg:hidden justify-center">
                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-300 rounded-lg w-24 h-12 text-center justify-center items-center text-blanco font-bold font-2xl">
                        x
                    </button>
                </div>
            </div>
        </div>
    </div>
}