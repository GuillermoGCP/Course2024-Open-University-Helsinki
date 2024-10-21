import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import NewContactForm from './components/newContactForm'
import Persons from './components/Persons'
import personsService from './services/personsService'
import Notification from './components/Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [successMessage, setSuccessMessage] = useState(null)

    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    useEffect(() => {
        personsService.getAll().then((response) => setPersons(response))
    }, [])

    return (
        <section>
            <h2>Phonebook</h2>
            {successMessage && (
                <Notification message={successMessage} className={'success'} />
            )}
            <Filter setFilter={setFilter} />
            <h3>Add a new contact</h3>
            <NewContactForm
                setNewNumber={setNewNumber}
                setNewName={setNewName}
                setPersons={setPersons}
                newName={newName}
                newNumber={newNumber}
                persons={persons}
                setSuccessMessage={setSuccessMessage}
            />
            <h3>Contacs</h3>
            <Persons
                filteredPersons={filteredPersons}
                setPersons={setPersons}
            />
        </section>
    )
}

export default App
