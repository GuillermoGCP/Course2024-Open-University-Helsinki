import Header from '../components/Header'
import Content from '../components/Content'

const Course = ({ course }) => {
    return (
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course
