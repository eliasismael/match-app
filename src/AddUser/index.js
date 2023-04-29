import { useMyContext } from "../Context";
import { useEffect, useState } from "react";
import "./index.css";
import { useLocalStorage } from "../utils/useLocalStorage";

function AddUser() {
    const {
        men,
        women,
        setMen,
        setWomen,
        // setPersonsAdded
    } = useMyContext();

    const [addingUser, setAddingUser] = useState(false);

    const onClickHandle = () => {
        addingUser ? setAddingUser(false) : setAddingUser(true);
    };

    const addPerson = () => {
        // RETURN CONDITIONS
        if (!document.getElementById("user-img").files[0]) {
            return alert("Añade una imágen");
        }
        if (!document.getElementById("name").value) {
            return alert("Añade un nombre");
        }
        if (
            Array.from(document.getElementById("name").value).every(
                (char) => char === " "
            )
        ) {
            return alert("Añade un nombre válido");
        }
        if (
            men.some(
                (element) =>
                    element.name.toLowerCase() ===
                    String(
                        document
                            .getElementById("name")
                            .value.toLowerCase()
                            .split(" ")
                            .join("")
                    )
            ) ||
            women.some(
                (element) =>
                    element.name.toLowerCase() ===
                    String(
                        document
                            .getElementById("name")
                            .value.toLowerCase()
                            .split(" ")
                            .join("")
                    )
            )
        ) {
            return alert("Esa persona ya fue añadida");
        }

        // FUNCTION LOGIC
        const name = document.getElementById("name");
        const img = document.getElementById("user-img");
        const gender = document.getElementById("gender");
        const presentation = document.getElementById("presentation");

        // PROCESS THE DATA
        const file = img.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () => {
            const newUser = {
                name: name.value,
                src: reader.result,
                presentation: presentation.value,
            };

            if (gender.value === "Masculino") {
                setMen((currentValue) => [...currentValue, newUser]);
            } else if (gender.value === "Femenino") {
                setWomen((currentValue) => [...currentValue, newUser]);
            }
        });
    };

    useEffect(() => {}, [men, women]);

    return (
        <div>
            <button className="AddUser__button" onClick={onClickHandle}>
                <span>+</span>
            </button>

            {addingUser && (
                <div className="Add-user__modal">
                    <div className="Add-user__modal__content">
                        <form className="Add-user__modal__content__form">
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
                                <option value={"Masculino"}>Masculino</option>
                                <option value={"Femenino"}>Femenino</option>
                            </select>

                            <label htmlFor="presentation">Presentación:</label>
                            <textarea
                                id="presentation"
                                className="presentation"
                                placeholder="Añade una presnetación"></textarea>

                            <div className="Add-user__modal__content__buttons">
                                <button
                                    id="btn__add-person"
                                    className="btn__add-person"
                                    type="submit"
                                    onClick={(evt) => {
                                        evt.preventDefault();
                                        addPerson();
                                        // setAddingUser(false);
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
