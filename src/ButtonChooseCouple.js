import React from "react";

function ButtonChooseCouple(props) {
    const [buttonClicked, setButtonClicked] = React.useState(false);

    const chooseCouple = () => {
        if (props.menHaveChosen && props.womenHaveChosen)
            return props.setResultText("Ya se eligieron parejas");
        if (props.choosers === props.men && props.menHaveChosen)
            return props.setResultText("Los hombres ya eligieron pareja");
        if (props.choosers !== props.men && props.womenHaveChosen)
            return props.setResultText("Las mujeres ya eligieron pareja");

        props.choosers.forEach((choser) => {
            const randomChosenIndex = Math.floor(
                Math.random() * props.chosens.length
            );

            props.setCoupleSelected((prevState) => ({
                ...prevState,
                [choser.name]: props.chosens[randomChosenIndex].name,
            }));
        });

        props.choosers === props.men
            ? props.setMenHaveChosen(true)
            : props.setWomenHaveChosen(true);

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
export default ButtonChooseCouple;
