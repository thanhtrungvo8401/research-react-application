import { useCallback, useEffect, useState } from "react"

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        console.count("RENDER IN TOGGLE");
    })

    // / Define and memorize toggler function in case we pass down the component,
    const toggle = useCallback(() => setState((state) => !state), [])

    return [state, toggle]
}