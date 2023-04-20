import { useEffect, useState } from "react";
import "./index.css";

function ImagePart({
    name,
    src,
    alt,
    presentation,
    textsForMen,
    textsForWomen,
}) {
    const [finalPresentation, setFinalPresentation] = useState("");
    const [presentationIsVisible, setPresentationIsVisible] = useState(false);

    const createPresentation = () => {
        // Determinete if we must create a presentation for a men or women
        const texts = textsForMen ? textsForMen : textsForWomen;

        let presentation = "";
        for (const key in texts) {
            const array = texts[key];
            const randomIndex = Math.floor(Math.random() * array.length);
            presentation += array[randomIndex];
        }

        setFinalPresentation(presentation);
    };

    // This is for avoid creating a new presentation each time the presentation become visible
    useEffect(() => {
        createPresentation();
    }, []);

    return (
        <figure className="ImagePart__figure">
            <img
                className="ImagePart__figure__img"
                src={src}
                alt={`Imágen de ${name}`}
                onClick={() => setPresentationIsVisible(true)}
            />
            <figcaption className="ImagePart__figure__figcaption">
                {name}

                {/* Add a modal to view each person's presentation  */}
                {presentationIsVisible && (
                    <div className="modal">
                        <div className="modal__content">
                            <img src={src} alt={alt}></img>
                            <p className="name">{name}</p>
                            <p className="presentation">
                                {presentation || finalPresentation}
                            </p>

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

export { ImagePart };
