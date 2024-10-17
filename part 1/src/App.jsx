import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Total from '../src/components/Total'

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10,
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7,
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14,
    }

    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3} />
            <Total
                part1={part1.exercises}
                part2={part2.exercises}
                part3={part3.exercises}
            />
        </div>
    )
}

export default App
