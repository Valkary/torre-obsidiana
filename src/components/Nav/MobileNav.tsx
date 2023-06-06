import { useState } from "react"
import { motion } from "framer-motion"
import HamburgerButton from "./HamburgerButton"
import Modal from "./Modal";

export default function MobileNav({}) {
    const [isOpen, setIsOpen] = useState(false);

    return <motion.div className="flex flex-row text-negro text-2xl max-h-full overflow-hidden h-full items-center">
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        <img 
            src="/logos/logo_transparente.png"
            alt="Logo"
            className="h-24"
        />

        <div className="flex-grow w-full h-full flex flex-row justify-end items-center px-5">
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </motion.div>
}