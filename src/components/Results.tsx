type ResultPropsType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Results = (props: ResultPropsType) => {
    return(
        <div>
            {props.results.cityName && <div>{props.results.cityName}</div>}
            {props.results.country && <div>{props.results.temperature}<span>℃</span></div>}
            {props.results.conditionText &&
            <div>
                <img src={props.results.icon} alt="icon" />
                <span>{props.results.conditionText}</span>
            </div>
            }
        </div>
    );
};
export default Results;