import { motion, useAnimationControls } from "framer-motion";
import LogoCompleto from "../Icons/LogoCompleto";
import { getColorValue } from "../../types/colors";
import { main_nav_links } from "../../types/links";

const logo_color = getColorValue("blanco");
const hover_rect_animations = {
    initial: {
        x: 0,
        y: 0,
        opacity: 0,
    },

    move: (new_x: number) => ({
        x: new_x,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    })
}

export default function WebNav({}) {
    const hoverRectControls = useAnimationControls();

    function updateHover(rect: HTMLAnchorElement) {
        const link_x = rect.getBoundingClientRect().x;

        if (!rect.parentElement) return;

        const { x, width } = rect.parentElement.getBoundingClientRect();
        const x_offset = link_x - x + (width/6);
        hoverRectControls.start(hover_rect_animations.move(x_offset)); 
    }

    return <motion.div className="flex flex-row max-h-full overflow-hidden h-full items-center text-lg">
        <motion.div
            initial={{
                x: "-100%",
                opacity: 0,
                scale: 0
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 0.3
            }}
            className="h-full w-1/4"
        >
            <LogoCompleto  color={logo_color} />
        </motion.div>

        <div className="flex-grow flex flex-row justify-end h-full">
            <motion.div 
                className="w-[12.5%] h-full left-0 border-b-[6px] border-b-blanco"
                animate={hoverRectControls}
                initial={hover_rect_animations.initial}
            />
            <motion.div className="w-3/4 h-full flex flex-row items-center">
                {main_nav_links.map(({ name, url }, idx) => (
                    <motion.a
                        className=" w-[16.6%] h-full flex items-center justify-center"
                        href={url}
                        key={name}
                        initial={{
                            y: "-100%"
                        }}
                        animate={{
                            y: 0,
                            transition: {
                                duration: idx * 0.15
                            }
                        }}
                        onMouseEnter={(e) => updateHover(e.currentTarget)}
                    >
                        {name}
                    </motion.a>
                ))
                }
            </motion.div>
        </div>

    </motion.div>
}