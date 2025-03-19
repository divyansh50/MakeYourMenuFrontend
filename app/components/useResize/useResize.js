'use client'
import { useState,useEffect } from "react";

const useResize=()=>{
    const [width,setWidth]=useState(undefined);
        useEffect(()=>{
            const handleResize=()=>{
                setWidth(window.innerWidth);
            }
            window.addEventListener("resize",handleResize);
            handleResize();
    
            return ()=>{window.removeEventListener("resize", handleResize);}
        },[])
    return(width);
}

export default useResize;