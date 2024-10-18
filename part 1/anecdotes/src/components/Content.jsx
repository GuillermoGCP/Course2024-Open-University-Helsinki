import Button from './Button'
import Anecdotes from './Anecdotes'

const Content = ({ anecdotes, selected, setSelected, setVotes, votes }) => {
    return (
        <main>
            <Anecdotes
                anecdotes={anecdotes}
                selected={selected}
                setSelected={setSelected}
                setVotes={setVotes}
                votes={votes}
            />
        </main>
    )
}
export default Content
