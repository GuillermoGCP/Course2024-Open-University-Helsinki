const Statictis = ({ good, neutral, bad }) => {
    const totalAverage = () => {
        const total = good + neutral + bad
        const points = good - bad
        if (total === 0) return 0
        return points / total
    }
    const positiveAverage = () => {
        const total = good + neutral + bad
        if (total === 0) return 0
        return (good / total) * 100
    }
    return (
        <>
            <p>{`Good: ${good}`}</p>
            <p>{`Neutral: ${neutral}`}</p>
            <p>{`Bad: ${bad}`}</p>
            <p>{`All: ${bad + neutral + good}`}</p>
            <p>{`Average: ${totalAverage()}`}</p>
            <p>{`Positive: ${positiveAverage()} %`}</p>
        </>
    )
}
export default Statictis
