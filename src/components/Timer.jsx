import { useState, useEffect } from "react";

export default function Timer({ setStop, questionNumber }) {
    const [timer, setTimer] = useState(30);

    useEffect(()=>{
        if (timer === 0) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000);
        return () => clearInterval(interval)
    }); // every 1 second

    useEffect(() => {
        setTimer(30);
    }, [questionNumber]);
    return timer;
}
