import { useState } from 'react'
import Filter from './components/Filter'
import NewContactForm from './components/newContactForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '555-323-333' },
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <section>
            <h2>Phonebook</h2>
            <Filter setFilter={setFilter} />
            <h3>Add a new contact</h3>
            <NewContactForm
                setNewNumber={setNewNumber}
                setNewName={setNewName}
                setPersons={setPersons}
                newName={newName}
                newNumber={newNumber}
                persons={persons}
            />
            <h3>Contacs</h3>
            <Persons filteredPersons={filteredPersons} />
        </section>
    )
}

export default App
