import { useEffect, useState } from "react";
import { useMyContext } from "../Context";

import "./index.css";

function FindCoupleButton() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const {
        men,
        menHaveChosen,
        womenHaveChosen,
        resultText,
        setResultText,
        setMatchesText,
        coupleSelected,
        matchesSearched,
        setMatchesSearched,
    } = useMyContext();

    const searchForCouples = () => {
        // RETURN CONDITIONS
        if (matchesSearched) return setResultText("Ya se buscaron matches");

        if (!menHaveChosen && !womenHaveChosen) {
            window.scrollBy(0, 1000);
            return setResultText("No se eligieron parejas");
        }

        if (!menHaveChosen) {
            window.scrollBy(0, 1000);
            return setResultText("Los hombres no eligieron pareja");
        }

        if (!womenHaveChosen) {
            window.scrollBy(0, 1000);
            return setResultText("Las mujeres no eligieron pareja");
        }

        // Show message while searching for matches
        setResultText("Buscando matches...");

        let choosers = Object.keys(coupleSelected);
        let chosens = Object.values(coupleSelected);
        let thereAreCouples = false;

        setTimeout(() => {
            // Show which person each chose
            const addElections = () => {
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
            };

            const electionsResults = addElections();
            setMatchesText(electionsResults);

            const addMatches = () => {
                let resultString = [];
                men.forEach((man) => {
                    /* If "Marcos" is the key for "Ana"...
                            person.name = "Marcos"
                            - .coupleSelected[person.name] === "Ana"

                        ...we verify if "Ana" is the key for "Marcos":
                            - .coupleSelected[ .coupleSelected[person.name] ] === "Marcos"

                        Notice that do that would be the same thing as doing this:
                            - .coupleSelected[ "Ana" ] === "Marcos" */

                    if (man.name === coupleSelected[coupleSelected[man.name]]) {
                        thereAreCouples = true;
                        resultString.push(
                            `💞 Hay match entre ${man.name} y ${
                                coupleSelected[man.name]
                            } 💞`
                        );
                    }
                });

                return (
                    <div>
                        {thereAreCouples && (
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

                        {!thereAreCouples && (
                            <ul style={{ listStyleType: "none" }}>
                                <li>No hay matches 💔</li>
                            </ul>
                        )}
                    </div>
                );
            };

            const matches = addMatches();
            setResultText(matches);
        }, 3000);

        // Show that the button has already been pressed
        setButtonClicked(true);
        setMatchesSearched(true);
        window.scrollBy(0, 10000);
    };

    // GO SOWN WHEN THE RESULTS ARE READY
    useEffect(() => {
        window.scrollBy(0, 10000);
    }, [resultText]);

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

export { FindCoupleButton };
