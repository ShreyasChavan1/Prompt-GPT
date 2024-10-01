import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompts ,setRecentPrompts] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const onSent = async (prompt) =>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompts(input);
       const responce =  await run(input);
       setResultData(responce);
       setLoading(false);
       setInput("");
    }
    
    // onSent("what is MRN")
    

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        recentPrompts,
        setRecentPrompts,
        loading,
        showResult,
        resultData,
        onSent,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}
export default ContextProvider;