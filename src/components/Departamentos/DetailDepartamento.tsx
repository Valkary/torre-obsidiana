import type { departamentos } from "../../types/departamentos"

type Props = {
    departamento: typeof departamentos[string];
    section: string;
    id: number;
    openDepModal: (section: string) => void;
}

export default function DetailDepartamento({ departamento, section, id, openDepModal }: Props) {
    return <div
        id={section}
        className="
            overflow-x-hidden flex flex-col justify-center items-center shadow-md px-5 py-8 rounded-lg w-full bg-white
            md:w-5/6 md:h-5/6
            lg:w-[400px] lg:h-[400px] lg:overflow-y-hidden
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
            <div className="flex-grow flex flex-col items-center gap-4 rounded-lg h-5/6">
                <div className="h-5/6 w-full flex justify-center">
                    <img
                        src={departamento.img}
                        loading="lazy"
                        alt={"Imagén departamento"}
                        height={"100%"}
                        className="object-cover object-center h-full"
                    />
                </div>
                <button
                    className="bg-naranja text-blanco px-4 py-2 rounded-lg hover:scale-110 transition-all duration-200 uppercase tracking-wide"
                    onClick={() => openDepModal(section)}
                >
                    Plano llave
                </button>
            </div>
        </div>
    </div>
}