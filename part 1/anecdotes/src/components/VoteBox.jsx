import Button from './Button'

const VoteBox = ({ votes, selected, setVotes }) => {
    const voteHandler = () => {
        setVotes({ ...votes, [selected]: votes[selected] + 1 || 1 })
    }
    return (
        <>
            <p>{`has ${votes[selected] || 0} votes`}</p>
            <Button handle={voteHandler} text={'Vote'} />
        </>
    )
}
export default VoteBox
