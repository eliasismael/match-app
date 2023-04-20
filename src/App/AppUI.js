import React from "react";
import { ImagesSection } from "../ImagesSection";
import { ImagePart } from "../ImagePart";
import { ButtonChooseCouple } from "../ButtonChooseCouple";
import { FindCoupleButton } from "../FindCoupleButton";
import { AddUser } from "../AddUser";
import { Results } from "../Results";
import { useMyContext } from "../Context";

function AppUI() {
    const { men, women, textsForMen, textsForWomen } = useMyContext();

    return (
        <React.Fragment>
            <header>
                <h1>Find your love!</h1>
            </header>

            <main>
                <ImagesSection>
                    {men.map((man) => (
                        <ImagePart
                            key={men.indexOf(man)}
                            name={man.name}
                            src={man.src}
                            presentation={man.presentation}
                            textsForMen={textsForMen}
                        />
                    ))}
                </ImagesSection>
                <ButtonChooseCouple choosers={men} chosens={women} />
                <ImagesSection>
                    {women.map((woman) => (
                        <ImagePart
                            key={women.indexOf(woman)}
                            name={woman.name}
                            src={woman.src}
                            presentation={woman.presentation}
                            textsForWomen={textsForWomen}
                        />
                    ))}
                </ImagesSection>
                <ButtonChooseCouple choosers={women} chosens={men} />

                <FindCoupleButton />

                <Results />

                <AddUser />
            </main>

            <footer>
                <p>Made by Elías Pereyra</p>
                <p>Todos los derechos reservados</p>
            </footer>
        </React.Fragment>
    );
}

export default AppUI;
