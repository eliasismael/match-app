import React from "react";

function FindCoupleButton(props) {
    const [buttonClicked, setButtonClicked] = React.useState(false);

    const searchForCouples = () => {
        if (props.matchesSearched)
            return props.setResultText("Ya se buscaron matches");
        if (!props.menHaveChosen && !props.womenHaveChosen)
            return props.setResultText("No se eligieron parejas");
        if (!props.menHaveChosen)
            return props.setResultText("Los hombres no eligieron pareja");
        if (!props.womenHaveChosen)
            return props.setResultText("Las mujeres no eligieron pareja");

        props.setMatchesText("");
        window.scrollBy(0, 1000);

        let choosers = Object.keys(props.coupleSelected);
        let chosens = Object.values(props.coupleSelected);

        props.setResultText("Buscando matches...");

        let couples = false;
        setTimeout(() => {
            let matchesString = "";

            for (let i = 0; i < choosers.length; i++) {
                matchesString += `💘 ${choosers[i]} eligió a ${chosens[i]} `;
            }

            props.setMatchesText(matchesString);

            props.setResultText("");
            let resultString = "";

            props.men.map((man) => {
                /*
                        If "Ana" is the key for "Marcos"...
                            person.name = "Ana"
                            - props.coupleSelected[person.name] === "Marcos"

                        ...we verify if "Marcos" is the key for "Ana":
                            - pr ops.coupleSelected[ props.coupleSelected[person.name] ] === "Ana"

                        Notice that do that would be the same thing that do this:
                            - props.coupleSelected[ "Marcos" ] === "Ana"
                    */

                if (
                    man.name ===
                    props.coupleSelected[props.coupleSelected[man.name]]
                ) {
                    couples = true;
                    resultString += `💞 Hay match entre ${man.name} y ${
                        props.coupleSelected[man.name]
                    } 💞`;
                }
            });

            props.setResultText(resultString);

            if (!couples) {
                props.setResultText("No hay matches 💔");
            }

            window.scrollBy(0, 1000);
        }, 3000);

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
