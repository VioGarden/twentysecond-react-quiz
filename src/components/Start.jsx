import {useRef} from "react";

export default function Start({setUsername}) {

    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
    <div className="start">
        <input 
        placeholder="enter your name" 
        className="startInput"
        />
        <button className="startButton">
            Start
        </button>
    </div>
  )
}
