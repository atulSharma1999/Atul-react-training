import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           isloggedIn: true
        }
    }
    
    render() {

         return this.state.isLoggedIn && <div>Welcome Atul</div>
        
        // return this.state.isloggedIn ? (
        //     <div>Welcome Atul</div> 
        // ) :(
        //     <div>Welcome Guest</div>
        // )

        // let message
        // if(this.state.isloggedIn) {
        //     message = <div>Welcome Atul</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        //  return <div>{message}</div>
        
         // if (this.state.isloggedIn) {
        //     return <div>Welcome Atul</div>
        //     } else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Atul</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // ) 
        }
}

export default UserGreeting
