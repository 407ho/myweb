import React from 'react';
import {Button, Input} from 'semantic-ui-react'



import 펭귄 from "./펭귄.png"




function Login2(){

  return(
    <div>
    <Input/>
    <Button primary onClick = {(e) => {
      console.log(e)
      alert(e.target.value)
    } } > 로그인 </Button>
    </div>

  )
}



  class Login extends React.Component{
    constructor(){
      super()
      this.state = {id : "뭐"}
    }


    render(){
      return(
        <div>
        <Input onChange = {(e) => this.setState({id : e.target.value})}/>
        <Button value = {this.state.id} primary onClick = {(e) => {
          console.log(e)
          alert(e.target.value)
        } } > Login </Button>
        </div>

      )
    }
  }







function App(){
  return (
    <div>
    <p> 난 펭귄 아냐 </p>
    <img src = {펭귄} style ={ {"width" : 300, "hight" : 300} }/>
    <Button Primary> hello stranger </Button>
    <Login/>
    </div>
  );
}

export default App;
