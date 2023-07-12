import { useState } from "react"
import { motion } from "framer-motion"
import HamburgerButton from "./HamburgerButton"
import Modal from "./Modal";
import { getColorValue } from "../../types/colors";
import Logo from "../Icons/Logo";

const color_logo = getColorValue("blanco");

export default function MobileNav({}) {
    const [isOpen, setIsOpen] = useState(false);

    return <motion.div className="flex flex-row text-2xl w-full overflow-hidden h-full items-center px-10">
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="w-24">
            <Logo color={color_logo} />
        </div>

        <div className="h-full w-full flex flex-row justify-end items-center">
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </motion.div>
}