import StatictisLine from './StatisticLine'

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
        return `${(good / total) * 100}%`
    }
    return (
        <>
            {good || neutral || bad ? (
                <table>
                    <tbody>
                        <StatictisLine text='Good' value={good} />
                        <StatictisLine text='Neutral' value={neutral} />
                        <StatictisLine text='Bad' value={bad} />
                        <StatictisLine
                            text='All'
                            value={good + neutral + bad}
                        />
                        <StatictisLine text='Average' value={totalAverage()} />
                        <StatictisLine
                            text='Positive'
                            value={positiveAverage()}
                        />
                    </tbody>
                </table>
            ) : (
                <p>{'No feedback given'}</p>
            )}
        </>
    )
}
export default Statictis
