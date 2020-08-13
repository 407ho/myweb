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
