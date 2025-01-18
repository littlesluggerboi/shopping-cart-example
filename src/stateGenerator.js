import { useState } from "react"

const StateGenerator = (initialValue = 0) =>{
    const [state, setState] =  useState(initialValue);
    return [state, setState];
}

export default StateGenerator;