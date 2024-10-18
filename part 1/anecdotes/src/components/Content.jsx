import Button from './Button'
import PrintAnectode from './PrintAnectode'

const Content = ({ anecdotes, selected, setSelected }) => {
    const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length)
    const handleClick = () => {
        const randomIndex = getRandomIndex()
        setSelected(randomIndex)
    }
    return (
        <section>
            <PrintAnectode anecdote={anecdotes[selected]} />
            <Button handle={handleClick} text={'Next anectote'} />
        </section>
    )
}
export default Content
