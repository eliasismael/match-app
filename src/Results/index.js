import "./index.css";

function Results(props) {
    return (
        <section className="Results">
            <div className="Results-matches">{props.matchesText}</div>
            <div className="Result-msg">{props.resultText}</div>
        </section>
    );
}
export default Results;
