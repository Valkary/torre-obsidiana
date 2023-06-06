import { Suspense, lazy } from "react"
import useWindowSize from "../../hooks/useWindowSize";

export default function Navbar({}) {
    const [width, _] = useWindowSize();

    const MobileNav = lazy(() => import('./MobileNav'));
    const WebNav = lazy(() => import('./WebNav'));

    const Nav = width < 800 ?
        <MobileNav /> :
        <WebNav />; 

    return <Suspense>
        <div  className="top-0 left-0 w-full h-[15vh] bg-cafe bnparadox">
            {Nav}
        </div>
    </Suspense>
}