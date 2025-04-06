import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import "./WhyUs.css"
import React from "react";

export function ContadorAnimado ({ inicio, fin, duracion}) {
    
    const contadorRef = useRef<HTMLElement | null>(null)

    //Custom hook de intersection observer para gestionar cuando un elemento esta dentro del viewport
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8
    })  

    //Animacion contador
    useEffect(() => {
        if (!inView || !contadorRef.current) return

        let incremento = fin / (duracion / 16)
        let contadorActual = inicio

        //intervalo del contador
        const intervalo = setInterval( () => {
            contadorActual += incremento
            if (contadorActual >= fin) {
                contadorActual = fin
                clearInterval(intervalo)
            }
            if (contadorRef.current) {  
                contadorRef.current.innerText = `+${Math.floor(contadorActual)}`
            }
        })

        //cleanup function
        return () => clearInterval(intervalo)
    }, [inView])

    return (
        <h3 
            ref={(el) => {ref(el); contadorRef.current = el}} 
            className={`contador ${inView ? "visible" : ""}`}
        >
            +{inicio}
        </h3>
    )
} 