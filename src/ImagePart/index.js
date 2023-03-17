import React from "react";
import "./index.css";

function ImagePart(props) {
    const [finalPresentation, setFinalPresentation] = React.useState("");
    const [presentationCreated, setPresentationCreated] = React.useState(false);
    const [presentationIsVisible, setPresentationIsVisible] =
        React.useState(false);

    const showPresentation = () => {
        if (presentationCreated) {
            if (presentationIsVisible) {
                setPresentationIsVisible(false);
            } else {
                setPresentationIsVisible(true);
            }
            return;
        }

        const texts = props.textsForMen
            ? props.textsForMen
            : props.textsForWomen;

        let presentation = "";

        for (const key in texts) {
            const array = texts[key];
            const randomIndex = Math.floor(Math.random() * array.length);
            presentation += array[randomIndex];
        }

        setFinalPresentation(presentation);
        setPresentationCreated(true);
    };

    return (
        <figure className="ImagePart__figure">
            <img
                className="ImagePart__figure__img"
                src={props.src}
                alt={`Imágen de ${props.name}`}
                onClick={showPresentation}
            />
            <figcaption className="ImagePart__figure__figcaption">
                {props.name}

                {/* Add a modal to view each person's presentation */}
                {presentationIsVisible && (
                    <div className="modal">
                        <div className="modal__content">
                            <img src={props.src} alt={props.alt}></img>
                            <p className="name">{props.name}</p>
                            <p className="presentation">{finalPresentation}</p>
                            <div className="modal__buttons">
                                <button
                                    onClick={() =>
                                        setPresentationIsVisible(false)
                                    }>
                                    Volver
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </figcaption>
        </figure>
    );
}

export default ImagePart;
