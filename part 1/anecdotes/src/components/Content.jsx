import Button from './Button'
import Anecdotes from './Anecdotes'

const Content = ({
    anecdotes,
    selected,
    setSelected,
    setVotes,
    votes,
    mostVoted,
    setMostVoted,
}) => {
    return (
        <main>
            <Anecdotes
                anecdotes={anecdotes}
                selected={selected}
                setSelected={setSelected}
                setVotes={setVotes}
                votes={votes}
                mostVoted={mostVoted}
                setMostVoted={setMostVoted}
            />
        </main>
    )
}
export default Content
