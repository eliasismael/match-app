import React from "react";
import ImagesSection from "./ImagesSection";
import ImagePart from "./ImagePart";
import ButtonChooseCouple from "./ButtonChooseCouple";
import FindCoupleButton from "./FindCoupleButton";
import Results from "./Results";

import { men, women } from "./utils/persons";

import { textsForMen, textsForWomen } from "./utils/presentations";

function App() {
    const [menHaveChosen, setMenHaveChosen] = React.useState(false);
    const [womenHaveChosen, setWomenHaveChosen] = React.useState(false);
    const [resultText, setResultText] = React.useState("");
    const [matchesText, setMatchesText] = React.useState("");
    const [coupleSelected, setCoupleSelected] = React.useState({});
    const [matchesSearched, setMatchesSearched] = React.useState(false);

    return (
        <React.Fragment>
            <header>
                <h1>Find your love!</h1>
            </header>
            <main>
                <ImagesSection>
                    {men.map((man) => (
                        <ImagePart
                            name={man.name}
                            src={man.src}
                            textsForMen={textsForMen}
                        />
                    ))}
                </ImagesSection>

                <ButtonChooseCouple
                    men={men}
                    choosers={men}
                    chosens={women}
                    menHaveChosen={menHaveChosen}
                    setMenHaveChosen={setMenHaveChosen}
                    womenHaveChosen={womenHaveChosen}
                    setWomenHaveChosen={setWomenHaveChosen}
                    setResultText={setResultText}
                    setCoupleSelected={setCoupleSelected}
                />

                <ImagesSection>
                    {women.map((woman) => (
                        <ImagePart
                            name={woman.name}
                            src={woman.src}
                            textsForWomen={textsForWomen}
                        />
                    ))}
                </ImagesSection>

                <ButtonChooseCouple
                    men={men}
                    choosers={women}
                    chosens={men}
                    menHaveChosen={menHaveChosen}
                    setMenHaveChosen={setMenHaveChosen}
                    womenHaveChosen={womenHaveChosen}
                    setWomenHaveChosen={setWomenHaveChosen}
                    setResultText={setResultText}
                    setCoupleSelected={setCoupleSelected}
                />

                <FindCoupleButton
                    men={men} //
                    // women={women}
                    menHaveChosen={menHaveChosen} //
                    womenHaveChosen={womenHaveChosen} //
                    // resultText={resultText}
                    setResultText={setResultText} //
                    // matchesText={matchesText}
                    setMatchesText={setMatchesText} //
                    coupleSelected={coupleSelected} //
                    matchesSearched={matchesSearched} //
                    setMatchesSearched={setMatchesSearched} //
                />
                <Results resultText={resultText} matchesText={matchesText} />
            </main>
            <footer>
                <p>Made by Elías Pereyra</p>
                <p>Todos los derechos reservados</p>
            </footer>
        </React.Fragment>
    );
}

export default App;
