import { useEffect, useRef } from "react"

export const usePrevious = (nextState) => {
    const prevRef = useRef(null);

    useEffect(() => {
        prevRef.current = nextState;
    })

    return prevRef.current;
}