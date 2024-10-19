import React from 'react'
import personsService from '../services/personsService'

const NewContactForm = ({
    setNewName,
    setNewNumber,
    setPersons,
    newNumber,
    newName,
    persons,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if (persons.some((person) => person.name === newName)) {
            const userResponse = window.confirm(
                `${newName} is already added to phonebook, replace the old number with a new one?`
            )
            if (!userResponse) {
                setNewName('')
                setNewNumber('')
                return
            } else {
                personsService
                    .update(
                        persons.find((person) => person.name === newName).id,
                        {
                            name: newName,
                            number: newNumber,
                        }
                    )
                    .then((updatedPerson) => {
                        setPersons(
                            persons.map((person) =>
                                person.id === updatedPerson.id
                                    ? updatedPerson
                                    : person
                            )
                        )
                        setNewName('')
                        setNewNumber('')
                    })
                    .catch((error) => {
                        console.error(error)
                        alert(`Error updating ${newName}'s contact`)
                    })
                return
            }
        }

        personsService
            .create({ name: newName, number: newNumber })
            .then((newPerson) => {
                setPersons(persons.concat(newPerson))
                setNewName('')
                setNewNumber('')
            })
    }
    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default NewContactForm
