import Part from './Part'

const Content = ({ parts }) => {
    return (
        <>
            <Part part={parts[0].name} />
            <Part part={parts[1].name} />
            <Part part={parts[2].name} />
        </>
    )
}
export default Content
