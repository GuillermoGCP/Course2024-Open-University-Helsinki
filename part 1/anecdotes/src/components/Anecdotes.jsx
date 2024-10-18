import { useEffect } from 'react'
import Button from './Button'
import VoteBox from './VoteBox'
import PrintAnecdote from './printAnecdote'

const Anecdotes = ({
    anecdotes,
    selected,
    setSelected,
    setVotes,
    votes,
    setMostVoted,
    mostVoted,
}) => {
    const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length)

    const getRandomAnecdote = () => {
        let randomIndex = getRandomIndex()
        while (randomIndex === selected) {
            randomIndex = getRandomIndex()
        }
        setSelected(randomIndex)
    }
    useEffect(() => {
        const getMostVotedIndex = () => {
            let index
            let maxVotes = 0
            Object.entries(votes).forEach(([key, value]) => {
                if (value > maxVotes) {
                    ;(index = key), (maxVotes = value)
                }
            })
            setMostVoted(index)
        }
        getMostVotedIndex()
    }, [votes])

    return (
        <section>
            <article>
                <h1>Anecdote of the day</h1>
                <PrintAnecdote anecdote={anecdotes[selected]} />
                <VoteBox
                    votes={votes}
                    selected={selected}
                    setVotes={setVotes}
                />
                <Button handle={getRandomAnecdote} text={'Next anectote'} />
            </article>
            {mostVoted && (
                <div>
                    <h1>Anecdote with most votes</h1>
                    <PrintAnecdote anecdote={anecdotes[mostVoted]} />
                </div>
            )}
        </section>
    )
}
export default Anecdotes
