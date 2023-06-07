import { useState } from "react"
import { motion } from "framer-motion"
import HamburgerButton from "./HamburgerButton"
import Modal from "./Modal";
import LogoCompleto from "../Icons/LogoCompleto";
import { getColorValue } from "../../types/colors";

const color_logo = getColorValue("blanco");

export default function MobileNav({}) {
    const [isOpen, setIsOpen] = useState(false);

    return <motion.div className="flex flex-row text-2xl max-h-full overflow-hidden h-full items-center">
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="w-1/2">
            <LogoCompleto color={color_logo} />
        </div>

        <div className="h-full w-full flex flex-row justify-end items-center px-5">
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </motion.div>
}