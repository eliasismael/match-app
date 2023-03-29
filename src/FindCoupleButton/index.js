import React from "react";
import Results from "../Results";
import "./index.css";

function FindCoupleButton(props) {
    const [buttonClicked, setButtonClicked] = React.useState(false);

    const searchForCouples = () => {
        // Check if matches have already been searched
        if (props.matchesSearched)
            return props.setResultText("Ya se buscaron matches");

        // Check if men and women have chosen their couple
        if (!props.menHaveChosen && !props.womenHaveChosen)
            return props.setResultText("No se eligieron parejas");
        if (!props.menHaveChosen)
            return props.setResultText("Los hombres no eligieron pareja");
        if (!props.womenHaveChosen)
            return props.setResultText("Las mujeres no eligieron pareja");

        // Clear previous text and scroll to the results
        props.setMatchesText("");
        window.scrollBy(0, 1000);

        // Show message while searching for matches
        props.setResultText("Buscando matches...");

        let choosers = Object.keys(props.coupleSelected);
        let chosens = Object.values(props.coupleSelected);

        // Variable to know if there are matcehs
        let couples = false;

        setTimeout(() => {
            // Show which person each chose

            function addElections() {
                let matchesString = [];
                for (let i = 0; i < choosers.length; i++) {
                    matchesString.push(
                        `💘 ${choosers[i]} eligió a ${chosens[i]}`
                    );
                }

                return (
                    <div>
                        <ul style={{ listStyleType: "none" }}>
                            {matchesString.map((e) => {
                                return (
                                    <li key={`${matchesString.indexOf(e)}`}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            }

            props.setMatchesText(addElections());

            // Clear previous message and show results or "no matches"
            // props.setResultText("");

            function addMatches() {
                let resultString = [];
                props.men.map((man) => {
                    /* If "Marcos" is the key for "Ana"...
                            person.name = "Marcos"
                            - props.coupleSelected[person.name] === "Ana"

                        ...we verify if "Ana" is the key for "Marcos":
                            - props.coupleSelected[ props.coupleSelected[person.name] ] === "Marcos"

                        Notice that do that would be the same thing as doing this:
                            - props.coupleSelected[ "Ana" ] === "Marcos" */

                    if (
                        man.name ===
                        props.coupleSelected[props.coupleSelected[man.name]]
                    ) {
                        couples = true;
                        resultString.push(
                            `💞 Hay match entre ${man.name} y ${
                                props.coupleSelected[man.name]
                            } 💞`
                        );
                    }
                });

                window.scrollBy(0, 1000);

                return (
                    <div>
                        {couples && (
                            <ul style={{ listStyleType: "none" }}>
                                {resultString.map((e) => {
                                    return (
                                        <li key={`${resultString.indexOf(e)}`}>
                                            {e}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}

                        {!couples && (
                            <ul style={{ listStyleType: "none" }}>
                                <li>No hay matches 💔</li>
                            </ul>
                        )}
                    </div>
                );
            }

            props.setResultText(addMatches());
        }, 3000);

        window.scrollBy(0, 1000);

        // Show that the button has already been pressed
        setButtonClicked(true);
        props.setMatchesSearched(true);
    };

    return (
        <button
            className={`FindCouplesButton__button ${
                buttonClicked && "buttonCliked"
            }`}
            onClick={searchForCouples}>
            Buscar matches
        </button>
    );
}

export default FindCoupleButton;
