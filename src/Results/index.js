import { useMyContext } from "../Context";
import "./index.css";

function Results() {
    const { resultText, matchesText } = useMyContext();

    return (
        <section className="Results">
            <div className="Results-matches">{matchesText}</div>
            <div className="Result-msg">{resultText}</div>
        </section>
    );
}
export { Results };
