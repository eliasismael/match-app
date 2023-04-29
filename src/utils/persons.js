import man1 from "../img/men/hombre1.jfif";
import man2 from "../img/men/hombre2.jfif";
import man3 from "../img/men/hombre3.jfif";
import man4 from "../img/men/hombre4.jfif";
import man5 from "../img/men/hombre5.jfif";

import woman1 from "../img/women/mujer1.jfif";
import woman2 from "../img/women/mujer2.jfif";
import woman3 from "../img/women/mujer3.jfif";
import woman4 from "../img/women/mujer4.jfif";
import woman5 from "../img/women/mujer5.jfif";

// const fs = require("fs");
// const ruta = "../img/men/";
// const imagenes = fs.readdirSync(ruta);
// console.log(imagenes);
// const men = [];

// const manNames = ["Tomás", "pepe", "papa", "pipi", "popo"];

// for (let i = 0; i < 5; i++) {
//     // const nombreImagen = imagenes[i].split(".")[0];
//     men.push({ name: manNames[i], src: ruta + imagenes[i] }); //[nombreImagen] = ruta + imagenes[i];
// }

// import { imgsMen } from "../img/men/imgsMen";

const menData = [
    {
        name: "Tomás",
        src: man1,
        presentation: null,
    },
    {
        name: "Nicolás",
        src: man2,
        presentation: null,
    },
    {
        name: "Juan",
        src: man3,
        presentation: null,
    },
    {
        name: "Lucas",
        src: man4,
        presentation: null,
    },
    {
        name: "Marcos",
        src: man5,
        presentation: null,
    },
];

const womenData = [
    {
        name: "Valentina",
        src: woman1,
        presentation: null,
    },
    {
        name: "Florencia",
        src: woman2,
        presentation: null,
    },
    {
        name: "María",
        src: woman3,
        presentation: null,
    },
    {
        name: "Sofía",
        src: woman4,
        presentation: null,
    },
    {
        name: "Agustina",
        src: woman5,
        presentation: null,
    },
];

export { menData, womenData };
