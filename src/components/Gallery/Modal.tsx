type Props = {
    isOpen: boolean,
    img: string | null,
    closeModal: () => void;
}

export default function Modal({ isOpen, img, closeModal }: Props) {
    return <div id="modal-departamento" className={`absolute z-10 top-0 left-0 w-screen h-screen ${isOpen ? "block" : "hidden"} transition-all duration-300`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gris bg-opacity-75 transition-opacity w-screen h-screen flex justify-center items-center">
            <div className="bg-blanco max-w-full h-full overflow-x-hidden rounded-lg m-auto lg:h-5/6 lg:w-5/6 flex flex-col px-5 py-5 overflow-y-scroll lg:overflow-hidden">
                <div className="flex flex-wrap">
                    <span className="flex-grow" />
                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-300 rounded-full w-8 h-8 text-center justify-center items-center text-blanco hidden lg:block">
                        x
                    </button>
                </div>

                <div className="lg:h-full w-full flex justify-center items-center py-5">
                    <div className="h-[90%]">
                        {img !== null &&
                            <img
                                src={img}
                                loading="eager"
                                height={"100%"}
                                className="object-center object-cover max-h-full rounded-lg"
                            />
                        }
                    </div>
                </div>

                <div className="flex lg:hidden justify-center">
                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-300 rounded-lg w-16 h-8 text-center justify-center items-center text-blanco">
                        x
                    </button>
                </div>
            </div>
        </div>
    </div>
}