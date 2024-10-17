import Button from './Button'
import Statictis from './Statictis'

const Content = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
    return (
        <section>
            <Button state={good} handle={setGood} text={'Good'} />
            <Button state={neutral} handle={setNeutral} text={'Neutral'} />
            <Button state={bad} handle={setBad} text={'Bad'} />
            <Statictis good={good} neutral={neutral} bad={bad} />
        </section>
    )
}
export default Content
