import Part from './Part'

const Content = ({ content }) => {
    const part1 = content.part1 + content.exercises1
    const part2 = content.part2 + content.exercises2
    const part3 = content.part3 + content.exercises3

    return (
        <>
            <Part content={part1} />
            <Part content={part2} />
            <Part content={part3} />
        </>
    )
}
export default Content
