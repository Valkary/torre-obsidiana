import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = {
    isOpen: boolean;
    setIsOpen: (x: boolean) => void;
}

export default function HamburgerButton({ isOpen, setIsOpen }: Props) {
    const topBarControls = useAnimationControls();
    const middleBarControls = useAnimationControls();
    const bottomBarControls = useAnimationControls();

    const handleClick = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            topBarControls.start({
                rotate: 45,
                y: "300%",
                scale: 0.8
            });
            middleBarControls.start({
                x: "200%",
                opacity: 0
            });
            bottomBarControls.start({
                rotate: -45,
                y: "-300%",
                x: 0,
                scale: 0.8,
                scaleX: 1
            });
        } else {
            topBarControls.start({
                rotate: 0,
                y: 0,
                scale: 1
            });
            middleBarControls.start({
                x: "10%",
                opacity: 1,
                scaleX: 0.8,
            });
            bottomBarControls.start({
                rotate: 0,
                y: 0,
                x: "20%",
                scale: 1,
                scaleX: 0.6, 
            });
        }
    }, [isOpen]);

    return <motion.button className="block lg:hidden z-30 overflow-hidden" onClick={handleClick}>
        <motion.div className="w-[40px] h-[4px] my-2 bg-white" animate={topBarControls} />
        <motion.div className="w-[40px] h-[4px] my-2 bg-white" animate={middleBarControls} />
        <motion.div className="w-[40px] h-[4px] my-2 bg-white" animate={bottomBarControls} />
    </motion.button>
}