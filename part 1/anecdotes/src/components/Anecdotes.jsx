import Button from './Button'
import PrintAnectode from './PrintAnectode'
import VoteBox from './VoteBox'

const Anecdotes = ({ anecdotes, selected, setSelected, setVotes, votes }) => {
    const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length)

    const getRandomAnecdote = () => {
        let randomIndex = getRandomIndex()
        while (randomIndex === selected) {
            randomIndex = getRandomIndex()
        }
        setSelected(randomIndex)
    }

    return (
        <section>
            <PrintAnectode anecdote={anecdotes[selected]} />
            <VoteBox votes={votes} selected={selected} setVotes={setVotes} />
            <Button handle={getRandomAnecdote} text={'Next anectote'} />
        </section>
    )
}
export default Anecdotes
