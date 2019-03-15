import React, { Component } from 'react';



class App extends Component {
  state={
    messages:[]
  }
  handleSubmit=(event)=>{
    event.preventDefault()
console.log(event.target, "hi")
  }
  render() {
    return (
      <div className="App">
        <h1 id="connection" >connect</h1>
        <ul id="chat-window"><form id="form" onSubmit={this.handleSubmit}>
   <input id="handle" placeholder="Name"/>
   <input id="message" placeholder="Type here..."/>
   <button type="submit" form="form" >

   </button>
   {this.state.messages.map((message)=>{
     return <li>{message}</li>
   })}
 </form></ul>

 
       
      </div>
    );
  }
}

export default App;
