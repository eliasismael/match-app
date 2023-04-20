import { useMyContext } from "../Context";
import { useState } from "react";
import "./index.css";

function AddUser() {
    const { men, women, setPersonsAdded } = useMyContext();
    const [addingUser, setAddingUser] = useState(false);

    const onClickHandle = () => {
        addingUser ? setAddingUser(false) : setAddingUser(true);
    };

    const addPerson = () => {
        const name = document.getElementById("name");
        const img = document.getElementById("user-img");
        const gender = document.getElementById("gender");
        const presentation = document.getElementById("presentation");

        // If there is no image or name the person isn't added
        if (
            !name.value ||
            Array.from(name.value).every((char) => char === " ") ||
            !img.files[0]
        ) {
            return;
        }

        const file = img.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener("load", () => {
            // Add the properties for the corresponind gender
            const arrGender = gender.value === "Maculino" ? men : women;

            arrGender.push({
                name: name.value,
                src: reader.result,
                presentation: presentation.value,
            });

            // Change state each time a person is added to re-render the component
            setPersonsAdded((curentValue) => curentValue + 1);
        });
    };

    return (
        <div>
            <button className="AddUser" onClick={onClickHandle}>
                +
            </button>

            {addingUser && (
                <div className="Add-user__modal">
                    <div className="Add-user__modal__content">
                        <form className="form-add-user">
                            <label htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Nombre de la persona"
                            />

                            <label htmlFor="user-img">Imágen:</label>
                            <input
                                type="file"
                                id="user-img"
                                placeholder="Hola"
                            />

                            <label htmlFor="gender">Género:</label>

                            <select id="gender">
                                <option value={"Maculino"}>Maculino</option>
                                <option value={"Femenino"}>Femenino</option>
                            </select>

                            <label htmlFor="presentation">Presentación:</label>
                            <textarea
                                id="presentation"
                                className="presentation"
                                placeholder="Añade una presnetación"></textarea>

                            <div className="Add-user__modal__buttons">
                                <button
                                    id="btn__add-person"
                                    className="btn__add-person"
                                    type="submit"
                                    onClick={(evt) => {
                                        evt.preventDefault();
                                        addPerson();
                                    }}>
                                    Añadir persona
                                </button>

                                <button onClick={onClickHandle}>Volver</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export { AddUser };
