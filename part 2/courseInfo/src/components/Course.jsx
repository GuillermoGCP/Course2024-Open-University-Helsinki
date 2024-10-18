import Header from '../components/Header'
import Content from '../components/Content'
import Total from './Total'

const Course = ({ course, totalExercises }) => {
    return (
        <>
            <Header courseName={course.name} />
            <Content parts={course.parts} totalExercises={totalExercises} />
            <Total totalExercises={totalExercises} />
        </>
    )
}

export default Course
