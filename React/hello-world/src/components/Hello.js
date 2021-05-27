import React from 'react'

const Hello = () => {
//     return (
//      <div className='dummyclass'>
//         <h1>Hello Atul</h1>
//      </div>
//     )
       return React.createElement(
           'div',
            {id: 'hello', className: 'dummyclass'}, 
            React.createElement('h1', null, 'Hello Atul'))
}

export default Hello