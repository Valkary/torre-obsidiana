import MobileNav from "./MobileNav";
import WebNav from "./WebNav";
import useWindowSize from "../../hooks/useWindowSize";

export default function Navbar({}) {
    const [width, _] = useWindowSize();

    const Nav = width < 800 ?
        <MobileNav /> :
        <WebNav />; 

    return <div className="top-0 left-0 w-full h-[15vh] bg-cafe bnparadox">
        {Nav}
    </div>
}