import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
    const [newName, setNewName] = useState('')

    const newNameHandler = (e) => {
        e.preventDefault()
        if (persons.some((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            return
        }
        setPersons([...persons, { name: newName }])
        setNewName('')
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
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <h2>{newName}</h2>
            {persons.map((person) => (
                <div key={person.name}>{person.name}</div>
            ))}
        </div>
    )
}

export default App
