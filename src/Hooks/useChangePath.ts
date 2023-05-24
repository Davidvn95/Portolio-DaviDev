'use client'
import { useEffect } from "react";

export default function useChangePath(id:string) {
    const changePath = () => {
        const element = document.getElementById(id);
        const rect = element?.getBoundingClientRect();
        if (rect) {
            const inView = rect?.top >= 0 && rect?.bottom <= window.innerHeight

            if (inView) {
                window.history.replaceState(null, '', `#${id}`)
            }
        }
        
    };

    useEffect(() => { 
        window.addEventListener('scroll', changePath);
        return () => window.removeEventListener('scroll', changePath);
    },[])
}