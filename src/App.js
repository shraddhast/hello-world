import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline';
import Form from './components/Form';
import FragementDemo from './components/FragementDemo';
import Table from './components/Table';
 
class App extends Component{
  render() {
   return (
    <div className="App">
      <>
         <Counter  /> 
      {/* <Message />  */}
      {/* <Switch>

        <Route exact path = "/" component={Greet } />

 </Switch>
  */}
 
      {/* <Table />
      <FragementDemo /> 
      < Form />
      <Inline />
      <StyleSheet  primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick />*/}
      
        

        {/*   <Counter  /> */}

   {/* <Greet name ='Bruce' hname ='Batman' >
    <p> This is a childern props</p>
    </Greet> 
   <Greet name ='Clark'  hname ='Superman'>
     <button>Button</button>
   </Greet>
   <Greet name = 'Diana' hname = 'Wonder Woman'/>  */}
{/* 
  //  <Welcome name ='Bruce' hname ='Batman' ></Welcome>
  //  <Welcome name ='Clark'  hname ='Superman'></Welcome>
  //  <Welcome name = 'Diana' hname = 'Wonder Woman'></Welcome>  */}

  {/*   <Hello />  */}
 
 
   </>
    </div>
  );
}
}

export default App;
