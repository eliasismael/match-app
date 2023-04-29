import React from "react";
import { UsersSection } from "../UsersSection";
import { User } from "../User";
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
                <UsersSection>
                    {men.map((man) => (
                        <User
                            key={men.indexOf(man)}
                            index={men.indexOf(man)}
                            name={man.name}
                            src={man.src}
                            presentation={man.presentation}
                            textsForMen={textsForMen}
                        />
                    ))}
                </UsersSection>

                <ButtonChooseCouple choosers={men} chosens={women} />

                <UsersSection>
                    {women.map((woman) => (
                        <User
                            key={women.indexOf(woman)}
                            index={women.indexOf(woman)}
                            name={woman.name}
                            src={woman.src}
                            presentation={woman.presentation}
                            textsForWomen={textsForWomen}
                        />
                    ))}
                </UsersSection>

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
