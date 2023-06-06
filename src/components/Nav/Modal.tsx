import { useEffect } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";

type Props = {
    isOpen: boolean;
    setIsOpen: (x: boolean) => void;
}

const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.4 * index
        }
    })
}

const container: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            stiffness: 260,
            damping: 20,
            duration: 0.3
        }
    }
}

const Links = [
    {
        name: "Home",
        url: "/#home"
    },
    {
        name: "Departamentos",
        url: "/#departamentos"
    },
    {
        name: "Amenidades",
        url: "/#amenidades"
    },
    {
        name: "Ubicación",
        url: "/#ubicacion"
    },
    {
        name: "Galería",
        url: "/#galeria"
    },
    {
        name: "Contacto",
        url: "/#contacto"
    }
]

export default function Modal({ isOpen, setIsOpen }: Props) {
    const modalBodyControls = useAnimationControls();
    const linkBodyControls = useAnimationControls();

    useEffect(() => {
        if (isOpen) {
            modalBodyControls.start(container.visible);
            linkBodyControls.start(item.visible);
        } else {
            modalBodyControls.start(container.hidden);
            linkBodyControls.start(item.hidden);
        }
    }, [isOpen]);
    
    return <motion.div
        id="modal"
        className="modal h-screen w-screen absolute top-0 left-0 z-20 bg-gris text-white pt-36 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={modalBodyControls}
    >
        <motion.div
            className="h-full w-full flex flex-col items-center text-xl font-extrabold tracking-widest uppercase gap-14"
        >
            {Links.map(({ name, url }, idx) => {
                return <motion.a 
                    href={url}
                    key={url}
                    onClick={() => setIsOpen(false)}
                    custom={idx}
                    animate={linkBodyControls}
                    className="hover:underline hover:underline-offset-2"
                >
                    {name}
                </motion.a>
            })}
            
        </motion.div>
    </motion.div>
}