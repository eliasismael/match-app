function Results(props) {
    return (
        <section className="Results">
            <p className="Results-matches">{props.matchesText}</p>
            <p className="Result-msg">{props.resultText}</p>
        </section>
    );
}
export default Results;
