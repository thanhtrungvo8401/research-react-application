import { useEffect, useRef } from "react";

export function useMemoCompare(next, compare) {
    const prevRef = useRef();

    const prev = prevRef.current;

    const isEqual = compare(prev, next);

    useEffect(() => {
        if (!isEqual) {
            prevRef.current = next;
        }
    })

    return isEqual ? prev : next;
}