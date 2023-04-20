import React, { useContext, useState } from "react";

import { men, women } from "../utils/persons";
import { textsForMen, textsForWomen } from "../utils/presentations";

const Context = React.createContext();

function ContextProvider(props) {
    const [menHaveChosen, setMenHaveChosen] = useState(false);
    const [womenHaveChosen, setWomenHaveChosen] = useState(false);
    const [resultText, setResultText] = useState("");
    const [matchesText, setMatchesText] = useState("");
    const [coupleSelected, setCoupleSelected] = useState({});
    const [matchesSearched, setMatchesSearched] = useState(false);
    const [personsAdded, setPersonsAdded] = useState(0);

    return (
        <Context.Provider
            value={{
                men,
                women,
                personsAdded,
                setPersonsAdded,
                textsForMen,
                textsForWomen,
                menHaveChosen,
                setMenHaveChosen,
                womenHaveChosen,
                setWomenHaveChosen,
                setResultText,
                setCoupleSelected,
                setMatchesText,
                coupleSelected,
                matchesSearched,
                setMatchesSearched,
                resultText,
                matchesText,
            }}>
            {props.children}
        </Context.Provider>
    );
}

function useMyContext() {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useMyContext must be used within a ContextProvider ");
    }

    return context;
}

export { Context, ContextProvider, useMyContext };
