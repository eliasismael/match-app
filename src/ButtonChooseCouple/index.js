import { useState } from "react";
import { useMyContext } from "../Context";
import "./index.css";

function ButtonChooseCouple({ choosers, chosens }) {
    const {
        men,
        women,
        menHaveChosen,
        setMenHaveChosen,
        womenHaveChosen,
        setWomenHaveChosen,
        setResultText,
        setCoupleSelected,
    } = useMyContext();

    const [buttonClicked, setButtonClicked] = useState(false);

    const chooseCouple = () => {
        if (menHaveChosen && womenHaveChosen)
            return setResultText("Ya se eligieron parejas");
        if (choosers === men && menHaveChosen)
            return setResultText("Los hombres ya eligieron pareja");
        if (choosers !== men && womenHaveChosen)
            return setResultText("Las mujeres ya eligieron pareja");

        choosers.forEach((choser) => {
            const randomChosen =
                chosens[Math.floor(Math.random() * chosens.length)];

            setCoupleSelected((prevState) => ({
                ...prevState,
                [choser.name]: randomChosen.name,
            }));
        });

        if (choosers === men) {
            setMenHaveChosen(true);
        } else if (choosers === women) {
            setWomenHaveChosen(true);
        }

        setButtonClicked(true);
    };

    return (
        <div className="ButtonChooseCouple">
            <button
                className={`ButtonChooseCouple__button ${
                    buttonClicked && "buttonCliked"
                }`}
                onClick={chooseCouple}>
                Elegir pareja
            </button>
        </div>
    );
}
export { ButtonChooseCouple };
