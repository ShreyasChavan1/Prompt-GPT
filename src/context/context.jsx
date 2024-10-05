import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../lib/firebase";

export const Context = createContext();

const ContextProvider = (props) => {
  // For generative AI
  const [input, setInput] = useState("");
  const [recentPrompts, setRecentPrompts] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Update prevPrompts to chatHistory
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // For login
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(false);

  // Managing user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Function to format response with bold and line breaks
  const formatResponse = (response) => {
    // Format double asterisks as bold
    const responseArray = response.split("**");
    let formattedResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 1) {
        formattedResponse += `<b>${responseArray[i]}</b>`;
      } else {
        formattedResponse += responseArray[i];
      }
    }
    // Replace single asterisks with line breaks
    return formattedResponse.split("*").join("<br>");
  };

  // Function to handle sending a prompt
  const onSent = async (prompt) => {
    const message = prompt || input;

    if (!message.trim()) {
      return;
    }

    // Clear previous result data and show the loading state
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompts(message);

    try {
      // Run the API call
      const response = await run(message);
      const formattedResponse = formatResponse(response);
      
      // Update result data
      setResultData(formattedResponse);

      // Update chat history
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { prompt: message, response: formattedResponse }
      ]);

    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
      setInput(""); // Clear the input after sending
    }
  };

  // Context value to be shared
  const contextValue = {
    chatHistory,
    setChatHistory,
    recentPrompts,
    setRecentPrompts,
    loading,
    showResult,
    resultData,
    onSent,
    input,
    setInput,
    user,
    setUser,
    email,
    setEmail,
    pass,
    setPass
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
