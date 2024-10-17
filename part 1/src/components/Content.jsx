import Part from './Part'

const Content = ({ part1, part2, part3 }) => {
    return (
        <>
            <Part content={part1.name} />
            <Part content={part2.name} />
            <Part content={part3.name} />
        </>
    )
}
export default Content
