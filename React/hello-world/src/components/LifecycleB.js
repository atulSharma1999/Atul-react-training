import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Atul'
        }
        console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDiDMount')
     }
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
        }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log('LifecycleB getSnapshotBeforeUpdate')
            return null
        } 
   
    componentDidUpdate() {
            console.log('LifecycleB componentDidUpdate')
        }
       
        render() {
        console.log('LifecycleB render')
        return <div>Lifecycle B</div>
    }
}

export default LifecycleB