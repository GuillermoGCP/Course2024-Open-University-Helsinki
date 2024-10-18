import Content from '../components/Content'
import Total from './Total'

const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((acc, ite) => {
        return acc + ite.exercises
    }, 0)

    return (
        <>
            <h2>{course.name}</h2>
            <Content parts={course.parts} totalExercises={totalExercises} />
            <Total totalExercises={totalExercises} />
        </>
    )
}

export default Course
