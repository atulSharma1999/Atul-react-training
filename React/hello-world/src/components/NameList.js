import React from 'react'

function NameList() {
    const persons = [
        {
            Id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            Id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            Id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]   
    
    const personList = persons.map(person => <Person person={person}  />)
    return <div>{personList}</div>
    }

export default NameList
