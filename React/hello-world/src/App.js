import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

class App extends Component {
  render() {
  return (
    <div className="App">
      <RefsDemo /> 
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 clssName='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/*<UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message />  */}
    {/* <Greet name="Bruce"  heroName="Batman">
       <p>This is children props</p> 
    </Greet>
    <Greet name="Clark"  heroName="Superman">
        <button>Action</button>
  </Greet> */}
    {/* <Greet name="Diana"  heroName="Wonder woman" />
    <Welcome name="Bruce"  heroName="Batman"/> */}
      {/* <Welcome name="Clark"  heroName="Superman" />
      <Welcome name="Diana"  heroName="Wonder woman"/>  */}
    {/* <Hello /> */}
       </div>
   );
}
}


export default App;
