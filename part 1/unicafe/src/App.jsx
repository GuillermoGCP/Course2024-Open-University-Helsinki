import { useState } from 'react'
import Header from '../src/components/Header'
import Content from './components/Content'

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const headerText = 'Give feedback'
    return (
        <>
            <Header headerText={headerText} />
            <main>
                <Content
                    good={good}
                    setGood={setGood}
                    neutral={neutral}
                    setNeutral={setNeutral}
                    bad={bad}
                    setBad={setBad}
                />
            </main>
        </>
    )
}

export default App
