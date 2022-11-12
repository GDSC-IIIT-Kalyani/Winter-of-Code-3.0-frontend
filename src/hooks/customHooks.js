import { useEffect } from "react";
import { useState } from "react"


export const useScroll = () => {
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPos(pos);
        console.log(pos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return {scrollPos}
}