import { useState } from "react";


function UseState(){
    // const [variableValue,setVariableValue] = useState('Initial Value');
    // const [inputValue,setInputValue] = useState('Input Value');
    const [styleValue,setStyleValue] = useState();
    // function handleClick(){
    //     setVariableValue("anas")
    // }
    return(
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
            {/* <h1>{variableValue}</h1>
            <button onClick={()=>setVariableValue("anas")}>Change Value</button> */}
            <h1 style={styleValue}>Change color</h1>
            <button onClick={()=>setStyleValue({backgroundColor:'red'})}>Change Color</button>
            <hr/>
            {/* <h1>{inputValue}</h1>
            <input onChange={(event)=>setInputValue(event.target.value)}/> */}
        </div>
    )
}
export default UseState;