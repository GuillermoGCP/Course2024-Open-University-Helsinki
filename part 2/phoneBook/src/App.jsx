import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '555-323-333' },
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const newNameHandler = (e) => {
        e.preventDefault()
        if (
            persons.some(
                (person) =>
                    person.name === newName || person.number === newNumber
            )
        ) {
            const duplicateField = persons.some(
                (person) => person.name === newName
            )
                ? newName
                : newNumber
            alert(`${duplicateField} is already added to phonebook`)
            setNewName('')
            setNewNumber('')
            return
        }

        setPersons([...persons, { name: newName, number: newNumber }])
        setNewName('')
        setNewNumber('')
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={newNameHandler}>
                <div>
                    name:
                    <input
                        type='text'
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div>
                    number:
                    <input
                        type='text'
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <h2>{newName}</h2>
            {persons.map((person) => (
                <div
                    key={person.name}
                >{`${person.name}: ${person.number}`}</div>
            ))}
        </div>
    )
}

export default App
