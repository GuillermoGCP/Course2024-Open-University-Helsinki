import React from 'react'

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
