import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function InLine() {
    return (
        <div>
            <h1 clssName='error'>Error</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default InLine
